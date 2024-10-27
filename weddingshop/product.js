const urlBase = "https://solidtechsolutions.com.br";
//const urlBase = "http://localhost:8080";

// Função para obter parâmetro da query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para renderizar detalhes do produto
async function renderProductDetail(productId) {
    const product = await getProductById(productId);
    hideLoading()
    const productDetailContainer = document.getElementById('product-detail');

    if (!product) {
        productDetailContainer.innerHTML = `
            <p>Produto não encontrado.</p>
            <a href="index.html" class="btn btn-primary">Ir para Home</a>
        `;
        return;
    }

    // Converte as quotasPurchased e quotasTotals para inteiros
    const quotasPurchased = parseInt(product.quotasPurchased, 10);
    const quotasTotals = parseInt(product.quotasTotals, 10);

    // Verifica se o valor do preço também é uma string e faz o parse para float se necessário
    const productPrice = parseFloat(product.price);

    // Cálculo do valor de cada quota
    const quotaValue = productPrice / quotasTotals;

    // Cálculo da porcentagem de quotas adquiridas
    const quotaPercentage = (quotasPurchased / quotasTotals) * 100;

    const productDetail = `
        <div class="row align-items-start">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid rounded mb-3" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2 class="mb-2">${product.name}</h2>
                <p class="text-muted h5">R$ ${productPrice.toFixed(2).replace('.', ',')}</p>
                <p class="mb-4">${product.description || 'Descrição não disponível.'}</p>

                <p><strong>Valor de cada cota:</strong> R$ ${quotaValue.toFixed(2).replace('.', ',')}</p>

                <!-- Barra de Progresso -->
                <div class="progress mb-3" style="height: 25px;">
                    <div class="progress-bar bg-success" role="progressbar" style="width: ${quotaPercentage}%" aria-valuenow="${quotaPercentage}" aria-valuemin="0" aria-valuemax="100">
                        ${quotaPercentage.toFixed(2)}%
                    </div>
                </div>
                <p class="mb-4">${quotasPurchased} de ${quotasTotals} cotas adquiridas.</p>

                <!-- Campo para selecionar quantidade de cotas -->
               <div class="mb-4">
                    <label for="quota-quantity" class="form-label">Quantidade de cotas</label>
                    <div class="d-flex align-items-center">
                        <input type="tel" class="form-control" id="quota-quantity" min="1" max="${quotasTotals - quotasPurchased}" value="1" style="margin-right: 25px !important">
                        <button class="btn btn-primary" id="buy-quota-button">Presentear cotas</button>
                    </div>
                </div>

                <!-- Botões Presentear e Comprar Cotas -->
                <div class="d-flex">
                    <button class="btn btn-primary me-2" id="gift-button">Presentear</button>
                    <!-- Caso deseje adicionar mais botões, eles podem ser inseridos aqui com espaçamento -->
                </div>
            </div>
        </div>

        <!-- Avaliações dos clientes -->
        <div class="mt-5">
            <h3>Mensagens</h3>
            ${filterReviews(product) ? product.reviews.map(review => review.enable ?
        `<div class="media mb-4">
                            <div class="media-body">
                                <h5 class="mt-0">${review.name}</h5>
                                <p>${review.comment}</p>
                            </div>
                        </div>
                    `: ``).join('')
            : '<p>Nenhuma avaliação disponível.</p>'}
        </div>

        <!-- Produtos Relacionados -->
        <div class="mt-5" id="related-products-section">
            <h3>Produtos Relacionados</h3>
            <div class="row" id="related-products"></div>
        </div>
    `;

    productDetailContainer.innerHTML = productDetail;

    // Adicionar listener ao botão de presentear
    document.getElementById('gift-button').addEventListener('click', () => {
        openReviewModal()
        document.getElementById('submit-review-button').addEventListener('click', () => {
            const quotaQuantity = parseInt(document.getElementById('quota-quantity').value, 10);
            handleReviewAndQuota(productId, product, quotaQuantity, true);
        });
    });

    // Adicionar listener ao botão de comprar quotas
    document.getElementById('buy-quota-button').addEventListener('click', () => {
        openReviewModal()
        document.getElementById('submit-review-button').addEventListener('click', () => {
            const quotaQuantity = parseInt(document.getElementById('quota-quantity').value, 10);
            handleReviewAndQuota(productId, product, quotaQuantity, false);
        });
    });

    // Aplica o atributo disabled conforme a condição
    const quotaQuantityInput = document.getElementById('quota-quantity');
    const buyQuotaButton = document.getElementById('buy-quota-button');

    if (isDisabled(quotasTotals)) {
        quotaQuantityInput.setAttribute('disabled', true);
        buyQuotaButton.setAttribute('disabled', true);
    } else {
        quotaQuantityInput.removeAttribute('disabled');
        buyQuotaButton.removeAttribute('disabled');
    }
    // Carregar e renderizar produtos relacionados
    renderRelatedProducts();
}

function isDisabled(quotasTotals) {
    return quotasTotals == 1;
}


function filterReviews(product) {
    if (product.reviews && product.reviews.length > 0) {
        return product.reviews.some(review => review.enable === true); // Retorna true se ao menos uma review tiver enable = true
    }
    return false; // Retorna false se não houver avaliações ou se nenhuma tiver enable = true
}

// Função para enviar pedido de presente
function sendGiftFully(product) {
    
    const url = `${urlBase}/api/payments`;
    const body = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description
    };

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(response => response.text())
        .then(data => {
            // Redireciona para a página de pagamento
            window.location.href = data;
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Houve um erro ao enviar o pedido de presente.');
        });
}

// Função para abrir o modal ao clicar nos botões de presentear ou comprar cotas
function openReviewModal() {
    $('#reviewModal').modal('show');
}
// Função para adicionar avaliação ao produto
function sendReviewToProduct(productId) {
    return new Promise((resolve, reject) => {
        const reviewerName = document.getElementById('reviewer-name').value;
        const reviewComment = document.getElementById('review-comment').value;
        const url = `${urlBase}/api/products/${productId}/reviews`;

        const body = {
            name: reviewerName,
            comment: reviewComment,
            enable: false
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.text())
            .then(data => {
                resolve(data); // Sucesso
            })
            .catch(error => {
                console.error('Erro ao salvar mensagem:', error);
                reject(error); // Falha
            });
    });
}

// Função para enviar pedido de compra de quotas
function buyQuota(product, quotaQuantity) {
    return new Promise((resolve, reject) => {
        if (quotaQuantity < 1) {
            alert('A quantidade de cotas deve ser pelo menos 1.');
            return reject(new Error('Quantidade inválida'));
        }

        if (quotaQuantity > (product.quotasTotals - product.quotasPurchased)) {
            alert('A quantidade de cotas excede o número disponível.');
            return reject(new Error('Cotas excedidas'));
        }
        const url = `${urlBase}/api/payments`;

        const body = {
            id: product.id,
            name: product.name,
            pricePerQuota: parseInt(product.price) / parseInt(product.quotasTotals),
            totalPrice: (parseInt(product.price) / parseInt(product.quotasTotals)) * quotaQuantity,
            quotaQuantity: quotaQuantity,
            description: product.description
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
            .then(response => response.text())
            .then(data => {
                resolve(data); // Sucesso
            })
            .catch(error => {
                console.error('Erro ao processar a compra das cotas:', error);
                reject(error); // Falha
            });
    });
}

// Função que aciona as duas funções de forma independente
function handleReviewAndQuota(productId, product, quotaQuantity, isFully) {
    showLoading();
    Promise.allSettled([
        sendReviewToProduct(productId),
        isFully ? sendGiftFully(product) : buyQuota(product, quotaQuantity)
    ])
        .then(results => {
            // Lida com o resultado de cada promessa
            results.forEach((result, index) => {
                if (result.status === 'fulfilled') {
                    if (result.value && result.value != null && result.value.includes('mercadopago')) {
                        window.location.href = result.value;
                    }
                }
            });
            hideLoading()

            // Fecha o modal após ambas as operações concluírem
            $('#reviewModal').modal('hide');
        })
        .catch(error => {
            console.error('Erro ao processar as operações:', error);
        });
}

// Função para obter o produto pelo ID
async function getProductById(productId) {
    const url = `${urlBase}/api/products/${productId}`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar o produto');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        alert('Houve um erro ao buscar o produto.');
    }
}

// Função para renderizar produtos relacionados
async function renderRelatedProducts() {
    const relatedProductsContainer = document.getElementById('related-products');
    const relatedProducts = await getRelatedProducts();

    if (!relatedProducts || relatedProducts.length === 0) {
        document.getElementById('related-products-section').style.display = 'none';
        return;
    }

    relatedProducts.slice(0, 4).forEach(relatedProduct => {
        const quotasDisponiveis = relatedProduct.quotasTotals - relatedProduct.quotasPurchased;

        const quotasTotals = parseInt(relatedProduct.quotasTotals, 10);
        const productPrice = parseFloat(relatedProduct.price);
        const quotaValue = productPrice / quotasTotals;
        const quotasInfo = quotasDisponiveis != 1
            ? `<p class="card-text">${quotasDisponiveis} cotas de R$ ${quotaValue.toFixed(2).replace('.', ',')}</p>`
            : `<p class="card-text">1 cota de R$${parseFloat(relatedProduct.price).toFixed(2).replace('.', ',')}</p>`;
        const relatedProductCard = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <img src="${relatedProduct.image}" class="card-img-top" alt="${relatedProduct.name}">
                    <div class="card-body">
                    <h5 class="card-title">${relatedProduct.name}</h5>
                        ${quotasInfo} 
                        <a href="product.html?id=${relatedProduct.id}" class="btn btn-primary">Ver Produto</a>
                    </div>
                </div>
            </div>
        `;
        relatedProductsContainer.insertAdjacentHTML('beforeend', relatedProductCard);
    });
}

// Função que busca produtos relacionados
async function getRelatedProducts() {
    const url = `${urlBase}/api/products/random`;
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar produtos relacionados');
        }

        return await response.json();
    } catch (error) {
        console.error('Erro:', error);
        return [];
    }
}

function showLoading() {
    document.getElementById('loading-screen').style.display = 'flex';
}


function hideLoading() {
    document.getElementById('loading-screen').style.display = 'none';
}


// Obtém o ID do produto da URL e renderiza os detalhes do produto
const productId = getQueryParam('id');

if (productId) {
    renderProductDetail(productId);
} else {
    document.getElementById('product-detail').innerHTML = `
        <p>ID do produto não fornecido.</p>
        <a href="index.html" class="btn btn-primary">Ir para Home</a>
    `;
}




//window.addEventListener('scroll', () => {
//    const footer = document.getElementById('reserved-rights');
//    const floatingButtons = document.getElementById('floating-buttons');
//    const footerRect = footer.getBoundingClientRect();
//    const windowHeight = window.innerHeight;
//
//    // Se o footer estiver visível
//    if (footerRect.top < windowHeight && footerRect.bottom >= 0) {
//        floatingButtons.style.bottom = `${footerRect.height}px`; // Sobe o botão flutuante até o topo do footer
//    } else {
//        floatingButtons.style.bottom = '0'; // Volta a posição original
//    }
//});

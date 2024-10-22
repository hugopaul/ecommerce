// Custom JavaScript for product.html

// Função para obter parâmetro da query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Função para renderizar detalhes do produto
async function renderProductDetail(productId) {
    const product = await getProductById(productId);
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
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p class="text-muted">R$ ${productPrice.toFixed(2)}</p>
                <p>${product.description || 'Descrição não disponível.'}</p>

                <p><strong>Valor de cada cota:</strong> R$ ${quotaValue.toFixed(2)}</p>

                <!-- Barra de Progresso -->
                <div class="progress mb-3">
                    <div class="progress-bar bg-success" role="progressbar" style="width: ${quotaPercentage}%" aria-valuenow="${quotaPercentage}" aria-valuemin="0" aria-valuemax="100">
                        ${quotaPercentage.toFixed(2)}%
                    </div>
                </div>
                <p>${quotasPurchased} de ${quotasTotals} cotas adquiridas.</p>

                <button class="btn btn-primary" id="gift-button">Presentear</button>
            </div>
        </div>

        <!-- Avaliações dos clientes -->
        <div class="mt-5">
            <h3>Avaliações</h3>
            ${product.reviews && product.reviews.length > 0 ? product.reviews.map(review => `
                <div class="media mb-4">
                    <div class="media-body">
                        <h5 class="mt-0">${review.name}</h5>
                        <p>${review.comment}</p>
                    </div>
                </div>
            `).join('') : '<p>Nenhuma avaliação disponível.</p>'}
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
        sendGiftRequest(product);
    });

    // Carregar e renderizar produtos relacionados
    renderRelatedProducts();
}


// Função para obter o produto pelo ID
async function getProductById(productId) {
    const url = `https://solidtechsolutions.com.br/api/products/${productId}`;
    //const url = `http://localhost:8080/api/products/${productId}`;

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
    const relatedProducts = await getRelatedProducts(); // Função que busca produtos relacionados

    if (!relatedProducts || relatedProducts.length === 0) {
        document.getElementById('related-products-section').style.display = 'none'; // Esconde a seção se não houver produtos
        return;
    }

    relatedProducts.slice(0, 4).forEach(relatedProduct => {
        const relatedProductCard = `
            <div class="col-md-3 col-sm-6 mb-4">
                <div class="card">
                    <img src="${relatedProduct.image}" class="card-img-top" alt="${relatedProduct.name}">
                    <div class="card-body">
                        <h5 class="card-title">${relatedProduct.name}</h5>
                        <p class="card-text">R$ ${parseFloat(relatedProduct.price).toFixed(2)}</p>
                        <a href="product.html?id=${relatedProduct.id}" class="btn btn-primary">Ver Produto</a>
                    </div>
                </div>
            </div>
        `;
        relatedProductsContainer.insertAdjacentHTML('beforeend', relatedProductCard);
    });
}

// Função para renderizar detalhes do produto
async function renderProductDetail(productId) {
    const product = await getProductById(productId);
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
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p class="text-muted">R$ ${productPrice.toFixed(2)}</p>
                <p>${product.description || 'Descrição não disponível.'}</p>

                <p><strong>Valor de cada cota:</strong> R$ ${quotaValue.toFixed(2)}</p>

                <!-- Barra de Progresso -->
                <div class="progress mb-3">
                    <div class="progress-bar bg-success" role="progressbar" style="width: ${quotaPercentage}%" aria-valuenow="${quotaPercentage}" aria-valuemin="0" aria-valuemax="100">
                        ${quotaPercentage.toFixed(2)}%
                    </div>
                </div>
                <p>${quotasPurchased} de ${quotasTotals} cotas adquiridas.</p>

                <!-- Campo para selecionar quantidade de cotas -->
                <div class="mb-3">
                    <label for="quota-quantity" class="form-label">Quantidade de cotas</label>
                    <input type="number" class="form-control" id="quota-quantity" min="1" max="${quotasTotals - quotasPurchased}" value="1">
                </div>

                <!-- Botões Presentear e Comprar Cotas -->
                <div class="d-flex">
                    <button class="btn btn-primary" id="gift-button">Presentear</button>
                    <button class="btn btn-primary" id="buy-quota-button">Presentear cotas</button>
                </div>
            </div>
        </div>

        <!-- Avaliações dos clientes -->
        <div class="mt-5">
            <h3>Avaliações</h3>
            ${product.reviews && product.reviews.length > 0 ? product.reviews.map(review => `
                <div class="media mb-4">
                    <div class="media-body">
                        <h5 class="mt-0">${review.name}</h5>
                        <p>${review.comment}</p>
                    </div>
                </div>
            `).join('') : '<p>Nenhuma avaliação disponível.</p>'}
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
        sendGiftRequest(product);
    });

    // Adicionar listener ao botão de comprar quotas
    document.getElementById('buy-quota-button').addEventListener('click', () => {
        const quotaQuantity = parseInt(document.getElementById('quota-quantity').value, 10);
        buyQuota(product, quotaQuantity);
    });

    // Carregar e renderizar produtos relacionados
    renderRelatedProducts();
}

// Função para enviar pedido de compra de quotas
function buyQuota(product, quotaQuantity) {
    if (quotaQuantity < 1) {
        alert('A quantidade de cotas deve ser pelo menos 1.');
        return;
    }

    if (quotaQuantity > (product.quotasTotals - product.quotasPurchased)) {
        alert('A quantidade de cotas excede o número disponível.');
        return;
    }

    const url = `https://solidtechsolutions.com.br/api/payments`;
    //const url = `http://localhost:8080/api/payments`;
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
            // Redireciona para a página de pagamento
            window.location.href = data;
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Houve um erro ao processar a compra das cotas.');
        });
}


// Função para enviar pedido de presente
function sendGiftRequest(product) {
    const url = `https://solidtechsolutions.com.br/api/payments`;
    //const url = `http://localhost:8080/api/payments`;

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


// Função que busca produtos relacionados (simulada para fins de exemplo)
async function getRelatedProducts() {
    const url = `https://solidtechsolutions.com.br/api/products/random`;
    //const url = `http://localhost:8080/api/products`; // Supondo que esse endpoint retorne todos os produtos, ou produtos relacionados

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

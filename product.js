// Custom JavaScript for product.html

// Function to get query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to render product details
function renderProductDetail(productId) {
    const product = products.find(p => p.id == productId);
    const productDetailContainer = document.getElementById('product-detail');

    if (!product) {
        productDetailContainer.innerHTML = `
            <p>Produto não encontrado.</p>
            <a href="index.html" class="btn btn-primary">Ir para Home</a>
        `;
        return;
    }

    const productDetail = `
        <div class="row">
            <div class="col-md-6">
                <img src="${product.image}" class="img-fluid" alt="${product.name}">
            </div>
            <div class="col-md-6">
                <h2>${product.name}</h2>
                <p class="text-muted">R$ ${product.price}</p>
                <p>${product.description}</p>
                <p><strong>Características:</strong></p>
                <ul>${product.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
                <button class="btn btn-primary" id="gift-button">Presentear</button>
            </div>
        </div>

        <!-- Customer Reviews -->
        <div class="mt-5">
            <h3>Avaliações dos Clientes</h3>
            ${product.reviews.map(review => `
                <div class="media mb-4">
                    <img src="https://via.placeholder.com/64" class="mr-3" alt="Customer Image">
                    <div class="media-body">
                        <h5 class="mt-0">${review.name}</h5>
                        <p>${review.comment}</p>
                    </div>
                </div>
            `).join('')}
        </div>

        <!-- Produtos Relacionados -->
        <div class="mt-5">
            <h3>Produtos Relacionados</h3>
            <div class="row">
                ${products.slice(0, 4).map(relatedProduct => `
                    <div class="col-md-3 col-sm-6 mb-4">
                        <div class="card">
                            <img src="${relatedProduct.image}" class="card-img-top" alt="Related Product">
                            <div class="card-body">
                                <h5 class="card-title">${relatedProduct.name}</h5>
                                <p class="card-text">R$ ${relatedProduct.price}</p>
                                <a href="product.html?id=${relatedProduct.id}" class="btn btn-primary">Ver Produto</a>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    productDetailContainer.innerHTML = productDetail;

    // Add event listener to the "Presentear" button
    document.getElementById('gift-button').addEventListener('click', () => {
        sendGiftRequest(product);
    });
}

// Function to send gift request
function sendGiftRequest(product) {
    const url = `htts://solidtechsolutions.com.br:8080/api/payments`;
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
        // Assuming data is the URL to redirect to
        window.location.href = data;
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Houve um erro ao enviar o pedido de presente.');
    });
}

// Get product ID from URL and render product details
const productId = getQueryParam('id');

if (productId) {
    renderProductDetail(productId);
} else {
    document.getElementById('product-detail').innerHTML = `
        <p>ID do produto não fornecido.</p>
        <a href="index.html" class="btn btn-primary">Ir para Home</a>
    `;
}

// Custom JavaScript for index.html
const productsPerPage = 12; // Atualizado para 12 itens por página
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
let filteredProducts = [];

function showLoading() {
    document.getElementById('loading-screen').style.display = 'flex';
}

function hideLoading() {
    document.getElementById('loading-screen').style.display = 'none';
}

function renderProducts(page, productsToRender = filteredProducts) {
    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = productsToRender.slice(start, end);

    const productContainer = document.getElementById('product-list');
    productContainer.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">R$ ${parseFloat(product.price).toFixed(2)}</p>
                        <p>${product.quotasTotals - product.quotasPurchased} cotas disponíveis</p>
                        <a href="product.html?id=${product.id}" class="btn btn-primary">Ver Produto</a>
                    </div>
                </div>
            </div>
        `;
        productContainer.insertAdjacentHTML('beforeend', productCard);
    });
}

function renderPagination(productsToRender = filteredProducts) {
    const totalPages = Math.ceil(productsToRender.length / productsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const paginationItem = `
            <li class="page-item ${i === currentPage ? 'active' : ''}">
                <a class="page-link" href="#product-list" data-page="${i}">${i}</a>
            </li>
        `;
        paginationContainer.insertAdjacentHTML('beforeend', paginationItem);
    }

    // Adicionar evento de clique nos links de paginação
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage = parseInt(event.target.getAttribute('data-page'));
            localStorage.setItem('currentPage', currentPage);
            renderProducts(currentPage, productsToRender);
            renderPagination(productsToRender);

            // Rolagem suave para o elemento product-list
            document.getElementById('product-list').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function sortProducts(criteria) {
    switch (criteria) {
        case 'alphabetical':
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'low-to-high':
            filteredProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            break;
        case 'high-to-low':
            filteredProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            break;
    }
    currentPage = 1; // Voltar para a primeira página após ordenar
    renderProducts(currentPage);
    renderPagination();
}

// Adicionar eventos aos botões de ordenação
document.querySelectorAll('.sort-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sortCriteria = button.getAttribute('data-sort');
        sortProducts(sortCriteria);
    });
});

async function getAllProducts() {
    const url = `https://solidtechsolutions.com.br/api/products`;
    //const url = `http://localhost:8080/api/products`;

    try {
        showLoading(); // Exibir a tela de carregamento

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Erro ao buscar os produtos');
        }

        const products = await response.json();
        filteredProducts = products; // Atualiza a lista global de produtos filtrados

        // Renderizar produtos e paginação após carregar os produtos
        renderProducts(currentPage);
        renderPagination();
    } catch (error) {
        console.error('Erro:', error);
        alert('Houve um erro ao buscar os produtos.');
    } finally {
        hideLoading(); // Esconder a tela de carregamento após o carregamento
    }
}

// Chamada inicial para buscar produtos e renderizar a página
getAllProducts();

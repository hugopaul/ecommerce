const urlBase = "https://solidtechsolutions.com.br";
//const urlBase = "http://localhost:8080";

// Configurações
const productsPerPage = 12;
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
let filteredProducts = [];

// Elementos do DOM
const productContainer = document.getElementById('product-list');
const paginationContainer = document.getElementById('pagination');
const loadingScreen = document.getElementById('loading-screen');

// Funções de controle de UI
function showLoading() {
    if (loadingScreen) loadingScreen.style.display = 'flex';
}

function hideLoading() {
    if (loadingScreen) loadingScreen.style.display = 'none';
}

// Função principal de renderização de produtos
async function renderProducts(page, productsToRender = filteredProducts) {
    if (!productContainer) {
        console.error('Container de produtos não encontrado no DOM');
        return;
    }

    const start = (page - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToShow = productsToRender.slice(start, end);

    // Limpa o container de produtos
    productContainer.innerHTML = '';

    // Se não houver produtos, exibe mensagem
    if (productsToShow.length === 0) {
        productContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <h4>Nenhum produto encontrado</h4>
                <p>Por favor, tente novamente mais tarde</p>
            </div>
        `;
        return;
    }

    // Cria um fragmento de documento para otimização
    const fragment = document.createDocumentFragment();

    productsToShow.forEach(product => {
        const quotasDisponiveis = product.quotasTotals - product.quotasPurchased;
        const quotasTotals = parseInt(product.quotasTotals, 10);
        const productPrice = parseFloat(product.price);
        const quotaValue = productPrice / quotasTotals;
        
        const quotasInfo = quotasDisponiveis !== 1
            ? `${quotasDisponiveis} cotas de R$${quotaValue.toFixed(2).replace('.', ',')}`
            : `1 cota de R$${productPrice.toFixed(2).replace('.', ',')}`;

        // Cria elementos DOM diretamente para melhor performance
        const colDiv = document.createElement('div');
        colDiv.className = 'col-lg-3 col-md-4 col-sm-6 mb-4';

        const cardDiv = document.createElement('div');
        cardDiv.className = 'card h-100';

        const img = document.createElement('img');
        img.src = './imagens/'+product.image;
        img.alt = product.name;
        img.className = 'card-img-top';
        img.loading = 'lazy'; // Otimização para carregamento

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body d-flex flex-column';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = product.name;

        const quotaText = document.createElement('p');
        quotaText.className = 'card-text';
        quotaText.textContent = quotasInfo;

        const button = document.createElement('a');
        button.href = `product.html?id=${product.id}`;
        button.className = 'btn btn-primary mt-auto';
        button.textContent = 'Ver Produto';

        // Monta a estrutura do card
        cardBody.appendChild(title);
        cardBody.appendChild(quotaText);
        cardBody.appendChild(button);
        
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBody);
        
        colDiv.appendChild(cardDiv);
        fragment.appendChild(colDiv);
    });

    // Adiciona todos os produtos de uma vez ao DOM
    productContainer.appendChild(fragment);
}

// Função de renderização da paginação
function renderPagination(productsToRender = filteredProducts) {
    if (!paginationContainer) return;

    const totalPages = Math.ceil(productsToRender.length / productsPerPage);
    paginationContainer.innerHTML = '';

    // Cria um fragmento para a paginação
    const fragment = document.createDocumentFragment();

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;

        const a = document.createElement('a');
        a.className = 'page-link';
        a.href = '#product-list';
        a.dataset.page = i;
        a.textContent = i;

        a.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage = parseInt(event.target.dataset.page);
            localStorage.setItem('currentPage', currentPage);
            renderProducts(currentPage, productsToRender);
            renderPagination(productsToRender);
            productContainer.scrollIntoView({ behavior: 'smooth' });
        });

        li.appendChild(a);
        fragment.appendChild(li);
    }

    paginationContainer.appendChild(fragment);
}

// Funções de ordenação
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
    currentPage = 1;
    renderProducts(currentPage);
    renderPagination();
}

// Configura eventos de ordenação
function setupSortButtons() {
    document.querySelectorAll('.sort-btn').forEach(button => {
        button.addEventListener('click', () => {
            const sortCriteria = button.dataset.sort;
            sortProducts(sortCriteria);
        });
    });
}

// Função principal para carregar produtos
async function getAllProducts() {
    try {
        showLoading();
        console.log('Iniciando carregamento de produtos...');

        const response = await fetch(`${urlBase}/api/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const products = await response.json();
        console.log(`Produtos recebidos: ${products.length} itens`);

        filteredProducts = products;
        
        // Renderiza os produtos e paginação
        renderProducts(currentPage);
        renderPagination();
        
        // Configura os botões de ordenação
        setupSortButtons();
        
    } catch (error) {
        console.error('Falha ao carregar produtos:', error);
        
        // Exibe mensagem de erro no container de produtos
        if (productContainer) {
            productContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <h4 class="text-danger">Erro ao carregar produtos</h4>
                    <p>${error.message}</p>
                    <button onclick="getAllProducts()" class="btn btn-primary mt-3">Tentar novamente</button>
                </div>
            `;
        }
    } finally {
        hideLoading();
    }
}

// Inicialização quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM totalmente carregado');
    getAllProducts();
});
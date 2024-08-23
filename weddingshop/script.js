// Custom JavaScript for index.html
const productsPerPage = 12; // Updated to 12 items per page
let currentPage = parseInt(localStorage.getItem('currentPage')) || 1;
let filteredProducts = products;

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
                <a class="page-link" href="#" data-page="${i}">${i}</a>
            </li>
        `;
        paginationContainer.insertAdjacentHTML('beforeend', paginationItem);
    }

    // Add click event to pagination links
    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            currentPage = parseInt(event.target.getAttribute('data-page'));
            localStorage.setItem('currentPage', currentPage);
            renderProducts(currentPage, productsToRender);
            renderPagination(productsToRender);
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
    currentPage = 1; // Reset to the first page after sorting
    renderProducts(currentPage);
    renderPagination();
}

// Add event listeners to sort buttons
document.querySelectorAll('.sort-btn').forEach(button => {
    button.addEventListener('click', () => {
        const sortCriteria = button.getAttribute('data-sort');
        sortProducts(sortCriteria);
    });
});

// Initial render
renderProducts(currentPage);
renderPagination();

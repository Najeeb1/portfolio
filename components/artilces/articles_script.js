document.addEventListener('DOMContentLoaded', function() {
    // Constants
    const ARTICLES_PER_PAGE = 3;
    const articleContainer = document.querySelector('.article-container');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const pageNumbersContainer = document.getElementById('page-numbers');
    const backToTopBtn = document.getElementById('back-to-top');
    
    let currentPage = 1;
    const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);

    // Initialize the page
    displayArticles(currentPage);
    setupPagination();
    setupBackToTopButton();
    
    // Event listeners for pagination
    prevPageBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            displayArticles(currentPage);
            updatePaginationUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    nextPageBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayArticles(currentPage);
            updatePaginationUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

// Function to display articles for the current page
function displayArticles(page) {
    // Clear current articles
    articleContainer.innerHTML = '';
    
    // Calculate start and end indices
    const startIndex = (page - 1) * ARTICLES_PER_PAGE;
    const endIndex = Math.min(startIndex + ARTICLES_PER_PAGE, articles.length);
    
    // Display articles for current page
    for (let i = startIndex; i < endIndex; i++) {
        const article = articles[i];
        const articleElement = document.createElement('article');
        articleElement.className = 'article';
        articleElement.innerHTML = `
            <img src="${article.image}" alt="${article.title}">
            <div class="article-content">
                <h2>${article.title}</h2>
                <div class="article-meta">
                    <span>${article.author}</span>
                    <span>${article.date} | ${article.category}</span>
                </div>
                <p class="excerpt">${article.excerpt}</p>
                <div class="content">${article.content}</div>
                <button class="read-more-btn">Read More</button>
                <button class="read-less-btn">Read Less</button>
            </div>
        `;
        articleContainer.appendChild(articleElement);
    }
    
    // Add event listeners to Read More/Less buttons
    setupReadMoreButtons();
}

// Setup pagination UI
function setupPagination() {
    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('span');
        pageBtn.className = 'page-number';
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            currentPage = i;
            displayArticles(currentPage);
            updatePaginationUI();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        pageNumbersContainer.appendChild(pageBtn);
    }
    
    updatePaginationUI();
}

// Update pagination UI based on current page
function updatePaginationUI() {
    // Update page number active state
    const pageNumbers = document.querySelectorAll('.page-number');
    pageNumbers.forEach((pageNumber, index) => {
        if (index + 1 === currentPage) {
            pageNumber.classList.add('active');
        } else {
            pageNumber.classList.remove('active');
        }
    });
    
    // Update prev/next button states
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

// Setup Read More/Less functionality
function setupReadMoreButtons() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    const readLessBtns = document.querySelectorAll('.read-less-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const articleContent = this.parentElement;
            const content = articleContent.querySelector('.content');
            const readLessBtn = articleContent.querySelector('.read-less-btn');
            
            content.classList.add('show');
            this.style.display = 'none';
            readLessBtn.style.display = 'inline-block';
        });
    });
    
    readLessBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const articleContent = this.parentElement;
            const content = articleContent.querySelector('.content');
            const readMoreBtn = articleContent.querySelector('.read-more-btn');
            
            content.classList.remove('show');
            this.style.display = 'none';
            readMoreBtn.style.display = 'inline-block';
        });
    });
}

// Setup Back to Top button
function setupBackToTopButton() {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
});
document.addEventListener('DOMContentLoaded', () => {
    // Project carousel functionality
    const projects = document.querySelectorAll('.project');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const nextButton = document.querySelector('.carousel-btn.next');
    let currentIndex = 0;

    // Initialize first project as active
    projects[0].classList.add('active');

    function updateProjects() {
        projects.forEach((project, index) => {
            if (index === currentIndex) {
                project.style.display = 'flex';
                project.classList.add('active');
            } else {
                project.style.display = 'none';
                project.classList.remove('active');
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + projects.length) % projects.length;
        updateProjects();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % projects.length;
        updateProjects();
    });

    // Back to Top Button Functionality
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // Show button when scrolling down
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        // Smooth scroll to top when button is clicked
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Articles Pagination
    const articlesContainer = document.querySelector('.articles-container');
    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    if (articlesContainer && paginationButtons.length > 0) {
        const articles = Array.from(articlesContainer.children);
        const articlesPerPage = 3;
        let currentPage = 1;

        // Function to show articles for current page
        const showArticles = (page) => {
            const startIndex = (page - 1) * articlesPerPage;
            const endIndex = startIndex + articlesPerPage;

            articles.forEach((article, index) => {
                if (index >= startIndex && index < endIndex) {
                    article.style.display = 'block';
                } else {
                    article.style.display = 'none';
                }
            });

            // Update active pagination button
            paginationButtons.forEach(btn => {
                btn.classList.remove('active');
                if (parseInt(btn.textContent) === page) {
                    btn.classList.add('active');
                }
            });
        };

        // Initialize first page
        showArticles(currentPage);

        // Add click event to pagination buttons
        paginationButtons.forEach(button => {
            button.addEventListener('click', () => {
                currentPage = parseInt(button.textContent);
                showArticles(currentPage);
            });
        });
    }
}); 


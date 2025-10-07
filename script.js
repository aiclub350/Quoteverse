// Quote Generator Website JavaScript

// Quote Database
const quotes = [
    {
        id: 1,
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs",
        category: "motivation",
        image: "assets/images/hrJwS6ViUiDB.jpg",
        tags: ["work", "passion", "success"]
    },
    {
        id: 2,
        text: "Today's accomplishments were yesterday's impossibilities.",
        author: "Robert H. Schuller",
        category: "success",
        image: "assets/images/hIV18CMD0SOm.jpg",
        tags: ["achievement", "possibility", "progress"]
    },
    {
        id: 3,
        text: "Never let success go to your head, never let failure get to your heart.",
        author: "Beyoncé",
        category: "wisdom",
        image: "assets/images/iG5XIf0HoaX8.jpg",
        tags: ["balance", "humility", "resilience"]
    },
    {
        id: 4,
        text: "In life, all good things come hard, but wisdom is the hardest to come by.",
        author: "Lucille Ball",
        category: "wisdom",
        image: "assets/images/mxlWGoHOw5yC.jpg",
        tags: ["wisdom", "effort", "life"]
    },
    {
        id: 5,
        text: "I'm going to use all my tools, my God-given ability, and make the best life I can with it.",
        author: "LeBron James",
        category: "motivation",
        image: "assets/images/btwb0jlmDsfW.jpg",
        tags: ["potential", "determination", "life"]
    },
    {
        id: 6,
        text: "We have two lives, and the second one begins when we realize we only have one.",
        author: "Confucius",
        category: "life",
        image: "assets/images/lHQDmS7vOWw0.jpg",
        tags: ["awareness", "life", "wisdom"]
    },
    {
        id: 7,
        text: "Act as if what you do makes a difference. It does.",
        author: "William James",
        category: "motivation",
        image: "assets/images/5hzgy8xRJB9k.jpg",
        tags: ["impact", "purpose", "action"]
    },
    {
        id: 8,
        text: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        category: "wisdom",
        image: "assets/images/ufhHFWqdnQ6t.jpg",
        tags: ["change", "leadership", "world"]
    },
    {
        id: 9,
        text: "Don't sit down and wait for the opportunities to come. Get up and make them.",
        author: "Madam C.J. Walker",
        category: "success",
        image: "assets/images/hrJwS6ViUiDB.jpg",
        tags: ["opportunity", "action", "entrepreneurship"]
    },
    {
        id: 10,
        text: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
        author: "Thomas Edison",
        category: "success",
        image: "assets/images/hIV18CMD0SOm.jpg",
        tags: ["opportunity", "work", "recognition"]
    },
    {
        id: 11,
        text: "The most difficult thing is the decision to act; the rest is merely tenacity.",
        author: "Amelia Earhart",
        category: "courage",
        image: "assets/images/iG5XIf0HoaX8.jpg",
        tags: ["decision", "action", "perseverance"]
    },
    {
        id: 12,
        text: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler",
        category: "life",
        image: "assets/images/mxlWGoHOw5yC.jpg",
        tags: ["time", "control", "responsibility"]
    },
    {
        id: 13,
        text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
        author: "Jimmy Dean",
        category: "wisdom",
        image: "assets/images/btwb0jlmDsfW.jpg",
        tags: ["adaptation", "perseverance", "goals"]
    },
    {
        id: 14,
        text: "You get what you give.",
        author: "Jennifer Lopez",
        category: "life",
        image: "assets/images/lHQDmS7vOWw0.jpg",
        tags: ["reciprocity", "effort", "karma"]
    },
    {
        id: 15,
        text: "It is often the small steps, not the giant leaps, that bring about the most lasting change.",
        author: "Queen Elizabeth II",
        category: "wisdom",
        image: "assets/images/5hzgy8xRJB9k.jpg",
        tags: ["progress", "consistency", "change"]
    },
    {
        id: 16,
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt",
        category: "motivation",
        image: "assets/images/ufhHFWqdnQ6t.jpg",
        tags: ["belief", "confidence", "success"]
    },
    {
        id: 17,
        text: "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
        author: "Mae Jemison",
        category: "dreams",
        image: "assets/images/hrJwS6ViUiDB.jpg",
        tags: ["imagination", "potential", "limitations"]
    },
    {
        id: 18,
        text: "We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained.",
        author: "Marie Curie",
        category: "dreams",
        image: "assets/images/hIV18CMD0SOm.jpg",
        tags: ["purpose", "determination", "gifts"]
    },
    {
        id: 19,
        text: "The people who are crazy enough to think they can change the world are the ones who do.",
        author: "Steve Jobs",
        category: "dreams",
        image: "assets/images/iG5XIf0HoaX8.jpg",
        tags: ["ambition", "change", "innovation"]
    },
    {
        id: 20,
        text: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn",
        category: "motivation",
        image: "assets/images/mxlWGoHOw5yC.jpg",
        tags: ["possibility", "optimism", "mindset"]
    },
    {
        id: 21,
        text: "Never bend your head. Always hold it high. Look the world straight in the eye.",
        author: "Helen Keller",
        category: "courage",
        image: "assets/images/btwb0jlmDsfW.jpg",
        tags: ["confidence", "dignity", "courage"]
    },
    {
        id: 22,
        text: "Never allow a person to tell you no who doesn't have the power to say yes.",
        author: "Eleanor Roosevelt",
        category: "success",
        image: "assets/images/lHQDmS7vOWw0.jpg",
        tags: ["authority", "persistence", "empowerment"]
    },
    {
        id: 23,
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis",
        category: "dreams",
        image: "assets/images/5hzgy8xRJB9k.jpg",
        tags: ["age", "goals", "dreams"]
    },
    {
        id: 24,
        text: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett",
        category: "dreams",
        image: "assets/images/ufhHFWqdnQ6t.jpg",
        tags: ["dreams", "persistence", "opportunity"]
    },
    {
        id: 25,
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
        category: "courage",
        image: "assets/images/hrJwS6ViUiDB.jpg",
        tags: ["perseverance", "resilience", "courage"]
    },
    {
        id: 26,
        text: "Champions keep playing until they get it right.",
        author: "Billie Jean King",
        category: "success",
        image: "assets/images/hIV18CMD0SOm.jpg",
        tags: ["persistence", "excellence", "practice"]
    },
    {
        id: 27,
        text: "We will fail when we fail to try.",
        author: "Rosa Parks",
        category: "courage",
        image: "assets/images/iG5XIf0HoaX8.jpg",
        tags: ["effort", "failure", "trying"]
    },
    {
        id: 28,
        text: "A person who never made a mistake never tried anything new.",
        author: "Albert Einstein",
        category: "wisdom",
        image: "assets/images/mxlWGoHOw5yC.jpg",
        tags: ["mistakes", "innovation", "learning"]
    },
    {
        id: 29,
        text: "Challenges are gifts that force us to search for a new center of gravity.",
        author: "Oprah Winfrey",
        category: "wisdom",
        image: "assets/images/btwb0jlmDsfW.jpg",
        tags: ["challenges", "growth", "adaptation"]
    },
    {
        id: 30,
        text: "You're braver than you believe, stronger than you seem, and smarter than you think.",
        author: "A.A. Milne",
        category: "motivation",
        image: "assets/images/lHQDmS7vOWw0.jpg",
        tags: ["self-belief", "strength", "courage"]
    }
];

// Application State
let currentQuoteIndex = 0;
let filteredQuotes = [...quotes];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let currentCategory = 'all';
let displayedQuotes = [];
let quotesPerLoad = 9;

// DOM Elements
const elements = {
    featuredQuote: document.getElementById('featuredQuote'),
    quoteText: document.getElementById('quoteText'),
    quoteAuthor: document.getElementById('quoteAuthor'),
    generateBtn: document.getElementById('generateBtn'),
    searchInput: document.getElementById('searchInput'),
    searchBtn: document.getElementById('searchBtn'),
    categoryTabs: document.querySelectorAll('.category-tab'),
    quoteGrid: document.getElementById('quoteGrid'),
    favoritesGrid: document.getElementById('favoritesGrid'),
    loadMoreBtn: document.getElementById('loadMoreBtn'),
    loadingOverlay: document.getElementById('loadingOverlay'),
    shareModal: document.getElementById('shareModal'),
    closeModal: document.getElementById('closeModal'),
    navLinks: document.querySelectorAll('.nav-link')
};

// Utility Functions
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[randomIndex];
}

function showLoading() {
    elements.loadingOverlay.classList.add('active');
}

function hideLoading() {
    elements.loadingOverlay.classList.remove('active');
}

function animateElement(element, animationClass = 'fade-in-up') {
    element.classList.remove(animationClass);
    void element.offsetWidth; // Trigger reflow
    element.classList.add(animationClass);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Quote Generation
function generateNewQuote() {
    showLoading();
    
    setTimeout(() => {
        const newQuote = getRandomQuote();
        elements.quoteText.textContent = `"${newQuote.text}"`;
        elements.quoteAuthor.textContent = `- ${newQuote.author}`;
        
        animateElement(elements.featuredQuote);
        hideLoading();
    }, 800);
}

// Quote Card Creation
function createQuoteCard(quote) {
    const isFavorited = favorites.includes(quote.id);
    
    const card = document.createElement('div');
    card.className = 'quote-card fade-in-up';
    card.innerHTML = `
        <img src="${quote.image}" alt="Quote background" class="quote-card-image" loading="lazy">
        <div class="quote-card-content">
            <blockquote class="quote-card-text">"${quote.text}"</blockquote>
            <div class="quote-card-footer">
                <cite class="quote-card-author">- ${quote.author}</cite>
                <div class="quote-card-actions">
                    <button class="action-btn favorite-btn ${isFavorited ? 'favorited' : ''}" data-quote-id="${quote.id}" title="Add to favorites">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFavorited ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <button class="action-btn share-btn" data-quote-id="${quote.id}" title="Share quote">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="18" cy="5" r="3"></circle>
                            <circle cx="6" cy="12" r="3"></circle>
                            <circle cx="18" cy="19" r="3"></circle>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Gallery Management
function renderQuoteGrid() {
    const quotesToShow = displayedQuotes.slice(0, quotesPerLoad);
    elements.quoteGrid.innerHTML = '';
    
    quotesToShow.forEach((quote, index) => {
        setTimeout(() => {
            const card = createQuoteCard(quote);
            elements.quoteGrid.appendChild(card);
        }, index * 100);
    });
    
    // Show/hide load more button
    elements.loadMoreBtn.style.display = 
        displayedQuotes.length > quotesPerLoad ? 'block' : 'none';
}

function loadMoreQuotes() {
    const currentlyShown = elements.quoteGrid.children.length;
    const nextBatch = displayedQuotes.slice(currentlyShown, currentlyShown + quotesPerLoad);
    
    nextBatch.forEach((quote, index) => {
        setTimeout(() => {
            const card = createQuoteCard(quote);
            elements.quoteGrid.appendChild(card);
        }, index * 100);
    });
    
    // Hide load more button if all quotes are shown
    if (currentlyShown + nextBatch.length >= displayedQuotes.length) {
        elements.loadMoreBtn.style.display = 'none';
    }
}

// Category Filtering
function filterByCategory(category) {
    currentCategory = category;
    
    if (category === 'all') {
        displayedQuotes = [...filteredQuotes];
    } else {
        displayedQuotes = filteredQuotes.filter(quote => quote.category === category);
    }
    
    renderQuoteGrid();
    
    // Update active tab
    elements.categoryTabs.forEach(tab => {
        tab.classList.toggle('active', tab.dataset.category === category);
    });
}

// Search Functionality
function searchQuotes(query) {
    if (!query.trim()) {
        filteredQuotes = [...quotes];
    } else {
        const searchTerm = query.toLowerCase();
        filteredQuotes = quotes.filter(quote => 
            quote.text.toLowerCase().includes(searchTerm) ||
            quote.author.toLowerCase().includes(searchTerm) ||
            quote.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
    }
    
    filterByCategory(currentCategory);
}

// Favorites Management
function toggleFavorite(quoteId) {
    const index = favorites.indexOf(quoteId);
    
    if (index === -1) {
        favorites.push(quoteId);
    } else {
        favorites.splice(index, 1);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
    renderFavorites();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const quoteId = parseInt(btn.dataset.quoteId);
        const isFavorited = favorites.includes(quoteId);
        
        btn.classList.toggle('favorited', isFavorited);
        const svg = btn.querySelector('svg path');
        svg.setAttribute('fill', isFavorited ? 'currentColor' : 'none');
    });
}

function renderFavorites() {
    const favoriteQuotes = quotes.filter(quote => favorites.includes(quote.id));
    
    if (favoriteQuotes.length === 0) {
        elements.favoritesGrid.innerHTML = `
            <div class="empty-favorites">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                <p>No favorites yet. Start adding quotes you love!</p>
            </div>
        `;
    } else {
        elements.favoritesGrid.innerHTML = '';
        favoriteQuotes.forEach((quote, index) => {
            setTimeout(() => {
                const card = createQuoteCard(quote);
                elements.favoritesGrid.appendChild(card);
            }, index * 100);
        });
    }
}

// Share Functionality
let currentShareQuote = null;

function openShareModal(quoteId) {
    currentShareQuote = quotes.find(quote => quote.id === quoteId);
    elements.shareModal.classList.add('active');
}

function closeShareModal() {
    elements.shareModal.classList.remove('active');
    currentShareQuote = null;
}

function shareQuote(platform) {
    if (!currentShareQuote) return;
    
    const text = `"${currentShareQuote.text}" - ${currentShareQuote.author}`;
    const url = window.location.href;
    
    switch (platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'facebook':
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(`${text}\n\n${url}`).then(() => {
                // Show success message
                const btn = document.querySelector('[data-platform="copy"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Copied!
                `;
                setTimeout(() => {
                    btn.innerHTML = originalText;
                }, 2000);
            });
            break;
    }
    
    closeShareModal();
}

// Navigation
function smoothScrollTo(targetId) {
    const target = document.getElementById(targetId.replace('#', ''));
    if (target) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = target.offsetTop - headerHeight - 20;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }
}

function updateActiveNavLink() {
    const sections = ['home', 'gallery', 'categories', 'favorites'];
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const navLink = document.querySelector(`[href="#${sectionId}"]`);
        
        if (section && navLink) {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                elements.navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        }
    });
}

// Event Listeners
function initializeEventListeners() {
    // Generate new quote
    elements.generateBtn.addEventListener('click', generateNewQuote);
    
    // Search functionality
    const debouncedSearch = debounce(searchQuotes, 300);
    elements.searchInput.addEventListener('input', (e) => {
        debouncedSearch(e.target.value);
    });
    
    elements.searchBtn.addEventListener('click', () => {
        searchQuotes(elements.searchInput.value);
    });
    
    // Category filtering
    elements.categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            filterByCategory(tab.dataset.category);
        });
    });
    
    // Load more quotes
    elements.loadMoreBtn.addEventListener('click', loadMoreQuotes);
    
    // Quote card interactions (event delegation)
    document.addEventListener('click', (e) => {
        if (e.target.closest('.favorite-btn')) {
            const btn = e.target.closest('.favorite-btn');
            const quoteId = parseInt(btn.dataset.quoteId);
            toggleFavorite(quoteId);
        }
        
        if (e.target.closest('.share-btn')) {
            const btn = e.target.closest('.share-btn');
            const quoteId = parseInt(btn.dataset.quoteId);
            openShareModal(quoteId);
        }
        
        if (e.target.closest('.share-btn[data-platform]')) {
            const platform = e.target.closest('.share-btn[data-platform]').dataset.platform;
            shareQuote(platform);
        }
    });
    
    // Modal controls
    elements.closeModal.addEventListener('click', closeShareModal);
    elements.shareModal.addEventListener('click', (e) => {
        if (e.target === elements.shareModal) {
            closeShareModal();
        }
    });
    
    // Navigation
    elements.navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScrollTo(targetId);
        });
    });
    
    // Scroll events
    window.addEventListener('scroll', debounce(updateActiveNavLink, 100));
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeShareModal();
        }
        if (e.key === ' ' && e.target === document.body) {
            e.preventDefault();
            generateNewQuote();
        }
    });
    
    // Search input focus
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            elements.searchInput.focus();
        }
    });
}

// Initialization
function initialize() {
    // Set initial quote
    const initialQuote = getRandomQuote();
    elements.quoteText.textContent = `"${initialQuote.text}"`;
    elements.quoteAuthor.textContent = `- ${initialQuote.author}`;
    
    // Initialize filtered quotes
    filteredQuotes = [...quotes];
    displayedQuotes = [...quotes];
    
    // Render initial content
    renderQuoteGrid();
    renderFavorites();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Add loading animation to initial elements
    setTimeout(() => {
        document.querySelectorAll('.quote-card').forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in-up');
            }, index * 100);
        });
    }, 100);
    
    console.log('QuoteVerse initialized successfully!');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', initialize);

// Service Worker Registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

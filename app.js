// Tourism Paradise - Multi-Page JavaScript Application with Enhanced Text Visibility

// API Configuration
const API_CONFIG = {
	baseUrl: '',
	endpoints: {
		destinations: 'api/destinations.json',
		posts: 'api/posts.json'
	}
};

// Categories configuration
const CATEGORIES = [
	{
		id: "famousLandmarks",
		name: "Famous Landmarks",
		icon: "🏛️",
		description: "Iconic monuments and architectural marvels around the world"
	},
	{
		id: "naturalWonders",
		name: "Natural Wonders",
		icon: "🏔️",
		description: "Breathtaking natural formations and stunning landscapes"
	},
	{
		id: "beachDestinations",
		name: "Beach Destinations",
		icon: "🏖️",
		description: "Paradise beaches and tropical getaways for relaxation"
	},
	{
		id: "historicalSites",
		name: "Historical Sites",
		icon: "🏺",
		description: "Ancient civilizations and UNESCO heritage sites"
	},
	{
		id: "popularCities",
		name: "Popular Cities",
		icon: "🌆",
		description: "Vibrant metropolitan destinations and cultural hubs"
	}
];

// Sample destination data with enhanced descriptions
const SAMPLE_DESTINATIONS = [
	{
		id: "taj-mahal",
		name: "Taj Mahal",
		location: "Agra, India",
		category: "Famous Landmarks",
		categoryId: "famousLandmarks",
		region: "Asia",
		description: "A breathtaking symbol of eternal love, this white marble mausoleum was built by Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal. The Taj Mahal is considered one of the finest examples of Mughal architecture.",
		highlights: ["UNESCO World Heritage Site", "One of Seven Wonders", "Architectural masterpiece", "Symbol of love"],
		bestTime: "October to March",
		attractions: ["Main mausoleum", "Beautiful Charbagh gardens", "Reflection pools", "Red sandstone mosque"],
		tips: "Visit early morning for best lighting and fewer crowds. The monument is closed on Fridays.",
		image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800"
	},
	{
		id: "santorini",
		name: "Santorini",
		location: "Greece",
		category: "Beach Destinations",
		categoryId: "beachDestinations",
		region: "Europe",
		description: "Famous for its dramatic cliffs, pristine white-washed buildings, and spectacular sunsets over the deep blue Aegean Sea. This volcanic island offers a perfect blend of natural beauty and traditional Greek charm.",
		highlights: ["World-famous sunsets", "Distinctive architecture", "Volcanic black beaches", "Wine tastings"],
		bestTime: "April to November",
		attractions: ["Oia village", "Red Beach", "Akrotiri ruins", "Local wineries"],
		tips: "Book sunset dinner reservations early. Try the unique Assyrtiko wine produced from volcanic soil.",
		image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800"
	},
	{
		id: "machu-picchu",
		name: "Machu Picchu",
		location: "Peru",
		category: "Historical Sites",
		categoryId: "historicalSites",
		region: "Americas",
		description: "An ancient Incan citadel set high in the Andes Mountains, this archaeological wonder showcases incredible stone architecture and offers breathtaking panoramic views of the surrounding peaks.",
		highlights: ["Ancient Incan ruins", "UNESCO World Heritage", "Mountain hiking", "Archaeological mystery"],
		bestTime: "May to September",
		attractions: ["Huayna Picchu", "Temple of the Sun", "Inca Trail", "Sacred Valley"],
		tips: "Book tickets well in advance. Consider acclimatizing in Cusco for a few days before visiting.",
		image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=800"
	},
	{
		id: "tokyo",
		name: "Tokyo",
		location: "Japan",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Asia",
		description: "A fascinating metropolis where ultra-modern skyscrapers meet ancient temples, offering an incredible blend of traditional Japanese culture and cutting-edge technology.",
		highlights: ["Modern technology", "Traditional temples", "Amazing cuisine", "Pop culture"],
		bestTime: "March to May, September to November",
		attractions: ["Shibuya Crossing", "Senso-ji Temple", "Tokyo Skytree", "Tsukiji Fish Market"],
		tips: "Get a JR Pass for easy transportation. Don't miss trying authentic sushi and ramen.",
		image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800"
	},
	{
		id: "grand-canyon",
		name: "Grand Canyon",
		location: "Arizona, USA",
		category: "Natural Wonders",
		categoryId: "naturalWonders",
		region: "Americas",
		description: "One of the world's most spectacular natural formations, carved by the Colorado River over millions of years. The canyon offers breathtaking vistas and incredible geological formations.",
		highlights: ["Geological wonder", "Hiking trails", "Sunrise/sunset views", "Wildlife viewing"],
		bestTime: "March to May, September to November",
		attractions: ["South Rim viewpoints", "Bright Angel Trail", "Desert View Watchtower", "Colorado River"],
		tips: "Bring plenty of water when hiking. The South Rim is open year-round, while North Rim is seasonal.",
		image: "https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?w=800"
	},
	{
		id: "paris",
		name: "Paris",
		location: "France",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Europe",
		description: "The City of Light captivates visitors with its iconic landmarks, world-class museums, romantic atmosphere, and exquisite cuisine. Paris embodies art, culture, and timeless elegance.",
		highlights: ["Iconic landmarks", "World-class museums", "Romantic atmosphere", "Fine dining"],
		bestTime: "April to June, September to October",
		attractions: ["Eiffel Tower", "Louvre Museum", "Notre-Dame Cathedral", "Champs-Élysées"],
		tips: "Many museums are free on the first Sunday of each month. Learn basic French phrases for better interactions.",
		image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800"
	}
	,
	{
		id: "new-york",
		name: "New York City",
		location: "USA",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Americas",
		description: "The city that never sleeps, known for iconic landmarks, world-class museums, and a vibrant cultural scene across its diverse neighborhoods.",
		highlights: ["Times Square", "Broadway Shows", "Central Park", "Skyscrapers"],
		bestTime: "April to June, September to November",
		attractions: ["Statue of Liberty", "Central Park", "Metropolitan Museum of Art", "Empire State Building"],
		tips: "Use the subway to get around quickly; book Broadway tickets in advance for popular shows.",
		image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800"
	},
	{
		id: "london",
		name: "London",
		location: "United Kingdom",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Europe",
		description: "A historic yet modern capital offering royal palaces, museums, theaters, and a dynamic food scene across its boroughs.",
		highlights: ["Historic landmarks", "Museums", "Theatre", "Parks"],
		bestTime: "April to June, September to October",
		attractions: ["British Museum", "Tower of London", "Buckingham Palace", "West End"],
		tips: "Get an Oyster card for public transport and consider free museum days for budget visits.",
		image: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?w=800"
	},
	{
		id: "bali",
		name: "Bali",
		location: "Indonesia",
		category: "Beach Destinations",
		categoryId: "beachDestinations",
		region: "Asia",
		description: "A tropical paradise known for its lush rice terraces, vibrant culture, and beautiful beaches, ideal for relaxation and adventure.",
		highlights: ["Beaches", "Rice terraces", "Temples", "Surfing"],
		bestTime: "April to October",
		attractions: ["Ubud", "Seminyak", "Tanah Lot", "Uluwatu Temple"],
		tips: "Respect local customs at temples; rent a scooter only if experienced.",
		image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800"
	},
	{
		id: "sydney",
		name: "Sydney",
		location: "Australia",
		category: "Popular Cities",
		categoryId: "popularCities",
		region: "Oceania",
		description: "A sun-soaked harbor city famous for its Opera House, harbour bridge, and beautiful beaches, offering excellent outdoor activities.",
		highlights: ["Sydney Opera House", "Beaches", "Harbour Bridge", "Outdoor lifestyle"],
		bestTime: "September to November, March to May",
		attractions: ["Bondi Beach", "Sydney Opera House", "Taronga Zoo", "The Rocks"],
		tips: "Purchase an Opal card for transit and explore coastal walks for scenic views.",
		image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800"
	}
];

// Visa Guide Data
const VISA_GUIDE_DATA = [
	{
		id: "france",
		country: "France",
		region: "Europe",
		icon: "🇫🇷",
		visaRequired: true,
		visaTypes: ["Tourist Visa (Schengen)", "Business Visa", "Work Visa"],
		requirements: ["Valid passport (6+ months validity)", "Travel health insurance", "Proof of accommodation", "Bank statements showing funds", "Travel itinerary"],
		processingTime: "10-15 business days",
		cost: "€80",
		duration: "90 days (within 180 days)",
		bestTime: "April-June, September-October",
		tips: "Book accommodations in advance. The Schengen visa allows travel in 27 European countries."
	},
	{
		id: "japan",
		country: "Japan",
		region: "Asia",
		icon: "🇯🇵",
		visaRequired: true,
		visaTypes: ["Tourist Visa", "Business Visa", "Work Visa"],
		requirements: ["Valid passport (6+ months validity)", "Completed application form", "Passport-sized photo", "Bank statements", "Proof of employment"],
		processingTime: "4-7 business days",
		cost: "¥3,000 (~$20 USD)",
		duration: "15 or 30 days",
		bestTime: "March-May, October-November",
		tips: "Japan is very tourist-friendly. Learn basic Japanese phrases for better experience."
	},
	{
		id: "usa",
		country: "United States",
		region: "Americas",
		icon: "🇺🇸",
		visaRequired: true,
		visaTypes: ["B-1 Business Visa", "B-2 Tourist Visa", "H-1B Work Visa"],
		requirements: ["Valid passport (6+ months validity)", "Completed DS-160 form", "Visa fee receipt", "Medical examination", "Criminal record check"],
		processingTime: "Several weeks",
		cost: "$160 USD",
		duration: "10 years (entry validity varies)",
		bestTime: "June, September",
		tips: "Visa interview required. Be prepared with travel plans and financial documentation."
	},
	{
		id: "india",
		country: "India",
		region: "Asia",
		icon: "🇮🇳",
		visaRequired: true,
		visaTypes: ["Tourist eVisa", "Business Visa", "Work Visa"],
		requirements: ["Valid passport (6+ months validity)", "Recent passport photo", "Completed application", "Bank statements", "Hotel booking confirmation"],
		processingTime: "3-4 business days (eVisa)",
		cost: "$25-100 USD",
		duration: "30-90 days",
		bestTime: "October-March",
		tips: "eVisa is convenient and can be obtained online. Avoid monsoon season."
	},
	{
		id: "thailand",
		country: "Thailand",
		region: "Asia",
		icon: "🇹🇭",
		visaRequired: true,
		visaTypes: ["Tourist Visa", "Transit Visa", "Education Visa"],
		requirements: ["Valid passport (6+ months validity)", "Completed TM.6 form", "Passport photo", "Bank statements", "No criminal record"],
		processingTime: "3-5 business days",
		cost: "500-1,200 THB",
		duration: "30-60 days",
		bestTime: "November-February",
		tips: "Visa on arrival available at Bangkok airport. Be respectful to the Thai Royal Family."
	},
	{
		id: "australia",
		country: "Australia",
		region: "Oceania",
		icon: "🇦🇺",
		visaRequired: true,
		visaTypes: ["Visitor Visa", "eVisitor", "Work Visa"],
		requirements: ["Valid passport (6+ months validity)", "Completed application", "Medical examination", "Character reference", "Travel insurance recommended"],
		processingTime: "1-3 weeks",
		cost: "AUD $190 (~$130 USD)",
		duration: "3 months - 3 years",
		bestTime: "September-May",
		tips: "Wildlife is diverse and unique. Don't miss the Great Barrier Reef."
	},
	{
		id: "uk",
		country: "United Kingdom",
		region: "Europe",
		icon: "🇬🇧",
		visaRequired: true,
		visaTypes: ["Standard Visitor Visa", "Business Visitor", "Work Visa"],
		requirements: ["Valid passport", "Visa application fee receipt", "Proof of accommodation", "Financial statements", "Employment letter"],
		processingTime: "2-4 weeks",
		cost: "£100-719",
		duration: "6 months",
		bestTime: "May-September",
		tips: "Post-Brexit, most travelers from non-EU countries need visas. Book museums in advance."
	},
	{
		id: "canada",
		country: "Canada",
		region: "Americas",
		icon: "🇨🇦",
		visaRequired: true,
		visaTypes: ["Temporary Resident Visa", "eTA", "Work Permit"],
		requirements: ["Valid passport (6+ months validity)", "Completed application", "Police clearance", "Medical exam", "Proof of funds"],
		processingTime: "4-6 weeks",
		cost: "CAD $100 (~$75 USD)",
		duration: "Up to 6 months",
		bestTime: "June-September",
		tips: "eTA required for most visitors. Niagara Falls and Rocky Mountains are must-see."
	},
	{
		id: "schengen",
		country: "Schengen Area (26 countries)",
		region: "Europe",
		icon: "🇪🇺",
		visaRequired: true,
		visaTypes: ["Schengen Visa", "Short-stay Visa"],
		requirements: ["Valid passport (3+ months beyond stay)", "Travel insurance", "Proof of accommodation", "Bank statements", "Return flight ticket"],
		processingTime: "15 days standard",
		cost: "€80",
		duration: "90 days in 180 days",
		bestTime: "April-June, September-October",
		tips: "One visa for 26 countries. Apply at the embassy of your main destination."
	},
	{
		id: "mexico",
		country: "Mexico",
		region: "Americas",
		icon: "🇲🇽",
		visaRequired: false,
		visaTypes: ["Tourist Card (FMM)", "Temporary Resident Visa"],
		requirements: ["Valid passport (6+ months validity)", "Return flight ticket", "Proof of funds"],
		processingTime: "Issued at border",
		cost: "Free (Tourist Card)",
		duration: "Up to 180 days",
		bestTime: "November-April",
		tips: "Many nationalities can enter without a visa. Beaches and ancient sites are spectacular."
	},
	{
		id: "turkey",
		country: "Turkey",
		region: "Europe/Asia",
		icon: "🇹🇷",
		visaRequired: true,
		visaTypes: ["eVisa", "Visa on Arrival", "Business Visa"],
		requirements: ["Valid passport (6+ months validity)", "Email address", "Credit card for payment"],
		processingTime: "Online instant",
		cost: "$20 USD",
		duration: "30 days",
		bestTime: "April-May, September-October",
		tips: "eVisa is very convenient. Istanbul bridges Europe and Asia."
	},
	{
		id: "dubai-uae",
		country: "Dubai / United Arab Emirates",
		region: "Middle East",
		icon: "🇦🇪",
		visaRequired: true,
		visaTypes: ["Tourist Visa", "Visa on Arrival", "Work Visa"],
		requirements: ["Valid passport (6+ months validity)", "Hotel booking", "Return flight ticket", "Bank statements"],
		processingTime: "Same-day to 5 days",
		cost: "AED 100-150 (~$30 USD)",
		duration: "30 days",
		bestTime: "October-April",
		tips: "World's tallest building Burj Khalifa is here. Luxury shopping and desert safaris."
	},
	{
		id: "singapore",
		country: "Singapore",
		region: "Asia",
		icon: "🇸🇬",
		visaRequired: true,
		visaTypes: ["Tourist Visa", "Business Visa", "Work Pass"],
		requirements: ["Valid passport (6+ months validity)", "Completed form", "Passport photo", "Bank statements", "Return ticket"],
		processingTime: "5-10 business days",
		cost: "SGD 30-50 (~$22-37 USD)",
		duration: "30 days",
		bestTime: "December-February",
		tips: "Clean, safe, and cosmopolitan city. Marina Bay Sands is iconic."
	},
	{
		id: "brazil",
		country: "Brazil",
		region: "Americas",
		icon: "🇧🇷",
		visaRequired: true,
		visaTypes: ["Tourist Visa", "Business Visa", "Work Visa"],
		requirements: ["Valid passport", "Completed application", "Two photos", "Bank statements", "Hotel reservation"],
		processingTime: "5-10 business days",
		cost: "USD 160",
		duration: "90 days",
		bestTime: "April-May, September-October",
		tips: "Carnival season is famous. Amazon rainforest and Iguazu Falls are breathtaking."
	},
	{
		id: "new-zealand",
		country: "New Zealand",
		region: "Oceania",
		icon: "🇳🇿",
		visaRequired: true,
		visaTypes: ["Visitor Visa", "eTA (for some nationals)", "Work Visa"],
		requirements: ["Valid passport (3+ months beyond stay)", "Medical examination", "Police clearance", "Proof of funds", "Accommodation details"],
		processingTime: "2-4 weeks",
		cost: "NZD $165-232",
		duration: "3-12 months",
		bestTime: "December-February",
		tips: "Adventure capital with stunning landscapes. Hobbiton tours are popular."
	},
	{
		id: "germany",
		country: "Germany",
		region: "Europe",
		icon: "🇩🇪",
		visaRequired: true,
		visaTypes: ["Schengen Visa", "National Visa", "Work Visa"],
		requirements: ["Valid passport", "Travel insurance", "Proof of accommodation", "Financial documents", "Schengen application form"],
		processingTime: "15 days",
		cost: "€80",
		duration: "90 days (Schengen)",
		bestTime: "May-September",
		tips: "Part of Schengen Area. Oktoberfest and Christmas markets are famous."
	},
	{
		id: "spain",
		country: "Spain",
		region: "Europe",
		icon: "🇪🇸",
		visaRequired: true,
		visaTypes: ["Schengen Visa", "National Visa", "Work Visa"],
		requirements: ["Valid passport", "Travel insurance", "Proof of funds", "Accommodation booking", "Schengen form"],
		processingTime: "15 days",
		cost: "€80",
		duration: "90 days (Schengen)",
		bestTime: "April-June, September-October",
		tips: "Beautiful beaches and vibrant cities. Sagrada Familia in Barcelona is iconic."
	},
	{
		id: "south-korea",
		country: "South Korea",
		region: "Asia",
		icon: "🇰🇷",
		visaRequired: true,
		visaTypes: ["Tourist Visa", "Business Visa", "Work Visa"],
		requirements: ["Valid passport", "Completed application", "Two photos", "Bank statements", "Employment certificate"],
		processingTime: "5-10 business days",
		cost: "50,000 KRW (~$40 USD)",
		duration: "60-90 days",
		bestTime: "April-May, September-October",
		tips: "Tech hub with amazing food culture. K-pop and temples attract visitors."
	}
];

// Global variables
let allDestinations = [];
let filteredDestinations = [];
let currentFilters = {
	category: '',

	region: '',
	search: ''
};
let currentPage = 'home';

// AdSense configuration: only load ads on pages with publisher content
const ADSENSE_CLIENT = 'ca-pub-9936656082362086';
let adsLoaderInjected = false;

function loadAdSenseIfNeeded() {
	// Only inject once and only on allowed pages
	if (adsLoaderInjected) return;
	if (!['home', 'destinations'].includes(currentPage)) return;

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
	script.crossOrigin = 'anonymous';
	document.head.appendChild(script);

	// Mark as injected so we don't inject multiple times
	adsLoaderInjected = true;
}

// Initialize the application
document.addEventListener('DOMContentLoaded', function () {
	console.log('Initializing Tourism Paradise multi-page app...');

	// Initialize data first
	allDestinations = [...SAMPLE_DESTINATIONS];
	filteredDestinations = [...SAMPLE_DESTINATIONS];

	// Setup all functionality
	setupEventListeners();
	setupPageNavigation();
	initializeCategories();
	loadFeaturedDestinations();
	setupSmoothScrolling();
	observeAnimations();

	// Check if we need to show post creation notification
	if (sessionStorage.getItem('showPostNotification')) {
		sessionStorage.removeItem('showPostNotification');
		setTimeout(() => {
			showNotification('Create post successful!', 'success');
		}, 500);
	}

	// Ensure loading spinner is hidden
	hideLoadingSpinner();

	// Try to load ads on initial page if allowed
	loadAdSenseIfNeeded();

	console.log('Application initialized successfully!');
});

// Page Navigation System
function setupPageNavigation() {
	// Handle navigation links in header and footer
	document.querySelectorAll('.nav__link').forEach(link => {
		link.addEventListener('click', function (e) {
			const page = this.getAttribute('data-page');
			if (page) {
				e.preventDefault();
				navigateToPage(page);
				closeMobileMenu();
			}
		});
	});

	// Handle footer links
    document.querySelectorAll('.footer__links a').forEach(link => {
        const page = link.getAttribute('data-page');
        if (page) {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                navigateToPage(page);
            });
        }
        // Direct links (like privacy-policy.html) will work normally
    });	// Set initial page
	const hash = window.location.hash.slice(1);
	const initialPage = hash && document.getElementById(`${hash}Page`) ? hash : 'home';
	navigateToPage(initialPage);
}

function navigateToPage(pageName) {
	console.log('Navigating to page:', pageName);

	// Find target page element first; if it doesn't exist, don't change current visibility
	const targetPage = document.getElementById(`${pageName}Page`);
	if (!targetPage) {
		console.warn(`navigateToPage: page "${pageName}" not found — leaving current page visible.`);
		return;
	}

	// Hide all pages
	document.querySelectorAll('.page').forEach(page => {
		page.classList.remove('active');
	});

	// Show selected page
	targetPage.classList.add('active');
	currentPage = pageName;

	// Update navigation active state
	document.querySelectorAll('.nav__link').forEach(link => {
		link.classList.remove('active');
		if (link.getAttribute('data-page') === pageName) {
			link.classList.add('active');
		}
	});

	// Update URL hash
	window.history.replaceState(null, null, `#${pageName}`);

	// Scroll to top
	window.scrollTo({ top: 0, behavior: 'smooth' });

	// Page-specific initialization
	initializePage(pageName);
	updatePageTitle(pageName);

	// Load ads if this page should show publisher content
	loadAdSenseIfNeeded();
}

function initializePage(pageName) {
	switch (pageName) {
		case 'home':
			loadFeaturedDestinations();
			break;
		case 'destinations':
			renderDestinations();
			break;
		case 'visa-guide':
			initializeVisaGuide();
			break;
		case 'travel-guide':
			// Travel guide is static for now; placeholder for future dynamic content
			break;
	}
}

function updatePageTitle(pageName) {
	const titles = {
		'home': 'Tourism Paradise - Discover Amazing Destinations',
		'destinations': 'Destinations - Tourism Paradise',
		'about': 'About Us - Tourism Paradise',
		'contact': 'Contact Us - Tourism Paradise',
		'visa-guide': 'Visa Guide - Tourism Paradise',
		'create-post': 'Create Post - Tourism Paradise'
	};

	// Add travel-guide to titles map
	if (pageName === 'travel-guide') {
		document.title = 'Travel Guide - Tourism Paradise';
	} else {
		document.title = titles[pageName] || 'Tourism Paradise';
	}
}

// Loading Management
function showLoadingSpinner() {
	const spinner = document.getElementById('loadingSpinner');
	if (spinner) {
		spinner.classList.remove('hidden');
	}
}

function hideLoadingSpinner() {
	const spinner = document.getElementById('loadingSpinner');
	if (spinner) {
		spinner.classList.add('hidden');
	}
}

// API Helper Functions
async function apiRequest(endpoint, options = {}) {
	const url = `${API_CONFIG.baseUrl}${endpoint}`;
	const defaultOptions = {
		headers: {
			'Content-Type': 'application/json',
		},
	};

	const config = { ...defaultOptions, ...options };

	try {
		const response = await fetch(url, config);

		if (!response.ok) {
			const errorData = await response.json().catch(() => ({}));
			throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
		}

		return await response.json();
	} catch (error) {
		console.error('API request failed:', error);
		throw error;
	}
}

// Destinations Management
async function loadDestinations(category = '') {
	showLoadingSpinner();
	try {
		const endpoint = category
			? `${API_CONFIG.endpoints.destinations}/${category}`
			: API_CONFIG.endpoints.destinations;

		const response = await apiRequest(endpoint);
		allDestinations = response.destinations || response;
		filteredDestinations = [...allDestinations];

		if (currentPage === 'destinations') {
			renderDestinations();
		}
		showNotification('Destinations loaded successfully!', 'success');
	} catch (error) {
		console.error('Failed to load destinations:', error);
		// Use sample data as fallback
		allDestinations = [...SAMPLE_DESTINATIONS];
		filteredDestinations = [...SAMPLE_DESTINATIONS];

		if (currentPage === 'destinations') {
			renderDestinations();
		}
		showNotification('Using sample destinations (backend not available)', 'info');
	} finally {
		hideLoadingSpinner();
	}
}

function loadFeaturedDestinations() {
	const featuredContainer = document.getElementById('featuredDestinations');
	if (!featuredContainer) return;

	// Show first 3 destinations as featured
	const featured = allDestinations.slice(0, 3);

	featuredContainer.innerHTML = featured.map(destination => `
    <div class="destination-card fade-in" data-destination-id="${destination.id}">
      <img src="${destination.image}"
           alt="${destination.name}" class="destination-card__image" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
      <div class="destination-card__content">
        <div class="destination-card__header">
          <div>
            <h3 class="destination-card__title">${destination.name}</h3>
            <p class="destination-card__location">📍 ${destination.location}</p>
          </div>
          <span class="destination-card__category">${destination.category}</span>
        </div>
        <p class="destination-card__description">${destination.description.slice(0, 150)}...</p>
        <div class="destination-card__highlights">
          ${destination.highlights.slice(0, 2).map(highlight =>
		`<span class="highlight-tag">${highlight}</span>`
	).join('')}
        </div>
        <div class="destination-card__footer">
          <span class="best-time">🗓️ ${destination.bestTime}</span>
          <button class="learn-more-btn" onclick="openDestinationModal('${destination.id}')">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');

	// Add event listeners to featured cards (for clicking anywhere on card)
	featuredContainer.querySelectorAll('.destination-card').forEach(card => {
		card.addEventListener('click', function (e) {
			if (e.target.classList.contains('learn-more-btn')) {
				return; // Let the onclick handle it
			}
			const destinationId = this.getAttribute('data-destination-id');
			openDestinationModal(destinationId);
		});
	});
}

// Contact and Newsletter forms
async function submitContactForm(name, email, message) {
	try {
		await apiRequest(API_CONFIG.endpoints.contact, {
			method: 'POST',
			body: JSON.stringify({ name, email, message })
		});

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message };
	}
}

async function subscribeNewsletter(email) {
	try {
		await apiRequest(API_CONFIG.endpoints.newsletter, {
			method: 'POST',
			body: JSON.stringify({ email })
		});

		return { success: true };
	} catch (error) {
		return { success: false, error: error.message };
	}
}

// UI Helper Functions
function setButtonLoading(button, loading) {
	if (!button) return;

	const btnText = button.querySelector('.btn-text');
	const btnLoading = button.querySelector('.btn-loading');

	if (loading) {
		btnText?.classList.add('hidden');
		btnLoading?.classList.remove('hidden');
		button.disabled = true;
	} else {
		btnText?.classList.remove('hidden');
		btnLoading?.classList.add('hidden');
		button.disabled = false;
	}
}

// Event Listeners Setup
function setupEventListeners() {
	console.log('Setting up event listeners...');

	// Mobile menu toggle
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');
	if (mobileMenuBtn) {
		mobileMenuBtn.addEventListener('click', toggleMobileMenu);
	}

	// Search functionality
	const searchInput = document.getElementById('searchInput');
	const searchBtn = document.getElementById('searchBtn');

	if (searchInput) {
		searchInput.addEventListener('input', debounce(handleSearch, 300));
		searchInput.addEventListener('keypress', function (e) {
			if (e.key === 'Enter') {
				e.preventDefault();
				handleSearchClick();
			}
		});
	}

	if (searchBtn) {
		searchBtn.addEventListener('click', handleSearchClick);
	}

	// Filter functionality
	const categoryFilter = document.getElementById('categoryFilter');
	const regionFilter = document.getElementById('regionFilter');

	if (categoryFilter) {
		categoryFilter.addEventListener('change', handleCategoryFilter);
	}

	if (regionFilter) {
		regionFilter.addEventListener('change', handleRegionFilter);
	}

	// Modal events
	setupModalEvents();

	// Form submissions
	const newsletterForm = document.getElementById('newsletterForm');
	const contactForm = document.getElementById('contactForm');
	const createPostForm = document.getElementById('createPostForm');

	if (newsletterForm) {
		newsletterForm.addEventListener('submit', handleNewsletterSubmit);
	}

	if (contactForm) {
		contactForm.addEventListener('submit', handleContactSubmit);
	}

	if (createPostForm) {
		createPostForm.addEventListener('submit', handleCreatePostSubmit);
	}

	// Close modal on Escape key
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape') {
			closeModal();
		}
	});

	// Handle browser back/forward
	window.addEventListener('popstate', function () {
		const hash = window.location.hash.slice(1);
		const page = hash || 'home';
		if (page !== currentPage) {
			navigateToPage(page);
		}
	});
}

function setupModalEvents() {
	const modalOverlay = document.getElementById('modalOverlay');
	const modalClose = document.getElementById('modalClose');

	if (modalOverlay) {
		modalOverlay.addEventListener('click', closeModal);
	}
	if (modalClose) {
		modalClose.addEventListener('click', closeModal);
	}

	// Visa Modal Events
	const visaModalOverlay = document.getElementById('visaModalOverlay');
	const visaModalClose = document.getElementById('visaModalClose');

	if (visaModalOverlay) {
		visaModalOverlay.addEventListener('click', closeVisaModal);
	}
	if (visaModalClose) {
		visaModalClose.addEventListener('click', closeVisaModal);
	}
}

// Categories Setup
function initializeCategories() {
	const categoriesGrid = document.getElementById('categoriesGrid');
	if (!categoriesGrid) return;

	categoriesGrid.innerHTML = CATEGORIES.map(category => `
    <div class="category-card" data-category="${category.id}">
      <div class="category-card__icon">${category.icon}</div>
      <h3 class="category-card__title">${category.name}</h3>
      <p class="category-card__desc">${category.description}</p>
    </div>
  `).join('');

	// Populate category filter
	const categoryFilter = document.getElementById('categoryFilter');
	if (categoryFilter) {
		categoryFilter.innerHTML = '<option value="">All Categories</option>' +
			CATEGORIES.map(category =>
				`<option value="${category.id}">${category.name}</option>`
			).join('');
	}

	// Add click events to category cards
	categoriesGrid.querySelectorAll('.category-card').forEach(card => {
		card.addEventListener('click', function () {
			const categoryId = this.getAttribute('data-category');
			if (categoryFilter) {
				categoryFilter.value = categoryId;
				handleCategoryFilter();
			}
			navigateToPage('destinations');
		});
	});
}

// Search and Filter Functions
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

function toggleMobileMenu() {
	const nav = document.getElementById('nav');
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');

	if (nav) nav.classList.toggle('active');
	if (mobileMenuBtn) mobileMenuBtn.classList.toggle('active');
}

function closeMobileMenu() {
	const nav = document.getElementById('nav');
	const mobileMenuBtn = document.getElementById('mobileMenuBtn');

	if (nav) nav.classList.remove('active');
	if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
}

function handleSearch() {
	const searchInput = document.getElementById('searchInput');
	if (!searchInput) return;

	currentFilters.search = searchInput.value.toLowerCase().trim();
	applyFilters();
}

function handleSearchClick() {
	const searchInput = document.getElementById('searchInput');
	if (searchInput && searchInput.value.trim()) {
		currentFilters.search = searchInput.value.toLowerCase().trim();
		applyFilters();
		if (currentPage !== 'destinations') {
			navigateToPage('destinations');
		}
	}
}

function handleCategoryFilter() {
	const categoryFilter = document.getElementById('categoryFilter');
	if (!categoryFilter) return;

	currentFilters.category = categoryFilter.value;
	applyFilters();
}

function handleRegionFilter() {
	const regionFilter = document.getElementById('regionFilter');
	if (!regionFilter) return;

	currentFilters.region = regionFilter.value;
	applyFilters();
}

function applyFilters() {
	filteredDestinations = allDestinations.filter(destination => {
		const matchesCategory = !currentFilters.category ||
			destination.categoryId === currentFilters.category;
		const matchesRegion = !currentFilters.region || destination.region === currentFilters.region;
		const matchesSearch = !currentFilters.search ||
			destination.name?.toLowerCase().includes(currentFilters.search) ||
			destination.location?.toLowerCase().includes(currentFilters.search) ||
			destination.description?.toLowerCase().includes(currentFilters.search) ||
			destination.highlights?.some(highlight => highlight.toLowerCase().includes(currentFilters.search));

		return matchesCategory && matchesRegion && matchesSearch;
	});

	if (currentPage === 'destinations') {
		renderDestinations();
	}
}

// Render Functions
function renderDestinations() {
	const destinationsGrid = document.getElementById('destinationsGrid');
	if (!destinationsGrid) return;

	if (filteredDestinations.length === 0) {
		destinationsGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 80px 20px; color: var(--color-text-dark);">
        <h3 style="margin-bottom: 16px; font-size: 1.5rem;">No destinations found</h3>
        <p style="color: var(--color-text-secondary-dark); font-size: 1.1rem;">Try adjusting your search or filters, or check back later for new destinations.</p>
        <button class="btn btn--primary" onclick="clearAllFilters()" style="margin-top: 24px;">Clear All Filters</button>
      </div>
    `;
		return;
	}

	destinationsGrid.innerHTML = filteredDestinations.map((destination, index) => `
    <div class="destination-card fade-in" data-destination-id="${destination.id}">
      <img src="${destination.image}"
           alt="${destination.name}" class="destination-card__image" loading="lazy"
           onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
      <div class="destination-card__content">
        <div class="destination-card__header">
          <div>
            <h3 class="destination-card__title">${destination.name}</h3>
            <p class="destination-card__location">📍 ${destination.location}</p>
          </div>
          <span class="destination-card__category">${destination.category}</span>
        </div>
        <p class="destination-card__description">${destination.description.slice(0, 120)}...</p>
        <div class="destination-card__highlights">
          ${destination.highlights.slice(0, 3).map(highlight =>
		`<span class="highlight-tag">${highlight}</span>`
	).join('')}
        </div>
        <div class="destination-card__footer">
          <span class="best-time">🗓️ ${destination.bestTime}</span>
          <button class="learn-more-btn" onclick="openDestinationModal('${destination.id}')">Learn More</button>
        </div>
      </div>
    </div>
  `).join('');

	// Add click events to destination cards (for clicking anywhere on card except button)
	destinationsGrid.querySelectorAll('.destination-card').forEach(card => {
		card.addEventListener('click', function (e) {
			if (e.target.classList.contains('learn-more-btn')) {
				return; // Let the onclick handle the button
			}
			const destinationId = this.getAttribute('data-destination-id');
			openDestinationModal(destinationId);
		});
	});
}

function clearAllFilters() {
	currentFilters = { category: '', region: '', search: '' };
	const categoryFilter = document.getElementById('categoryFilter');
	const regionFilter = document.getElementById('regionFilter');
	const searchInput = document.getElementById('searchInput');

	if (categoryFilter) categoryFilter.value = '';
	if (regionFilter) regionFilter.value = '';
	if (searchInput) searchInput.value = '';

	filteredDestinations = [...allDestinations];
	renderDestinations();
}

// Modal Functions
function openModal() {
	const modal = document.getElementById('destinationModal');
	if (modal) {
		modal.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
	}
}

function closeModal() {
	const modal = document.getElementById('destinationModal');
	if (modal) {
		modal.classList.add('hidden');
		document.body.style.overflow = '';
	}
}

function openDestinationModal(destinationId) {
	console.log('Opening modal for destination:', destinationId);

	const destination = allDestinations.find(d => d.id === destinationId);
	const modalBody = document.getElementById('modalBody');

	if (!destination) {
		console.error('Destination not found:', destinationId);
		console.log('Available destinations:', allDestinations.map(d => d.id));
		return;
	}

	if (!modalBody) {
		console.error('Modal body not found');
		return;
	}

	modalBody.innerHTML = `
    <img src="${destination.image}"
         alt="${destination.name}" class="modal__image"
         onerror="this.src='https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'">
    <h2 class="modal__title">${destination.name}</h2>
    <p class="modal__location">📍 ${destination.location}</p>
    <span class="modal__category">${destination.category} • ${destination.region}</span>

    <p class="modal__description">${destination.description}</p>

    <div class="modal__section">
      <h4>✨ Highlights</h4>
      <ul class="modal__list">
        ${destination.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
      </ul>
    </div>

    <div class="modal__section">
      <h4>🎯 Key Attractions</h4>
      <ul class="modal__list">
        ${destination.attractions.map(attraction => `<li>${attraction}</li>`).join('')}
      </ul>
    </div>

    <div class="modal__section">
      <h4>📅 Best Time to Visit</h4>
      <p style="margin: 0; color: var(--color-text-secondary-dark); font-weight: 500;">${destination.bestTime}</p>
    </div>

    <div class="modal__section">
      <h4>💡 Travel Tips</h4>
      <div class="modal__tips">
        <p>${destination.tips}</p>
      </div>
    </div>
  `;

	openModal();
}

// Form Handlers
async function handleNewsletterSubmit(e) {
	e.preventDefault();

	const emailInput = document.getElementById('newsletterEmail');
	if (!emailInput) return;

	const submitBtn = e.target.querySelector('button[type="submit"]');
	setButtonLoading(submitBtn, true);

	const email = emailInput.value;
	const result = await subscribeNewsletter(email);

	setButtonLoading(submitBtn, false);

	if (result.success) {
		showNotification('Thank you for subscribing to our newsletter!', 'success');
		e.target.reset();
	} else {
		showNotification(result.error || 'Subscription failed. Please try again.', 'error');
	}
}

async function handleContactSubmit(e) {
	e.preventDefault();

	const submitBtn = e.target.querySelector('button[type="submit"]');
	setButtonLoading(submitBtn, true);

	const name = document.getElementById('contactName')?.value || '';
	const email = document.getElementById('contactEmail')?.value || '';
	const message = document.getElementById('contactMessage')?.value || '';

	const result = await submitContactForm(name, email, message);

	setButtonLoading(submitBtn, false);

	if (result.success) {
		showNotification('Thank you for your message! We\'ll get back to you soon.', 'success');
		e.target.reset();
	} else {
		showNotification(result.error || 'Failed to send message. Please try again.', 'error');
	}
}

async function handleCreatePostSubmit(e) {
	e.preventDefault();
	const submitBtn = e.target.querySelector('button[type="submit"]');
	setButtonLoading(submitBtn, true);

	const title = document.getElementById('postTitle').value;
	const imageUrl = document.getElementById('postImageUrl').value;
	const description = document.getElementById('postDescription').value;

	try {
		// Store the form data in sessionStorage before refresh
		sessionStorage.setItem('showPostNotification', 'true');

		// Refresh the page immediately
		window.location.reload();

		// Make API request in background
		await apiRequest(API_CONFIG.endpoints.posts, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ title, imageUrl, description }),
		});
	} catch (error) {
		console.error('Failed to create post:', error);
	}
}

// Notification System with High Contrast
function showNotification(message, type = 'info') {
	// Remove existing notifications
	document.querySelectorAll('.notification').forEach(n => n.remove());

	const notification = document.createElement('div');
	notification.className = `notification notification--${type}`;
	notification.textContent = message;

	document.body.appendChild(notification);

	// Auto-remove after 5 seconds
	setTimeout(() => {
		notification.style.animation = 'slideOutRight 0.3s ease-out forwards';
		setTimeout(() => {
			if (document.body.contains(notification)) {
				document.body.removeChild(notification);
			}
		}, 300);
	}, 5000);
}

// Smooth Scrolling
function setupSmoothScrolling() {
	document.addEventListener('click', function (e) {
		if (e.target.tagName === 'A' && e.target.getAttribute('href')?.startsWith('#')) {
			const href = e.target.getAttribute('href');
			if (href.length > 1) {
				const target = document.querySelector(href);
				if (target) {
					e.preventDefault();
					target.scrollIntoView({ behavior: 'smooth', block: 'start' });
				}
			}
		}
	});
}

// Animation Observer
function observeAnimations() {
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('fade-in');
			}
		});
	}, observerOptions);

	// Observe animatable elements
	const animatableSelectors = [
		'.category-card', '.destination-card', '.stat-card',
		'.value-card', '.contact-item', '.faq-item'
	];

	animatableSelectors.forEach(selector => {
		document.querySelectorAll(selector).forEach(el => {
			observer.observe(el);
		});
	});
}

// Header Scroll Effect
window.addEventListener('scroll', function () {
	const header = document.querySelector('.header');
	if (header) {
		if (window.scrollY > 100) {
			header.style.background = 'rgba(255, 255, 255, 0.98)';
			header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
		} else {
			header.style.background = 'rgba(255, 255, 255, 0.98)';
			header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
		}
	}
});

// Travel Guide Content

// Visa Modal Functions
function openVisaModal(visaId) {
	const visa = VISA_GUIDE_DATA.find(v => v.id === visaId);
	if (!visa) return;

	const modal = document.getElementById('visaDetailModal');
	const modalBody = document.getElementById('visaModalBody');

	if (!modalBody) return;

	// Generate background color based on flag emoji
	const flagColors = {
		'france': '#002395',
		'japan': '#BC002D',
		'usa': '#3C3B6B',
		'india': '#FF9933',
		'thailand': '#CE1126',
		'australia': '#00843D',
		'uk': '#012169',
		'canada': '#FF0000',
		'schengen': '#002395',
		'mexico': '#CE1126',
		'turkey': '#E30A17',
		'dubai-uae': '#00732F',
		'singapore': '#E31937',
		'brazil': '#009B3A',
		'new-zealand': '#002B41',
		'germany': '#000000',
		'spain': '#FFC400',
		'south-korea': '#003478'
	};

	const bgColor = flagColors[visaId] || '#4682B4';

	modalBody.innerHTML = `
		<div class="visa-detail-header" style="background: linear-gradient(135deg, ${bgColor} 0%, rgba(70, 130, 180, 0.8) 100%);">
			<div class="visa-detail-flag">${visa.icon}</div>
			<h2 class="visa-detail-title">${visa.country}</h2>
			<p class="visa-detail-region">${visa.region}</p>
		</div>

		<div class="visa-detail-body">
			<div class="visa-detail-grid">
				<div class="visa-detail-card">
					<h3>Visa Status</h3>
					<span class="visa-required-badge ${visa.visaRequired ? 'required' : 'not-required'}">
						${visa.visaRequired ? '✓ Visa Required' : '✗ Not Required'}
					</span>
				</div>

				<div class="visa-detail-card">
					<h3>Processing Time</h3>
					<p>${visa.processingTime}</p>
				</div>

				<div class="visa-detail-card">
					<h3>Cost</h3>
					<p class="cost-highlight">${visa.cost}</p>
				</div>

				<div class="visa-detail-card">
					<h3>Duration</h3>
					<p>${visa.duration}</p>
				</div>
			</div>

			<div class="visa-detail-section">
				<h3>📋 Visa Types</h3>
				<ul class="visa-detail-list">
					${visa.visaTypes.map(type => `<li class="visa-type-item">${type}</li>`).join('')}
				</ul>
			</div>

			<div class="visa-detail-section">
				<h3>📄 Requirements</h3>
				<ul class="visa-detail-list">
					${visa.requirements.map(req => `<li class="requirement-item">✓ ${req}</li>`).join('')}
				</ul>
			</div>

			<div class="visa-detail-section">
				<h3>🗓️ Best Time to Visit</h3>
				<p class="best-time-text">${visa.bestTime}</p>
			</div>

			<div class="visa-detail-section tips-section">
				<h3>💡 Pro Tip</h3>
				<p class="tip-text">${visa.tips}</p>
			</div>
		</div>
	`;

	if (modal) {
		modal.classList.remove('hidden');
		document.body.style.overflow = 'hidden';
	}
}

function closeVisaModal() {
	const modal = document.getElementById('visaDetailModal');
	if (modal) {
		modal.classList.add('hidden');
		document.body.style.overflow = 'auto';
	}
}

// Global functions for HTML access
window.navigateToPage = navigateToPage;
window.openDestinationModal = openDestinationModal;
window.openVisaModal = openVisaModal;
window.closeVisaModal = closeVisaModal;
window.clearAllFilters = clearAllFilters;

// CSS Animation Styles
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }

  .notification {
    animation: slideInRight 0.3s ease-out;
  }

  .fade-in {
    animation: fadeInUp 0.6s ease-out;
  }
`;
document.head.appendChild(style);
// Visa Guide Functions
function initializeVisaGuide() {
	renderVisaGuides();
	setupVisaSearch();
}

function renderVisaGuides() {
	const visaGrid = document.getElementById('visaGrid');
	if (!visaGrid) return;

	visaGrid.innerHTML = VISA_GUIDE_DATA.map(visa => `
		<div class="visa-card" onclick="openVisaModal('${visa.id}')" style="cursor: pointer;">
			<div class="visa-card__header">
				<span class="visa-card__icon">${visa.icon}</span>
				<h3 class="visa-card__title">${visa.country}</h3>
				<span class="visa-card__region">${visa.region}</span>
			</div>
			<div class="visa-card__content">
				<div class="visa-card__field">
					<strong>Visa Required:</strong>
					<span class="visa-required-badge ${visa.visaRequired ? 'required' : 'not-required'}">
						${visa.visaRequired ? '✓ Yes' : '✗ Not Required'}
					</span>
				</div>
				<div class="visa-card__field">
					<strong>Processing Time:</strong>
					<p>${visa.processingTime}</p>
				</div>
				<div class="visa-card__field">
					<strong>Visa Types:</strong>
					<ul class="visa-types-list">
						${visa.visaTypes.map(type => `<li>${type}</li>`).join('')}
					</ul>
				</div>
				<div class="visa-card__field">
					<strong>Cost:</strong>
					<p>${visa.cost}</p>
				</div>
				<div class="visa-card__field">
					<strong>Duration:</strong>
					<p>${visa.duration}</p>
				</div>
				<div class="visa-card__field">
					<strong>Requirements:</strong>
					<ul class="requirements-list">
						${visa.requirements.map(req => `<li>✓ ${req}</li>`).join('')}
					</ul>
				</div>
				<div class="visa-card__field">
					<strong>Best Time to Visit:</strong>
					<p>${visa.bestTime}</p>
				</div>
				<div class="visa-card__field">
					<strong>💡 Tip:</strong>
					<p>${visa.tips}</p>
				</div>
			</div>
		</div>
	`).join('');
}

function setupVisaSearch() {
	const searchInput = document.getElementById('visaCountrySearch');
	const searchBtn = document.getElementById('visaSearchBtn');

	if (!searchInput) return;

	const performSearch = () => {
		const query = searchInput.value.toLowerCase().trim();
		const visaGrid = document.getElementById('visaGrid');

		if (!query) {
			renderVisaGuides();
			return;
		}

		const filtered = VISA_GUIDE_DATA.filter(visa =>
			visa.country.toLowerCase().includes(query) ||
			visa.region.toLowerCase().includes(query) ||
			visa.visaTypes.some(type => type.toLowerCase().includes(query))
		);

		if (filtered.length === 0) {
			visaGrid.innerHTML = `
				<div style="grid-column: 1/-1; text-align: center; padding: 40px;">
					<p style="font-size: 18px; color: var(--color-text-secondary);">
						No countries found matching "${query}". Try searching by country name or region.
					</p>
				</div>
			`;
			return;
		}

		visaGrid.innerHTML = filtered.map(visa => `
			<div class="visa-card">
				<div class="visa-card__header">
					<span class="visa-card__icon">${visa.icon}</span>
					<h3 class="visa-card__title">${visa.country}</h3>
					<span class="visa-card__region">${visa.region}</span>
				</div>
				<div class="visa-card__content">
					<div class="visa-card__field">
						<strong>Visa Required:</strong>
						<span class="visa-required-badge ${visa.visaRequired ? 'required' : 'not-required'}">
							${visa.visaRequired ? '✓ Yes' : '✗ Not Required'}
						</span>
					</div>
					<div class="visa-card__field">
						<strong>Processing Time:</strong>
						<p>${visa.processingTime}</p>
					</div>
					<div class="visa-card__field">
						<strong>Visa Types:</strong>
						<ul class="visa-types-list">
							${visa.visaTypes.map(type => `<li>${type}</li>`).join('')}
						</ul>
					</div>
					<div class="visa-card__field">
						<strong>Cost:</strong>
						<p>${visa.cost}</p>
					</div>
					<div class="visa-card__field">
						<strong>Duration:</strong>
						<p>${visa.duration}</p>
					</div>
					<div class="visa-card__field">
						<strong>Requirements:</strong>
						<ul class="requirements-list">
							${visa.requirements.map(req => `<li>✓ ${req}</li>`).join('')}
						</ul>
					</div>
					<div class="visa-card__field">
						<strong>Best Time to Visit:</strong>
						<p>${visa.bestTime}</p>
					</div>
					<div class="visa-card__field">
						<strong>💡 Tip:</strong>
						<p>${visa.tips}</p>
					</div>
				</div>
			</div>
		`).join('');
	};

	searchInput.addEventListener('keypress', (e) => {
		if (e.key === 'Enter') {
			performSearch();
		}
	});

	if (searchBtn) {
		searchBtn.addEventListener('click', performSearch);
	}
}
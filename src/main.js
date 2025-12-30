import maplibregl from 'maplibre-gl';
import { Player } from './game/Player.js';
import { Camera } from './game/Camera.js';
import { InputManager } from './game/InputManager.js';

// NO API KEY NEEDED! 🎉
// Using free OpenStreetMap tiles - completely free, no credit card, no registration!

// Amazing locations to explore around the world!
const LOCATIONS = [
    // North America
    { name: '🗽 New York City, USA', coords: [-74.006, 40.7128], zoom: 16 },
    { name: '🌉 San Francisco, USA', coords: [-122.4194, 37.7749], zoom: 16 },
    { name: '🎰 Las Vegas, USA', coords: [-115.1398, 36.1699], zoom: 16 },
    { name: '🏙️ Chicago, USA', coords: [-87.6298, 41.8781], zoom: 16 },
    { name: '🎬 Los Angeles, USA', coords: [-118.2437, 34.0522], zoom: 16 },
    { name: '🎸 Miami, USA', coords: [-80.1918, 25.7617], zoom: 16 },
    { name: '🤠 Austin, USA', coords: [-97.7431, 30.2672], zoom: 16 },
    { name: '🍁 Toronto, Canada', coords: [-79.3832, 43.6532], zoom: 16 },
    { name: '🏔️ Vancouver, Canada', coords: [-123.1207, 49.2827], zoom: 16 },
    { name: '🌮 Mexico City, Mexico', coords: [-99.1332, 19.4326], zoom: 16 },
    
    // Europe
    { name: '🗼 Paris, France', coords: [2.2945, 48.8584], zoom: 16 },
    { name: '🏰 London, UK', coords: [-0.1276, 51.5074], zoom: 16 },
    { name: '🏛️ Rome, Italy', coords: [12.4964, 41.9028], zoom: 16 },
    { name: '🍕 Venice, Italy', coords: [12.3155, 45.4408], zoom: 16 },
    { name: '🎭 Barcelona, Spain', coords: [2.1734, 41.3851], zoom: 16 },
    { name: '🏰 Madrid, Spain', coords: [-3.7038, 40.4168], zoom: 16 },
    { name: '🍺 Berlin, Germany', coords: [13.4050, 52.5200], zoom: 16 },
    { name: '🎼 Vienna, Austria', coords: [16.3738, 48.2082], zoom: 16 },
    { name: '🧀 Amsterdam, Netherlands', coords: [4.9041, 52.3676], zoom: 16 },
    { name: '🕌 Istanbul, Turkey', coords: [28.9784, 41.0082], zoom: 16 },
    { name: '🏔️ Zurich, Switzerland', coords: [8.5417, 47.3769], zoom: 16 },
    { name: '🍀 Dublin, Ireland', coords: [-6.2603, 53.3498], zoom: 16 },
    { name: '🎨 Prague, Czech Republic', coords: [14.4378, 50.0755], zoom: 16 },
    { name: '🏰 Edinburgh, Scotland', coords: [-3.1883, 55.9533], zoom: 16 },
    { name: '⚡ Athens, Greece', coords: [23.7275, 37.9838], zoom: 16 },
    { name: '🌊 Lisbon, Portugal', coords: [-9.1393, 38.7223], zoom: 16 },
    { name: '🎪 Copenhagen, Denmark', coords: [12.5683, 55.6761], zoom: 16 },
    { name: '🏛️ Stockholm, Sweden', coords: [18.0686, 59.3293], zoom: 16 },
    
    // Asia
    { name: '🗾 Tokyo, Japan', coords: [139.6503, 35.6762], zoom: 16 },
    { name: '⛩️ Kyoto, Japan', coords: [135.7681, 35.0116], zoom: 16 },
    { name: '🌸 Osaka, Japan', coords: [135.5022, 34.6937], zoom: 16 },
    { name: '🏙️ Hong Kong', coords: [114.1694, 22.3193], zoom: 16 },
    { name: '🐉 Shanghai, China', coords: [121.4737, 31.2304], zoom: 16 },
    { name: '🏯 Beijing, China', coords: [116.4074, 39.9042], zoom: 16 },
    { name: '🌃 Singapore', coords: [103.8198, 1.3521], zoom: 16 },
    { name: '🕌 Dubai, UAE', coords: [55.2708, 25.2048], zoom: 16 },
    { name: '🕌 Abu Dhabi, UAE', coords: [54.3705, 24.4539], zoom: 16 },
    { name: '🏙️ Seoul, South Korea', coords: [126.9780, 37.5665], zoom: 16 },
    { name: '🏙️ Bangkok, Thailand', coords: [100.5018, 13.7563], zoom: 16 },
    { name: '🌴 Mumbai, India', coords: [72.8777, 19.0760], zoom: 16 },
    { name: '🏛️ New Delhi, India', coords: [77.2090, 28.6139], zoom: 16 },
    { name: '🌊 Tel Aviv, Israel', coords: [34.7818, 32.0853], zoom: 16 },
    { name: '🕌 Jerusalem, Israel', coords: [35.2137, 31.7683], zoom: 16 },
    
    // Oceania
    { name: '🏖️ Sydney, Australia', coords: [151.2093, -33.8688], zoom: 16 },
    { name: '🌆 Melbourne, Australia', coords: [144.9631, -37.8136], zoom: 16 },
    { name: '🗻 Auckland, New Zealand', coords: [174.7633, -36.8485], zoom: 16 },
    
    // South America
    { name: '🏖️ Rio de Janeiro, Brazil', coords: [-43.1729, -22.9068], zoom: 16 },
    { name: '🌃 São Paulo, Brazil', coords: [-46.6333, -23.5505], zoom: 16 },
    { name: '🏔️ Buenos Aires, Argentina', coords: [-58.3816, -34.6037], zoom: 16 },
    { name: '🏛️ Lima, Peru', coords: [-77.0428, -12.0464], zoom: 16 },
    { name: '🌄 Bogotá, Colombia', coords: [-74.0721, 4.7110], zoom: 16 },
    
    // Africa
    { name: '🦁 Cape Town, South Africa', coords: [18.4241, -33.9249], zoom: 16 },
    { name: '🏛️ Cairo, Egypt', coords: [31.2357, 30.0444], zoom: 16 },
    { name: '🌍 Nairobi, Kenya', coords: [36.8219, -1.2921], zoom: 16 },
    { name: '🏙️ Lagos, Nigeria', coords: [3.3792, 6.5244], zoom: 16 },
    { name: '🏔️ Marrakech, Morocco', coords: [-7.9811, 31.6295], zoom: 16 }
];

class Game {
    constructor() {
        this.map = null;
        this.player = null;
        this.camera = null;
        this.inputManager = null;
        this.isRunning = false;
        this.lastTime = 0;
        this.distanceTraveled = 0;
        this.selectedLocation = LOCATIONS[0];
        
        this.initializeUI();
    }

    initializeUI() {
        const playButton = document.getElementById('play-button');
        const introScreen = document.getElementById('intro-screen');
        const loadingScreen = document.getElementById('loading-screen');
        const locationSelect = document.getElementById('location-select');
        
        // Hide loading screen
        loadingScreen.classList.add('hidden');
        
        // Populate location selector
        LOCATIONS.forEach((location, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = location.name;
            locationSelect.appendChild(option);
        });
        
        locationSelect.addEventListener('change', (e) => {
            this.selectedLocation = LOCATIONS[e.target.value];
        });
        
        playButton.addEventListener('click', () => {
            introScreen.classList.add('hidden');
            setTimeout(() => {
                this.start();
            }, 500);
        });
    }

    async start() {
        console.log('Starting game at:', this.selectedLocation.name);
        
        // Show UI
        document.getElementById('ui-container').classList.add('visible');
        document.getElementById('controls-info').classList.add('visible');
        document.getElementById('speed-indicator').classList.add('visible');
        
        // Initialize map at selected location with FREE OpenStreetMap tiles!
        this.map = new maplibregl.Map({
            container: 'map',
            style: {
                version: 8,
                sources: {
                    'osm': {
                        type: 'raster',
                        tiles: [
                            'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
                        ],
                        tileSize: 256,
                        attribution: '&copy; OpenStreetMap Contributors'
                    }
                },
                layers: [
                    {
                        id: 'osm',
                        type: 'raster',
                        source: 'osm',
                        minzoom: 0,
                        maxzoom: 22
                    }
                ]
            },
            center: this.selectedLocation.coords,
            zoom: this.selectedLocation.zoom,
            pitch: 60,
            bearing: 0,
            antialias: true
        });

        this.map.on('load', () => {
            console.log('Map loaded');
            
            // Initialize game systems
            this.inputManager = new InputManager();
            this.player = new Player(this.map, [...this.selectedLocation.coords, 0]);
            this.camera = new Camera(this.map, this.player);
            
            // Start game loop
            this.isRunning = true;
            this.lastTime = performance.now();
            this.gameLoop();
            
            console.log('Game started! Use WASD or arrow keys to move');
            this.showWelcomeMessage();
        });

        this.map.on('error', (e) => {
            console.error('Map error:', e);
            // Map should work fine with free OSM tiles!
        });
    }

    showWelcomeMessage() {
        const welcomeMsg = document.createElement('div');
        welcomeMsg.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(102, 126, 234, 0.95);
            color: white;
            padding: 30px 40px;
            border-radius: 15px;
            font-size: 18px;
            text-align: center;
            z-index: 1000;
            box-shadow: 0 10px 40px rgba(0,0,0,0.5);
        `;
        welcomeMsg.innerHTML = `
            <h2 style="margin: 0 0 15px 0;">Welcome to ${this.selectedLocation.name}! 🎉</h2>
            <p style="margin: 0;">Use WASD or arrow keys to explore!</p>
        `;
        document.body.appendChild(welcomeMsg);
        
        setTimeout(() => {
            welcomeMsg.style.transition = 'opacity 0.5s';
            welcomeMsg.style.opacity = '0';
            setTimeout(() => welcomeMsg.remove(), 500);
        }, 3000);
    }

    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = currentTime;

        // Update game systems
        if (this.player && this.inputManager) {
            const input = this.inputManager.getInput();
            const prevPos = { ...this.player.position };
            this.player.update(deltaTime, input);
            
            // Calculate distance traveled
            const dx = this.player.position.lng - prevPos.lng;
            const dy = this.player.position.lat - prevPos.lat;
            const distance = Math.sqrt(dx * dx + dy * dy);
            this.distanceTraveled += distance * 111320; // Convert to meters (approximate)
            
            // Update speed indicator
            const speed = Math.abs(this.player.velocity * 50).toFixed(0); // Approximate km/h
            document.getElementById('speed-value').textContent = speed;
            
            // Update distance display
            const distanceKm = (this.distanceTraveled / 1000).toFixed(2);
            const distanceEl = document.getElementById('distance-traveled');
            if (distanceEl) {
                distanceEl.textContent = distanceKm;
            }
        }

        if (this.camera && this.player) {
            this.camera.update();
        }

        requestAnimationFrame(() => this.gameLoop());
    }
}

// Start the game when the page loads
const game = new Game();

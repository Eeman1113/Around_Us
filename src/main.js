import mapboxgl from 'mapbox-gl';
import { Player } from './game/Player.js';
import { Camera } from './game/Camera.js';
import { InputManager } from './game/InputManager.js';

// Mapbox token - You'll need to replace this with your own token from mapbox.com
// Get a free token at: https://account.mapbox.com/access-tokens/
mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example';

// Cool locations to explore!
const LOCATIONS = [
    { name: '🗽 New York', coords: [-74.006, 40.7128], zoom: 16 },
    { name: '🗼 Paris', coords: [2.2945, 48.8584], zoom: 16 },
    { name: '🗾 Tokyo', coords: [139.6503, 35.6762], zoom: 16 },
    { name: '🏰 London', coords: [-0.1276, 51.5074], zoom: 16 },
    { name: '🏙️ Dubai', coords: [55.2708, 25.2048], zoom: 16 },
    { name: '🌉 San Francisco', coords: [-122.4194, 37.7749], zoom: 16 },
    { name: '🕌 Istanbul', coords: [28.9784, 41.0082], zoom: 16 },
    { name: '🏛️ Rome', coords: [12.4964, 41.9028], zoom: 16 }
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
        
        // Initialize map at selected location
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: this.selectedLocation.coords,
            zoom: this.selectedLocation.zoom,
            pitch: 60,
            bearing: 0,
            antialias: true
        });

        this.map.on('load', () => {
            console.log('Map loaded');
            
            // Add 3D buildings
            this.add3DBuildings();
            
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
            alert('Failed to load map. Please check your Mapbox token in src/main.js\n\nSee MAPBOX_TOKEN_GUIDE.md for instructions!');
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

    add3DBuildings() {
        // Add 3D building layer
        const layers = this.map.getStyle().layers;
        const labelLayerId = layers.find(
            (layer) => layer.type === 'symbol' && layer.layout['text-field']
        )?.id;

        this.map.addLayer(
            {
                id: '3d-buildings',
                source: 'composite',
                'source-layer': 'building',
                filter: ['==', 'extrude', 'true'],
                type: 'fill-extrusion',
                minzoom: 15,
                paint: {
                    'fill-extrusion-color': '#aaa',
                    'fill-extrusion-height': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'height']
                    ],
                    'fill-extrusion-base': [
                        'interpolate',
                        ['linear'],
                        ['zoom'],
                        15,
                        0,
                        15.05,
                        ['get', 'min_height']
                    ],
                    'fill-extrusion-opacity': 0.6
                }
            },
            labelLayerId
        );
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

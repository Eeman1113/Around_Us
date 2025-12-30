import * as Cesium from 'cesium';
import { Aircraft } from './game/Aircraft.js';
import { FlightCamera } from './game/FlightCamera.js';
import { FlightControls } from './game/FlightControls.js';

// Cesium Ion default access token (free tier - get your own at cesium.com/ion)
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlYWE1OWUxNy1mMWZiLTQzYjYtYTQ0OS1kMWFjYmFkNjc5YzciLCJpZCI6NTc3MzMsImlhdCI6MTYyNzg0NTE4Mn0.XcKpgANiY19MC4bdFUXMVEBToBmqS8kuYpUlxJHYZxk';

// Flight locations around the world
const LOCATIONS = [
    { name: '🗽 New York, USA', lon: -74.006, lat: 40.7128, alt: 1000 },
    { name: '🗼 Paris, France', lon: 2.2945, lat: 48.8584, alt: 1000 },
    { name: '🗾 Tokyo, Japan', lon: 139.6503, lat: 35.6762, alt: 1000 },
    { name: '🏰 London, UK', lon: -0.1276, lat: 51.5074, alt: 1000 },
    { name: '🕌 Dubai, UAE', lon: 55.2708, lat: 25.2048, alt: 1000 },
    { name: '🌉 San Francisco, USA', lon: -122.4194, lat: 37.7749, alt: 1000 },
    { name: '🏖️ Sydney, Australia', lon: 151.2093, lat: -33.8688, alt: 1000 },
    { name: '🏔️ Rio de Janeiro, Brazil', lon: -43.1729, lat: -22.9068, alt: 1000 },
    { name: '🦁 Cape Town, South Africa', lon: 18.4241, lat: -33.9249, alt: 1000 },
    { name: '🌃 Singapore', lon: 103.8198, lat: 1.3521, alt: 1000 }
];

class FlightSimulator {
    constructor() {
        this.viewer = null;
        this.aircraft = null;
        this.camera = null;
        this.controls = null;
        this.selectedLocation = null;
        this.isRunning = false;
        this.lastTime = null;
        
        // Make game globally accessible for button onclick
        window.game = this;
        
        this.init();
    }

    init() {
        // Populate location dropdown
        const select = document.getElementById('location-select');
        LOCATIONS.forEach((loc, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = loc.name;
            select.appendChild(option);
        });

        // Set default location
        select.value = 0;
        this.selectedLocation = LOCATIONS[0];

        select.addEventListener('change', (e) => {
            this.selectedLocation = LOCATIONS[e.target.value];
        });

        console.log('Flight Simulator initialized!');
    }

    async startFlight() {
        if (!this.selectedLocation) {
            alert('Please select a starting location!');
            return;
        }

        // Hide intro screen
        document.getElementById('intro-screen').classList.add('hidden');
        
        // Show loading
        document.getElementById('loading-screen').classList.remove('hidden');

        try {
            // Create Cesium Viewer with terrain and buildings
            this.viewer = new Cesium.Viewer('cesiumContainer', {
                terrain: Cesium.Terrain.fromWorldTerrain(),
                shouldAnimate: true,
                animation: false,
                baseLayerPicker: false,
                fullscreenButton: false,
                vrButton: false,
                geocoder: false,
                homeButton: false,
                infoBox: false,
                sceneModePicker: false,
                selectionIndicator: false,
                timeline: false,
                navigationHelpButton: false,
                skyBox: new Cesium.SkyBox({
                    sources: {
                        positiveX: 'https://cesium.com/downloads/cesiumjs/releases/1.120/Build/Cesium/Assets/Textures/SkyBox/tycho2t3_80_px.jpg',
                        negativeX: 'https://cesium.com/downloads/cesiumjs/releases/1.120/Build/Cesium/Assets/Textures/SkyBox/tycho2t3_80_mx.jpg',
                        positiveY: 'https://cesium.com/downloads/cesiumjs/releases/1.120/Build/Cesium/Assets/Textures/SkyBox/tycho2t3_80_py.jpg',
                        negativeY: 'https://cesium.com/downloads/cesiumjs/releases/1.120/Build/Cesium/Assets/Textures/SkyBox/tycho2t3_80_my.jpg',
                        positiveZ: 'https://cesium.com/downloads/cesiumjs/releases/1.120/Build/Cesium/Assets/Textures/SkyBox/tycho2t3_80_pz.jpg',
                        negativeZ: 'https://cesium.com/downloads/cesiumjs/releases/1.120/Build/Cesium/Assets/Textures/SkyBox/tycho2t3_80_mz.jpg'
                    }
                }),
                skyAtmosphere: new Cesium.SkyAtmosphere()
            });

            // Enable lighting
            this.viewer.scene.globe.enableLighting = true;

            // Add Cesium OSM Buildings (3D buildings worldwide!)
            const osmBuildingsTileset = await Cesium.createOsmBuildingsAsync();
            this.viewer.scene.primitives.add(osmBuildingsTileset);

            // Hide loading
            document.getElementById('loading-screen').classList.add('hidden');

            // Initialize game systems
            this.controls = new FlightControls();
            this.aircraft = new Aircraft(
                this.viewer,
                this.selectedLocation.lon,
                this.selectedLocation.lat,
                this.selectedLocation.alt
            );
            this.camera = new FlightCamera(this.viewer, this.aircraft);

            // Show HUD
            document.getElementById('controls-info').classList.add('visible');
            document.getElementById('location-name').textContent = `Flying near ${this.selectedLocation.name}`;

            // Hide controls after 10 seconds
            setTimeout(() => {
                document.getElementById('controls-info').style.opacity = '0';
            }, 10000);

            // Start game loop
            this.isRunning = true;
            this.lastTime = performance.now();
            this.gameLoop();

            console.log('Flight started!');
        } catch (error) {
            console.error('Error starting flight:', error);
            alert('Error loading 3D terrain. Please refresh and try again!');
        }
    }

    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // Update aircraft physics
        this.aircraft.update(deltaTime, this.controls);

        // Update camera
        this.camera.update();

        // Update HUD
        this.updateHUD();

        // Continue loop
        requestAnimationFrame(() => this.gameLoop());
    }

    updateHUD() {
        const position = this.aircraft.getPosition();
        const velocity = this.aircraft.getVelocity();
        const orientation = this.aircraft.getOrientation();

        // Altitude in feet
        const altitudeFt = Math.round(position.height * 3.28084);
        document.getElementById('altitude-value').textContent = `${altitudeFt.toLocaleString()} ft`;

        // Speed in knots
        const speedKts = Math.round(velocity * 1.94384);
        document.getElementById('speed-value').textContent = `${speedKts} kts`;

        // Heading, Pitch, Roll
        document.getElementById('heading-value').textContent = `${Math.round(orientation.heading)}°`;
        document.getElementById('pitch-value').textContent = `${Math.round(orientation.pitch)}°`;
        document.getElementById('roll-value').textContent = `${Math.round(orientation.roll)}°`;
    }
}

// Start the sim!
new FlightSimulator();

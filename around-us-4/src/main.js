import * as Cesium from 'cesium';
import { Aircraft } from './game/Aircraft.js';
import { FlightCamera } from './game/FlightCamera.js';
import { FlightControls } from './game/FlightControls.js';

// Your Cesium Ion token - ready to fly!
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0MTE4ZWM5My00Yzg3LTRhYzktODZiOC0zZTdiNjQzMjU5MTYiLCJpZCI6MzczNzA3LCJpYXQiOjE3NjcwODgxODV9.Z78RNThi_Cuvt65HZ1W1k-EpJM8Otcr3z3cSkgofpw0';

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
        
        window.game = this;
        this.init();
    }

    init() {
        const select = document.getElementById('location-select');
        LOCATIONS.forEach((loc, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = loc.name;
            select.appendChild(option);
        });

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

        document.getElementById('intro-screen').classList.add('hidden');
        document.getElementById('loading-screen').classList.remove('hidden');

        try {
            console.log('Creating Cesium viewer...');

            // Create Cesium Viewer
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
                navigationHelpButton: false
            });

            this.viewer.scene.globe.enableLighting = true;

            console.log('Loading 3D buildings...');
            const osmBuildingsTileset = await Cesium.createOsmBuildingsAsync();
            this.viewer.scene.primitives.add(osmBuildingsTileset);

            document.getElementById('loading-screen').classList.add('hidden');

            this.controls = new FlightControls();
            this.aircraft = new Aircraft(
                this.viewer,
                this.selectedLocation.lon,
                this.selectedLocation.lat,
                this.selectedLocation.alt
            );
            this.camera = new FlightCamera(this.viewer, this.aircraft);

            document.getElementById('controls-info').classList.add('visible');
            document.getElementById('location-name').textContent = `Flying near ${this.selectedLocation.name}`;

            setTimeout(() => {
                document.getElementById('controls-info').style.opacity = '0';
            }, 10000);

            this.isRunning = true;
            this.lastTime = performance.now();
            this.gameLoop();

            console.log('✈️ Flight started! Use WASD + Shift/Ctrl to fly!');
        } catch (error) {
            console.error('Error starting flight:', error);
            document.getElementById('loading-screen').innerHTML = `
                <div style="text-align: center; color: white; padding: 40px;">
                    <h2>Error Loading Flight Simulator</h2>
                    <p style="margin: 20px 0;">${error.message}</p>
                    <p style="font-size: 14px; opacity: 0.8;">Check the browser console (F12) for more details</p>
                    <button onclick="location.reload()" 
                            style="margin-top: 20px; padding: 12px 30px; border: none; 
                                   border-radius: 25px; background: #667eea; color: white; cursor: pointer;">
                        Try Again
                    </button>
                </div>
            `;
        }
    }

    gameLoop() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        this.aircraft.update(deltaTime, this.controls);
        this.camera.update();
        this.updateHUD();

        requestAnimationFrame(() => this.gameLoop());
    }

    updateHUD() {
        const position = this.aircraft.getPosition();
        const velocity = this.aircraft.getVelocity();
        const orientation = this.aircraft.getOrientation();

        const altitudeFt = Math.round(position.height * 3.28084);
        document.getElementById('altitude-value').textContent = `${altitudeFt.toLocaleString()} ft`;

        const speedKts = Math.round(velocity * 1.94384);
        document.getElementById('speed-value').textContent = `${speedKts} kts`;

        document.getElementById('heading-value').textContent = `${Math.round(orientation.heading)}°`;
        document.getElementById('pitch-value').textContent = `${Math.round(orientation.pitch)}°`;
        document.getElementById('roll-value').textContent = `${Math.round(orientation.roll)}°`;
    }
}

new FlightSimulator();

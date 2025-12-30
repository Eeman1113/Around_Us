import maplibregl from 'maplibre-gl';

export class Player {
    constructor(map, startPosition) {
        this.map = map;
        this.position = {
            lng: startPosition[0],
            lat: startPosition[1],
            altitude: startPosition[2] || 0
        };
        
        this.velocity = 0;
        this.rotation = 0;
        this.maxSpeed = 0.0001; // Map units per second
        this.acceleration = 0.00005;
        this.friction = 0.95;
        this.rotationSpeed = 2; // radians per second
        
        this.isJumping = false;
        this.jumpVelocity = 0;
        this.gravity = -20;
        
        this.marker = this.createPlayerMarker();
    }

    createPlayerMarker() {
        // Create a simple player marker
        const el = document.createElement('div');
        el.style.width = '20px';
        el.style.height = '20px';
        el.style.backgroundColor = '#667eea';
        el.style.borderRadius = '50%';
        el.style.border = '3px solid white';
        el.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
        
        return new maplibregl.Marker(el)
            .setLngLat([this.position.lng, this.position.lat])
            .addTo(this.map);
    }

    update(deltaTime, input) {
        // Handle rotation
        if (input.left) {
            this.rotation += this.rotationSpeed * deltaTime;
        }
        if (input.right) {
            this.rotation -= this.rotationSpeed * deltaTime;
        }

        // Handle forward/backward movement
        let targetVelocity = 0;
        if (input.forward) {
            targetVelocity = this.maxSpeed;
        } else if (input.backward) {
            targetVelocity = -this.maxSpeed * 0.5;
        }

        // Accelerate towards target velocity
        if (targetVelocity !== 0) {
            this.velocity += (targetVelocity - this.velocity) * this.acceleration * deltaTime * 60;
        } else {
            // Apply friction when not accelerating
            this.velocity *= Math.pow(this.friction, deltaTime * 60);
            if (Math.abs(this.velocity) < 0.0000001) {
                this.velocity = 0;
            }
        }

        // Clamp velocity
        this.velocity = Math.max(-this.maxSpeed * 0.5, Math.min(this.maxSpeed, this.velocity));

        // Update position based on velocity and rotation
        if (this.velocity !== 0) {
            const dx = Math.sin(this.rotation) * this.velocity;
            const dy = Math.cos(this.rotation) * this.velocity;
            
            this.position.lng += dx;
            this.position.lat += dy;
        }

        // Handle jumping
        if (input.jump && !this.isJumping) {
            this.isJumping = true;
            this.jumpVelocity = 10;
        }

        if (this.isJumping) {
            this.jumpVelocity += this.gravity * deltaTime;
            this.position.altitude += this.jumpVelocity * deltaTime;

            // Land when hitting ground
            if (this.position.altitude <= 0) {
                this.position.altitude = 0;
                this.isJumping = false;
                this.jumpVelocity = 0;
            }
        }

        // Update marker position
        this.marker.setLngLat([this.position.lng, this.position.lat]);
    }

    getPosition() {
        return this.position;
    }

    getRotation() {
        return this.rotation;
    }
}

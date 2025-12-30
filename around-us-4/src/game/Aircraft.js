import * as Cesium from 'cesium';

export class Aircraft {
    constructor(viewer, lon, lat, alt) {
        this.viewer = viewer;
        
        // Position
        this.position = Cesium.Cartesian3.fromDegrees(lon, lat, alt);
        
        // Flight dynamics
        this.velocity = 50; // m/s (starting speed)
        this.minVelocity = 20; // Minimum speed to stay airborne
        this.maxVelocity = 150; // Maximum speed
        this.throttle = 0.5; // 0 to 1
        
        // Orientation (in radians)
        this.heading = 0; // Yaw (0 = North)
        this.pitch = 0; // Pitch (negative = nose down)
        this.roll = 0; // Roll (negative = left, positive = right)
        
        // Control rates (degrees per second)
        this.pitchRate = 30;
        this.rollRate = 60;
        this.yawRate = 20;
        
        // Create aircraft entity
        this.entity = viewer.entities.add({
            position: this.position,
            orientation: Cesium.Transforms.headingPitchRollQuaternion(
                this.position,
                new Cesium.HeadingPitchRoll(this.heading, this.pitch, this.roll)
            ),
            model: {
                uri: 'https://raw.githubusercontent.com/CesiumGS/cesium/main/Apps/SampleData/models/CesiumAir/Cesium_Air.glb',
                minimumPixelSize: 64,
                maximumScale: 20000
            }
        });
    }

    update(deltaTime, controls) {
        // Throttle control
        if (controls.isKeyPressed('ShiftLeft') || controls.isKeyPressed('ShiftRight')) {
            this.throttle = Math.min(1, this.throttle + deltaTime * 0.5);
        }
        if (controls.isKeyPressed('ControlLeft') || controls.isKeyPressed('ControlRight')) {
            this.throttle = Math.max(0, this.throttle - deltaTime * 0.5);
        }

        // Update velocity based on throttle
        const targetVelocity = this.minVelocity + (this.maxVelocity - this.minVelocity) * this.throttle;
        this.velocity += (targetVelocity - this.velocity) * deltaTime * 2;

        // Pitch control (W/S)
        if (controls.isKeyPressed('KeyW') || controls.isKeyPressed('ArrowUp')) {
            this.pitch -= Cesium.Math.toRadians(this.pitchRate) * deltaTime;
        }
        if (controls.isKeyPressed('KeyS') || controls.isKeyPressed('ArrowDown')) {
            this.pitch += Cesium.Math.toRadians(this.pitchRate) * deltaTime;
        }

        // Roll control (A/D)
        if (controls.isKeyPressed('KeyA') || controls.isKeyPressed('ArrowLeft')) {
            this.roll -= Cesium.Math.toRadians(this.rollRate) * deltaTime;
        }
        if (controls.isKeyPressed('KeyD') || controls.isKeyPressed('ArrowRight')) {
            this.roll += Cesium.Math.toRadians(this.rollRate) * deltaTime;
        }

        // Yaw control (Q/E)
        if (controls.isKeyPressed('KeyQ')) {
            this.heading -= Cesium.Math.toRadians(this.yawRate) * deltaTime;
        }
        if (controls.isKeyPressed('KeyE')) {
            this.heading += Cesium.Math.toRadians(this.yawRate) * deltaTime;
        }

        // Limit pitch and roll
        this.pitch = Cesium.Math.clamp(this.pitch, Cesium.Math.toRadians(-89), Cesium.Math.toRadians(89));
        this.roll = Cesium.Math.clamp(this.roll, Cesium.Math.toRadians(-180), Cesium.Math.toRadians(180));

        // Natural roll stabilization (plane tries to level out)
        this.roll *= 0.98;

        // Roll affects heading (coordinated turn)
        this.heading += this.roll * deltaTime * 0.5;

        // Calculate movement vector
        const headingVector = new Cesium.Cartesian3(
            Math.sin(this.heading),
            Math.cos(this.heading),
            0
        );

        // Apply pitch to movement
        const pitchFactor = Math.cos(this.pitch);
        const verticalVelocity = -Math.sin(this.pitch) * this.velocity;

        // Calculate new position
        const cartographic = Cesium.Cartographic.fromCartesian(this.position);
        
        // Update horizontal position
        const moveDistance = this.velocity * pitchFactor * deltaTime;
        const newLon = cartographic.longitude + (headingVector.x * moveDistance / (111320 * Math.cos(cartographic.latitude)));
        const newLat = cartographic.latitude + (headingVector.y * moveDistance / 111320);
        
        // Update altitude
        const newAlt = Math.max(10, cartographic.height + verticalVelocity * deltaTime);

        // Update position
        this.position = Cesium.Cartesian3.fromRadians(newLon, newLat, newAlt);

        // Update entity
        this.entity.position = this.position;
        this.entity.orientation = Cesium.Transforms.headingPitchRollQuaternion(
            this.position,
            new Cesium.HeadingPitchRoll(this.heading, this.pitch, this.roll)
        );
    }

    getPosition() {
        const cartographic = Cesium.Cartographic.fromCartesian(this.position);
        return {
            longitude: Cesium.Math.toDegrees(cartographic.longitude),
            latitude: Cesium.Math.toDegrees(cartographic.latitude),
            height: cartographic.height
        };
    }

    getVelocity() {
        return this.velocity;
    }

    getOrientation() {
        return {
            heading: Cesium.Math.toDegrees(this.heading),
            pitch: Cesium.Math.toDegrees(this.pitch),
            roll: Cesium.Math.toDegrees(this.roll)
        };
    }
}

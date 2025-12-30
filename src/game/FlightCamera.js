import * as Cesium from 'cesium';

export class FlightCamera {
    constructor(viewer, aircraft) {
        this.viewer = viewer;
        this.aircraft = aircraft;
        this.camera = viewer.camera;
        
        // Camera settings
        this.distance = 100; // meters behind aircraft
        this.height = 30; // meters above aircraft
        this.smoothing = 0.1;
    }

    update() {
        const position = this.aircraft.position;
        const orientation = this.aircraft.getOrientation();
        
        // Calculate camera position behind and above aircraft
        const heading = Cesium.Math.toRadians(orientation.heading);
        const pitch = Cesium.Math.toRadians(orientation.pitch);
        
        // Offset behind the aircraft
        const offset = new Cesium.Cartesian3(
            -Math.sin(heading) * this.distance,
            -Math.cos(heading) * this.distance,
            this.height
        );

        // Transform offset to world coordinates
        const transform = Cesium.Transforms.eastNorthUpToFixedFrame(position);
        const cameraPosition = Cesium.Matrix4.multiplyByPoint(
            transform,
            offset,
            new Cesium.Cartesian3()
        );

        // Look at aircraft
        const direction = Cesium.Cartesian3.subtract(
            position,
            cameraPosition,
            new Cesium.Cartesian3()
        );
        Cesium.Cartesian3.normalize(direction, direction);

        // Calculate up vector
        const up = Cesium.Cartesian3.normalize(position, new Cesium.Cartesian3());

        // Smooth camera movement
        this.camera.setView({
            destination: cameraPosition,
            orientation: {
                direction: direction,
                up: up
            }
        });
    }
}

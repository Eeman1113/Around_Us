export class FlightControls {
    constructor() {
        this.keys = new Map();
        
        // Setup event listeners
        window.addEventListener('keydown', (e) => {
            this.keys.set(e.code, true);
        });

        window.addEventListener('keyup', (e) => {
            this.keys.set(e.code, false);
        });

        console.log('Flight controls initialized!');
        console.log('W/S: Pitch | A/D: Roll | Q/E: Yaw | Shift: Throttle Up | Ctrl: Throttle Down');
    }

    isKeyPressed(code) {
        return this.keys.get(code) === true;
    }
}

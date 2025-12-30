export class InputManager {
    constructor() {
        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
            jump: false
        };

        this.setupEventListeners();
    }

    setupEventListeners() {
        window.addEventListener('keydown', (e) => this.handleKeyDown(e));
        window.addEventListener('keyup', (e) => this.handleKeyUp(e));
    }

    handleKeyDown(event) {
        switch (event.key.toLowerCase()) {
            case 'w':
            case 'arrowup':
                this.keys.forward = true;
                event.preventDefault();
                break;
            case 's':
            case 'arrowdown':
                this.keys.backward = true;
                event.preventDefault();
                break;
            case 'a':
            case 'arrowleft':
                this.keys.left = true;
                event.preventDefault();
                break;
            case 'd':
            case 'arrowright':
                this.keys.right = true;
                event.preventDefault();
                break;
            case ' ':
                this.keys.jump = true;
                event.preventDefault();
                break;
        }
    }

    handleKeyUp(event) {
        switch (event.key.toLowerCase()) {
            case 'w':
            case 'arrowup':
                this.keys.forward = false;
                break;
            case 's':
            case 'arrowdown':
                this.keys.backward = false;
                break;
            case 'a':
            case 'arrowleft':
                this.keys.left = false;
                break;
            case 'd':
            case 'arrowright':
                this.keys.right = false;
                break;
            case ' ':
                this.keys.jump = false;
                break;
        }
    }

    getInput() {
        return { ...this.keys };
    }
}

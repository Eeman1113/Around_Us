export class Camera {
    constructor(map, player) {
        this.map = map;
        this.player = player;
        
        // Camera settings
        this.distance = 0.001; // Distance behind player
        this.height = 0.0005; // Height above player
        this.smoothing = 0.1; // Lower = smoother but more lag
        
        // Current camera position (for smoothing)
        this.currentLng = player.position.lng;
        this.currentLat = player.position.lat;
        this.currentBearing = 0;
    }

    update() {
        const playerPos = this.player.getPosition();
        const playerRot = this.player.getRotation();
        
        // Calculate target camera position (behind the player)
        const targetLng = playerPos.lng - Math.sin(playerRot) * this.distance;
        const targetLat = playerPos.lat - Math.cos(playerRot) * this.distance;
        
        // Smooth camera movement
        this.currentLng += (targetLng - this.currentLng) * this.smoothing;
        this.currentLat += (targetLat - this.currentLat) * this.smoothing;
        
        // Smooth rotation
        let targetBearing = -(playerRot * 180 / Math.PI);
        let bearingDiff = targetBearing - this.currentBearing;
        
        // Normalize bearing difference to -180 to 180
        while (bearingDiff > 180) bearingDiff -= 360;
        while (bearingDiff < -180) bearingDiff += 360;
        
        this.currentBearing += bearingDiff * this.smoothing;
        
        // Update map camera
        this.map.easeTo({
            center: [this.currentLng, this.currentLat],
            bearing: this.currentBearing,
            pitch: 60,
            duration: 0,
            easing: (t) => t
        });
    }
}

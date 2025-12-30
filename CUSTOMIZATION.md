# 🎨 Customization Guide

Make this game truly yours! Here are fun ways to customize it.

## 🗺️ Change Map Tiles

The game uses OpenStreetMap tiles by default. You can change to other free tile providers!

Edit `src/main.js`, find the map initialization, and change the `tiles` array:

**Default - OpenStreetMap:**
```javascript
tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png']
```

**Try these free alternatives:**

```javascript
// OpenTopoMap (topographic style)
tiles: ['https://tile.opentopomap.org/{z}/{x}/{y}.png']

// Stamen Terrain (terrain style)
tiles: ['https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg']

// Stamen Watercolor (artistic style)
tiles: ['https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg']

// CartoDB Positron (light style)
tiles: ['https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png']

// CartoDB Dark Matter (dark style)
tiles: ['https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png']
```

**All of these are FREE with no API key!**

## 🏃 Adjust Player Speed

Edit `src/game/Player.js`:

```javascript
// Line 13-16
this.maxSpeed = 0.0001;        // Higher = faster movement
this.acceleration = 0.00005;   // Higher = quicker acceleration
this.friction = 0.95;          // Lower = slippery, Higher = more grip
this.rotationSpeed = 2;        // Higher = faster turning
```

**Presets:**
```javascript
// Slow & Steady
this.maxSpeed = 0.00005;
this.rotationSpeed = 1;

// Normal (default)
this.maxSpeed = 0.0001;
this.rotationSpeed = 2;

// Fast & Furious
this.maxSpeed = 0.0003;
this.rotationSpeed = 4;
```

## 🎨 Change Player Marker

Edit `src/game/Player.js`, line 22-27:

```javascript
const el = document.createElement('div');
el.style.width = '20px';
el.style.height = '20px';
el.style.backgroundColor = '#667eea';  // Change this color!
el.style.borderRadius = '50%';         // Make it a circle
el.style.border = '3px solid white';
```

**Color ideas:**
- `#ff6b6b` - Red
- `#4ecdc4` - Teal
- `#ffe66d` - Yellow
- `#a8dadc` - Blue
- `#f08080` - Light Coral
- `#98d8c8` - Mint

**Shape ideas:**
```javascript
el.style.borderRadius = '0%';     // Square
el.style.borderRadius = '20%';    // Rounded square
el.style.borderRadius = '50%';    // Circle (default)
```

## 📍 Add More Locations

Edit `src/main.js`, add to the LOCATIONS array (line 11):

```javascript
const LOCATIONS = [
    // ... existing locations
    { name: '🌴 Your City', coords: [longitude, latitude], zoom: 16 },
];
```

Find coordinates:
1. Go to [Google Maps](https://www.google.com/maps)
2. Right-click any location
3. Click the coordinates to copy
4. Format: [longitude, latitude]

**Cool location ideas:**
- Your hometown
- Your school/university
- Famous landmarks
- Dream vacation spots
- Movie locations

## 📐 Adjust Camera

Edit `src/game/Camera.js`:

```javascript
// Line 7-9
this.distance = 0.001;   // Distance behind player (higher = farther)
this.height = 0.0005;    // Height above player (higher = bird's eye)
this.smoothing = 0.1;    // Camera lag (0.1 = smooth, 1 = instant)
```

**Camera presets:**
```javascript
// Close follow (action cam)
this.distance = 0.0005;
this.smoothing = 0.2;

// Far view (overview)
this.distance = 0.002;
this.smoothing = 0.05;

// First person (experimental)
this.distance = 0;
this.smoothing = 0.5;
```

## 🎮 Customize Controls

Edit `src/game/InputManager.js`:

Change key bindings in `handleKeyDown` and `handleKeyUp` methods.

Example - Change to arrow keys only:
```javascript
case 'arrowup':
    this.keys.forward = true;
    break;
// Remove 'w' case
```

Or add new keys:
```javascript
case 'shift':
    this.keys.sprint = true;  // Add sprint feature!
    break;
```

## 🎯 Add Custom Features

### Distance Milestones
Edit `src/main.js` in the `gameLoop` method:

```javascript
// Add after line 105
if (this.distanceTraveled > 1000 && !this.milestone1km) {
    this.milestone1km = true;
    alert('🎉 You traveled 1km!');
}
```

### Jump Height
Edit `src/game/Player.js`, line 55:

```javascript
this.jumpVelocity = 10;  // Higher = higher jumps (try 20!)
```

## 🎵 Add Sounds

1. Add audio files to `public/sounds/`
2. Create a SoundManager:

```javascript
class SoundManager {
    constructor() {
        this.walkSound = new Audio('/sounds/walk.mp3');
        this.jumpSound = new Audio('/sounds/jump.mp3');
    }
    
    playWalk() {
        this.walkSound.play();
    }
}
```

3. Use in Player.js

## 🌟 UI Customization

Edit `index.html` styles:

```css
/* Change theme colors */
#intro-screen {
    background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
}

/* Change fonts */
body {
    font-family: 'Comic Sans MS', 'Arial', sans-serif;
}
```

## 💡 Advanced Ideas

### Add Different Map Styles
Switch between different free tile providers:
```javascript
const styles = [
    'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://cartodb-basemaps-a.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png'
];
// Switch styles dynamically
```

### Add Weather Overlay
Use free weather APIs to show weather on the map

### Add Multiplayer
Use WebSockets or WebRTC (advanced)

---

## 🆘 Need Help?

- Check the console for errors: `F12` > Console
- Test changes incrementally
- Keep backups of working code
- Search for MapLibre GL JS docs for map features
- All map tiles are free - no API keys needed!

**Have fun customizing!** 🎨🎮

# 🌍 Around_Us

A fun, simple 3D exploration game built with Mapbox GL JS. No login, no multiplayer, no BS - just explore and have fun!

**Created by:** eeman majumder (eeman1113)

## ✨ Features

- 🎮 Simple and intuitive controls
- 🗺️ Explore real-world 3D cities
- 🏃 Walk and run around
- 🚗 Smooth camera movement
- 🎯 No login or registration needed
- 🌟 Just open and play!

## 🎮 Controls

- **W / ↑** - Move forward
- **S / ↓** - Move backward  
- **A / ←** - Turn left
- **D / →** - Turn right
- **SPACE** - Jump

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- A Mapbox account (free)

### Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Get a Mapbox Token:**
   - Go to [mapbox.com](https://www.mapbox.com/)
   - Sign up for a free account
   - Go to [Account > Access Tokens](https://account.mapbox.com/access-tokens/)
   - Copy your default public token
   - Open `src/main.js` and replace the `mapboxgl.accessToken` value with your token

3. **Run the game:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - The game will automatically open at `http://localhost:3000`
   - Click "PLAY NOW" and start exploring!

## 🏗️ Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder. You can deploy these to any static hosting service.

## 🎨 Customization

### Change Starting Location

Edit `src/main.js` and modify the map center coordinates:

```javascript
center: [-74.006, 40.7128], // [longitude, latitude]
```

Some interesting locations to try:
- **New York City:** `[-74.006, 40.7128]`
- **Paris:** `[2.3522, 48.8566]`
- **Tokyo:** `[139.6503, 35.6762]`
- **London:** `[-0.1276, 51.5074]`
- **Dubai:** `[55.2708, 25.2048]`

### Adjust Player Speed

Edit `src/game/Player.js`:

```javascript
this.maxSpeed = 0.0001; // Increase for faster movement
this.rotationSpeed = 2; // Increase for faster turning
```

### Change Map Style

Edit `src/main.js` and change the map style:

```javascript
style: 'mapbox://styles/mapbox/streets-v12' // Try: satellite-v9, dark-v10, light-v10
```

## 🐛 Troubleshooting

### Map doesn't load
- Make sure you've added your Mapbox token in `src/main.js`
- Check the browser console for errors
- Verify your internet connection

### Game is slow
- Try reducing the browser window size
- Close other browser tabs
- Try a different map style (dark-v10 is lighter)

### Controls don't work
- Make sure the game window has focus (click on it)
- Check that you've clicked "PLAY NOW"
- Try refreshing the page

## 📝 License

MIT License - Feel free to modify and share!

## 🙏 Credits

**Project:** Around_Us  
**Created by:** eeman majumder (eeman1113)  
**Built with:** Mapbox GL JS, Three.js, Vite

---

**Have fun exploring!** 🎮🌍

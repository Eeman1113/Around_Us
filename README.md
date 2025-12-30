# 🌍 Around_Us

A fun, simple 3D exploration game built with MapLibre GL and OpenStreetMap. **No API keys, no credit card, no registration needed** - just install and play!

**Created by:** eeman majumder (eeman1113)

## ✨ Features

- 🎮 Simple and intuitive controls
- 🗺️ Explore real-world maps
- 🌍 **56+ cities across 6 continents**
- 🏃 Walk and run around
- 🚗 Smooth camera movement
- 🎯 No login or registration needed
- 💳 **NO credit card or API keys required!**
- 🌟 Just open and play!

## 🎮 Controls

- **W / ↑** - Move forward
- **S / ↓** - Move backward  
- **A / ←** - Turn left
- **D / →** - Turn right
- **SPACE** - Jump

## 🌍 Explore 56+ Cities Worldwide!

### 🌎 North America (10 cities)
New York, San Francisco, Las Vegas, Chicago, Los Angeles, Miami, Austin, Toronto, Vancouver, Mexico City

### 🌍 Europe (20 cities)
Paris, London, Rome, Venice, Barcelona, Madrid, Berlin, Vienna, Amsterdam, Istanbul, Zurich, Dublin, Prague, Edinburgh, Athens, Lisbon, Copenhagen, Stockholm

### 🌏 Asia (15 cities)
Tokyo, Kyoto, Osaka, Hong Kong, Shanghai, Beijing, Singapore, Dubai, Abu Dhabi, Seoul, Bangkok, Mumbai, New Delhi, Tel Aviv, Jerusalem

### 🌏 Oceania (3 cities)
Sydney, Melbourne, Auckland

### 🌎 South America (5 cities)
Rio de Janeiro, São Paulo, Buenos Aires, Lima, Bogotá

### 🌍 Africa (5 cities)
Cape Town, Cairo, Nairobi, Lagos, Marrakech

**Can't find your city?** Add it yourself! See `CUSTOMIZATION.md` for instructions.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- **That's it! No API keys needed!**

### Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the game:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - The game will automatically open at `http://localhost:3000`
   - Click "PLAY NOW" and start exploring!

**That's it!** No API keys, no registration, no credit card needed! 🎉

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

## 🐛 Troubleshooting

### Map doesn't load
- Check the browser console for errors
- Verify your internet connection
- Try refreshing the page

### Game is slow
- Try reducing the browser window size
- Close other browser tabs

### Controls don't work
- Make sure the game window has focus (click on it)
- Check that you've clicked "PLAY NOW"
- Try refreshing the page

## 📝 License

MIT License - Feel free to modify and share!

## 🙏 Credits

**Project:** Around_Us  
**Created by:** eeman majumder (eeman1113)  
**Built with:** MapLibre GL JS, OpenStreetMap, Vite
**Map Data:** © OpenStreetMap Contributors

---

**Have fun exploring!** 🎮🌍

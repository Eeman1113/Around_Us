# ✈️ Around_Us Flight Simulator

Fly around the world in 3D with real terrain and buildings! Built with **Cesium** for photorealistic 3D globe rendering.

**Created by:** eeman majumder (eeman1113)

## ✅ TOKEN ALREADY INCLUDED - READY TO FLY!

This simulator is **pre-configured** with your Cesium token. No setup needed!

```bash
npm install
npm run dev
```

**That's it!** Choose a location, click "TAKE OFF", and fly! 🛫

---

## 🎮 What This Is

A **3D flight simulator** where you can:
- ✈️ Fly a realistic aircraft with proper flight physics
- 🌍 Explore the entire 3D globe with real terrain
- 🏙️ Fly over 3D buildings in major cities worldwide
- 🌤️ Experience realistic lighting and atmosphere
- 📊 Track altitude, airspeed, heading, pitch, and roll

## ✈️ Flight Controls

### Basic Flight
- **W / ↑** - Pitch Down (nose down)
- **S / ↓** - Pitch Up (nose up)
- **A / ←** - Roll Left
- **D / →** - Roll Right

### Advanced Controls
- **Q** - Yaw Left (turn left)
- **E** - Yaw Right (turn right)
- **SHIFT** - Increase Throttle (speed up)
- **CTRL** - Decrease Throttle (slow down)

## 🚀 Quick Start

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn
- **FREE Cesium Ion token** (optional - default one included)

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the simulator:**
   ```bash
   npm run dev
   ```

3. **Start flying!**
   - Choose a starting location
   - Click "TAKE OFF"
   - Use WASD + Shift/Ctrl to fly!

### Optional: Get Your Own Cesium Token (FREE)

The simulator includes a default token, but you can get your own FREE token:

1. Go to [cesium.com/ion/signup](https://cesium.com/ion/signup)
2. Sign up for FREE (no credit card!)
3. Go to [Access Tokens](https://ion.cesium.com/tokens)
4. Copy your token
5. Replace it in `src/main.js` line 7

**Free tier includes:**
- 50,000 tile requests/month
- 3D terrain worldwide
- 3D buildings
- More than enough for this simulator!

## 🌍 Starting Locations

Choose from 10 amazing locations:
- 🗽 New York, USA
- 🗼 Paris, France
- 🗾 Tokyo, Japan
- 🏰 London, UK
- 🕌 Dubai, UAE
- 🌉 San Francisco, USA
- 🏖️ Sydney, Australia
- 🏔️ Rio de Janeiro, Brazil
- 🦁 Cape Town, South Africa
- 🌃 Singapore

## 📊 HUD Elements

- **Top Left** - Airspeed (in knots)
- **Top Right** - Altitude (in feet)
- **Middle Left** - Heading, Pitch, Roll angles
- **Bottom Right** - Current location

## 🎯 Flight Tips

1. **Taking Off:** Use Shift to increase speed, then gently pull up (S key)
2. **Turning:** Roll with A/D, then pitch up/down to turn
3. **Maintaining Altitude:** Balance pitch and throttle
4. **Landing:** Reduce throttle, level wings, gentle descent
5. **Exploring:** Fly at different altitudes to see terrain and buildings!

## 🛠️ Customization

### Change Starting Location

Edit `src/main.js` and modify the LOCATIONS array:

```javascript
{ name: 'Your City', lon: longitude, lat: latitude, alt: altitude }
```

### Adjust Flight Physics

Edit `src/game/Aircraft.js`:

```javascript
this.maxVelocity = 150; // Maximum speed in m/s
this.pitchRate = 30; // Pitch control sensitivity
this.rollRate = 60; // Roll control sensitivity
```

### Camera Distance

Edit `src/game/FlightCamera.js`:

```javascript
this.distance = 100; // Distance behind aircraft (meters)
this.height = 30; // Height above aircraft (meters)
```

## 🏗️ Tech Stack

- **Cesium** - 3D globe with real terrain
- **CesiumJS** - JavaScript 3D maps library
- **Vite** - Build tool and dev server
- **JavaScript** - Flight physics and game logic

## 🔧 Building for Production

```bash
npm run build
```

Deploy the `dist/` folder to any static hosting service!

## 🐛 Troubleshooting

### Terrain not loading
- Check your internet connection
- Cesium Ion may be temporarily down
- Try refreshing the page

### Controls not working
- Make sure the game window has focus (click on it)
- Check browser console for errors

### Aircraft model not showing
- The 3D model loads from Cesium's CDN
- May take a moment on first load
- Camera should still work even without model

## 📝 License

MIT License - Feel free to modify and share!

## 🙏 Credits

**Project:** Around_Us Flight Simulator  
**Created by:** eeman majumder (eeman1113)  
**Built with:** Cesium, CesiumJS, Vite  
**3D Terrain:** © Cesium Ion  
**Buildings:** OpenStreetMap Contributors

---

**Ready for takeoff?** 🛫

Have fun exploring the world from above! ✈️🌍

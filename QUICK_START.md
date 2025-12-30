# ✈️ Around_Us Flight Simulator
## Quick Start Guide

Welcome, pilot! Let's get you in the air! 🛫

## ✅ TOKEN INCLUDED - READY TO FLY!

Your Cesium token is **already configured**! No setup needed!

---

## 🎯 What Is This?

A **3D flight simulator** built with Cesium where you can:
- ✈️ Fly a realistic aircraft
- 🌍 Explore the entire 3D globe
- 🏔️ Fly over real terrain and mountains
- 🏙️ Navigate around 3D buildings
- 📊 Track flight data in real-time

## 🚀 GET FLYING IN 2 STEPS!

### Step 1: Install (2 minutes)
```bash
npm install
```

### Step 2: Take Off! (30 seconds)
```bash
npm run dev
```

Choose a location and click "TAKE OFF!" 🛫

**That's it!** No API keys, no setup, just fly!

## ✈️ FLIGHT CONTROLS

### Basic Flight
- **W** - Pitch Down (nose down)
- **S** - Pitch Up (nose up)
- **A** - Roll Left (bank left)
- **D** - Roll Right (bank right)

### Advanced Controls
- **Q** - Yaw Left (turn left)
- **E** - Yaw Right (turn right)
- **SHIFT** - Increase Throttle (speed up)
- **CTRL** - Decrease Throttle (slow down)

## 📊 HUD EXPLAINED

### Top Left - Airspeed
- Measured in **knots** (kts)
- Keep above 20 kts to stay airborne!
- Cruise speed: 50-80 kts

### Top Right - Altitude
- Measured in **feet** (ft) above sea level
- Starting altitude: 1,000 ft
- Higher = better views!

### Middle Left - Orientation
- **Heading:** Direction (0°=North, 90°=East, etc.)
- **Pitch:** Nose angle (+ up, - down)
- **Roll:** Wing tilt (+ right, - left)

## 🌍 STARTING LOCATIONS

Choose from 10 amazing places:
- 🗽 **New York** - Fly over Manhattan!
- 🗼 **Paris** - See the Eiffel Tower from above
- 🗾 **Tokyo** - Navigate the megacity
- 🏰 **London** - Circle the Tower Bridge
- 🕌 **Dubai** - Fly by Burj Khalifa
- 🌉 **San Francisco** - Under the Golden Gate?
- 🏖️ **Sydney** - Coastal flying
- 🏔️ **Rio** - Mountains meet ocean
- 🦁 **Cape Town** - Table Mountain views
- 🌃 **Singapore** - Island exploration

**Want more locations?** Check README.md to add your own!

## 🎓 YOUR FIRST FLIGHT

### 1. Taking Off
- You start in the air already flying
- Press **SHIFT** to increase speed
- Press **S** to climb higher
- Keep wings level (don't roll)

### 2. Turning
- Press **A** or **D** to roll
- Gently press **S** to pull through the turn
- Level wings when facing your direction

### 3. Exploring
- Fly high (2,000+ ft) for overview
- Fly low (200-500 ft) to see buildings
- Don't go below 50 ft! (terrain!)

### 4. Speed Control
- **SHIFT** = Speed up
- **CTRL** = Slow down
- Sweet spot: 60-80 knots

## 🎮 WHAT'S INCLUDED?

### 📁 Documentation
1. **README.md** - Complete guide
2. **FLIGHT_GUIDE.md** - How to fly (beginners)
3. **FLIGHT_SIMULATOR.md** - What's new
4. **CESIUM_INFO.md** - About the tech
5. **START_HERE.txt** - Quick reference

### 🗂️ File Structure
```
around-us-flight-simulator/
├── src/
│   ├── main.js              ← Main game loop
│   └── game/
│       ├── Aircraft.js      ← Flight physics
│       ├── FlightCamera.js  ← Camera system
│       └── FlightControls.js ← Input handling
├── index.html               ← UI and HUD
├── package.json             ← Dependencies
└── Documentation            ← Guides (you are here!)
```

## ❓ TROUBLESHOOTING

### Terrain not loading
- Check internet connection
- Cesium Ion may be temporarily down
- Try refreshing the page

### Controls feel weird
- Remember: aircraft have momentum!
- Small inputs work better
- Practice makes perfect

### Too fast/slow
- Use SHIFT/CTRL to adjust throttle
- Watch your airspeed indicator
- 60-80 knots is comfortable cruise

### Can't see the aircraft
- The 3D model may still be loading
- Camera works even without visible plane
- Give it a few seconds

## 💡 PRO TIPS

1. **Start Simple:** Just fly straight and level first
2. **Small Inputs:** Gentle control movements work best
3. **Watch Your Speed:** Don't stall (below 20 kts)!
4. **Explore Different Altitudes:** Each height offers different views
5. **Read FLIGHT_GUIDE.md:** Detailed flying techniques inside!

## 🎯 CHALLENGES TO TRY

Once you're comfortable:
- ✅ Complete a full 360° circle
- ✅ Fly at exactly 1,000 ft for 1 minute
- ✅ Navigate between buildings
- ✅ Low-level flight (200 ft)
- ✅ Reach maximum speed
- ✅ Try a barrel roll!

## 🔧 OPTIONAL: Get Your Own Cesium Token

The simulator includes a FREE default token that works great!

But if you want your own (also FREE):
1. Go to cesium.com/ion/signup
2. Sign up (no credit card!)
3. Copy your token
4. Replace in `src/main.js` line 7

**Free tier:** 50,000 tile requests/month = 20+ hours of flying!

## 🌟 WHAT'S NEXT?

1. ✅ Master basic flight
2. ✅ Explore all 10 locations
3. ✅ Try aerobatics
4. ✅ Add more cities (see README.md)
5. ✅ Customize aircraft physics
6. ✅ Share with friends!

## ⭐ CREDITS

**Project:** Around_Us Flight Simulator  
**Created by:** eeman majumder (eeman1113)  
**Built with:**
- Cesium (3D globe)
- CesiumJS (rendering)
- Vite (build tool)
- JavaScript (physics)

**3D Terrain:** © Cesium Ion  
**Buildings:** OpenStreetMap Contributors

---

## 🛫 READY FOR TAKEOFF?

1. Run `npm install`
2. Run `npm run dev`
3. Choose location
4. Click "TAKE OFF!"
5. **FLY!** ✈️

**Happy flying!** 🌍

For detailed flight instructions, see **FLIGHT_GUIDE.md**  
For technical info, see **CESIUM_INFO.md**  
For everything else, see **README.md**

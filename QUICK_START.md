# 🌍 Around_Us
## Complete Quick Start Guide

**Created by:** eeman majumder (eeman1113)

---

## 📦 What You Just Downloaded

A fun, simple 3D exploration game where you can walk around real cities in 3D!
- ✅ No login required
- ✅ No multiplayer complexity
- ✅ No backend needed
- ✅ **56+ cities across 6 continents**
- ✅ Just play and explore!

---

## 🚀 GET STARTED IN 2 STEPS!

### Step 1: Install Dependencies (2 minutes)
```bash
npm install
```

### Step 2: Play! (30 seconds)
```bash
npm run dev
```
The game opens automatically in your browser!

**That's it!** No API keys, no registration, no credit card! 🎉

---

## 🎮 CONTROLS

- **W / Arrow Up** - Move forward
- **S / Arrow Down** - Move backward
- **A / Arrow Left** - Turn left
- **D / Arrow Right** - Turn right
- **SPACE** - Jump

---

## 📍 EXPLORE 56+ CITIES WORLDWIDE!

Choose from cities across 6 continents:

**🌎 North America** - New York, San Francisco, Las Vegas, Chicago, LA, Miami, and more!  
**🌍 Europe** - Paris, London, Rome, Barcelona, Berlin, Amsterdam, Istanbul, and more!  
**🌏 Asia** - Tokyo, Hong Kong, Dubai, Singapore, Seoul, Bangkok, Mumbai, and more!  
**🌏 Oceania** - Sydney, Melbourne, Auckland  
**🌎 South America** - Rio, São Paulo, Buenos Aires, Lima, Bogotá  
**🌍 Africa** - Cape Town, Cairo, Nairobi, Lagos, Marrakech

**Want more?** Add your own city! See `CUSTOMIZATION.md`

---

## 📚 DOCUMENTATION

We've included comprehensive guides:

1. **START_HERE.txt** - You are here! Quick start guide
2. **README.md** - Full documentation
3. **NO_API_KEY_NEEDED.md** - Why you don't need API keys!
4. **CUSTOMIZATION.md** - Make the game your own
5. **DEPLOYMENT.md** - Put your game online

---

## 🎨 QUICK CUSTOMIZATIONS

### Change Speed
`src/game/Player.js` line 13:
```javascript
this.maxSpeed = 0.0002;  // Double speed!
```

### Change Starting Location
`src/main.js` line 11 - add cities:
```javascript
{ name: '🏠 My Home', coords: [lng, lat], zoom: 16 },
```

### Change Map Style
`src/main.js` line 53:
```javascript
style: 'mapbox://styles/mapbox/satellite-v9'  // Satellite view!
```

### Change Colors
`index.html` - CSS section - change colors in gradients and backgrounds

---

## 🌐 SHARE YOUR GAME

Want to put it online? (Free!)

**Easiest: Vercel**
```bash
npm install -g vercel
npm run build
vercel
```

See **DEPLOYMENT.md** for more options!

---

## ❓ TROUBLESHOOTING

### "Map failed to load"
- Check your internet connection
- Try refreshing the page
- Check browser console (F12) for errors

### Controls don't work
- Click on the game window to focus it
- Make sure you clicked "PLAY NOW"

### Game is slow
- Try reducing browser window size
- Close other tabs

### Need more help?
- Check browser console (F12)
- Read README.md for details
- Uses FREE OpenStreetMap - no registration needed!

---

## 🎯 WHAT'S NEXT?

1. ✅ Install dependencies
2. ✅ Run the game
3. ✅ Explore different cities
4. ✅ Customize the game (see CUSTOMIZATION.md)
5. ✅ Deploy online (see DEPLOYMENT.md)
6. ✅ Share with friends!

**No API keys, no credit cards, no hassle!** 🎉

---

## 💡 PRO TIPS

- Press F12 to see console logs and debug
- The distance tracker shows how far you've traveled
- Try different times of day for different lighting
- Zoom in on the map before starting for better detail
- Satellite view is awesome but can be slower

---

## 📞 SUPPORT

This is a simple, open-source project. If you need help:
- Read the included documentation
- Check Mapbox documentation: https://docs.mapbox.com
- Remember: the free tier gives you 50,000 map loads/month!

---

## ⭐ CREDITS

**Project:** Around_Us
**Created by:** eeman majumder (eeman1113)
**Built with:** 
- MapLibre GL JS (open source maps)
- OpenStreetMap (free map data)
- Vite (build tool)
- JavaScript (game logic)

**Map Data:** © OpenStreetMap Contributors

---

## 📄 LICENSE

MIT License - Free to use, modify, and share!
See LICENSE file for details.

---

**🎉 NOW GO EXPLORE THE WORLD! 🌍**

Run `npm run dev` and have fun!

---

### File Structure
```
around-us/
├── src/
│   ├── main.js              ← Main game logic
│   └── game/
│       ├── Player.js        ← Player movement
│       ├── Camera.js        ← Camera follow
│       └── InputManager.js  ← Keyboard controls
├── index.html               ← UI and styling
├── package.json             ← Dependencies
├── vite.config.js           ← Build config
├── START_HERE.txt           ← Quick start (this file)
├── README.md                ← Full documentation
├── NO_API_KEY_NEEDED.md     ← Why no tokens needed!
├── CUSTOMIZATION.md         ← Customization guide
├── DEPLOYMENT.md            ← Deploy online
└── LICENSE                  ← MIT License
```

---

**Happy exploring! 🚀**

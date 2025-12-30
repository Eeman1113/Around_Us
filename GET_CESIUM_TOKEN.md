# 🔑 Get Your FREE Cesium Token (2 Minutes)

The simulator is stuck on "Loading..." because you need a Cesium Ion token. Here's how to get one **FREE**:

## 🚀 Quick Steps

### 1. Sign Up (1 minute)
Go to: **https://ion.cesium.com/signup**

- Enter your email
- Create password
- Click "Create Account"
- ✅ **No credit card required!**

### 2. Verify Email (30 seconds)
- Check your email inbox
- Click the verification link
- You'll be logged into Cesium Ion

### 3. Get Your Token (30 seconds)
- Go to: **https://ion.cesium.com/tokens**
- You'll see your "Default" token
- Click the **copy icon** next to it
- Token looks like: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

### 4. Add Token to Simulator (30 seconds)
1. Open `src/main.js` in a text editor
2. Find line 11: `Cesium.Ion.defaultAccessToken = 'YOUR_TOKEN_HERE';`
3. Replace `YOUR_TOKEN_HERE` with your copied token
4. Save the file
5. Refresh your browser!

## 📋 Example

**Before:**
```javascript
Cesium.Ion.defaultAccessToken = 'YOUR_TOKEN_HERE';
```

**After:**
```javascript
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5N2U2MjcwOS00MDY1LTQxYjEtYjZjMy00YTU0ZTg1YmFjMzgiLCJpZCI6OTYyMCwic2NvcGVzIjpbImFzbCIsImFzciIsImdjIl0sImlhdCI6MTU2Mjg2NjI3M30.9efUrgZr-7_14pHQCGqfuHp_21LnAcM8q1ocb7CyQ3s';
```

## ✅ What You Get (FREE!)

- 50,000 tile requests per month
- 3D terrain worldwide
- 3D buildings globally
- Photorealistic imagery
- **No credit card ever needed!**

## 💡 That's More Than Enough!

50,000 requests = **20+ hours** of flying per month!

For this simulator, you'll never hit the limit unless you're flying ALL day, every day.

## 🆘 Still Stuck?

### Token Not Working?
1. Make sure you copied the ENTIRE token (it's long!)
2. Make sure there are no extra spaces
3. Token should be wrapped in quotes: `'your-token-here'`

### Still Getting Errors?
1. Open browser console (F12)
2. Look for red error messages
3. Most common: "Invalid access token" = token not copied correctly

### Need Help?
- Check browser console for errors
- Make sure you saved `src/main.js`
- Try `npm install` again
- Restart dev server: `npm run dev`

## 🎯 Once It Works

You'll see:
- Real 3D terrain loading
- 3D buildings appearing
- Your aircraft spawning
- Flight controls working!

## 📊 Free Tier Limits

You get monthly:
- ✅ 50,000 map tile requests
- ✅ 50,000 geocoding requests  
- ✅ 5 GB asset storage
- ✅ Full API access

**You'll only use the map tiles for flying - plenty!**

## 🔐 Is My Token Secure?

Your token is meant to be used in web apps! It's safe to use in this simulator. Cesium tracks usage per token to enforce limits, but your FREE tier is more than enough.

If you're worried:
- You can set domain restrictions in Cesium Ion
- You can regenerate tokens anytime
- Free tier can't cost you money

---

## 🛫 Ready?

1. Get token: https://ion.cesium.com/tokens
2. Add to `src/main.js` line 11
3. Refresh browser
4. **FLY!** ✈️

**Total time: 2 minutes** ⏱️

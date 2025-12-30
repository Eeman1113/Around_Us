# 🗺️ Getting Your Mapbox Token

This game uses Mapbox to display the 3D world. You need a free Mapbox account to get an access token.

## Step-by-Step Guide

### 1. Sign Up for Mapbox (FREE)

1. Go to [https://www.mapbox.com/](https://www.mapbox.com/)
2. Click "Sign up" in the top right corner
3. Create a free account (you can use your email or GitHub)
4. Verify your email address

### 2. Get Your Access Token

1. After signing in, you'll be on your dashboard
2. Go to [https://account.mapbox.com/access-tokens/](https://account.mapbox.com/access-tokens/)
3. You'll see your "Default public token" - this is what you need!
4. Click the copy icon next to the token

### 3. Add Token to the Game

1. Open the file: `src/main.js`
2. Find this line near the top:
   ```javascript
   mapboxgl.accessToken = 'pk.eyJ1IjoiZXhhbXBsZSIsImEiOiJjbGV4YW1wbGUifQ.example';
   ```
3. Replace the example token with your token:
   ```javascript
   mapboxgl.accessToken = 'YOUR_TOKEN_HERE';
   ```
4. Save the file

### 4. Start the Game

```bash
npm run dev
```

## Important Notes

- ✅ The free tier includes **50,000 map loads per month** - more than enough for personal use!
- ✅ No credit card required for the free tier
- ✅ Your token is public and safe to use in web applications
- ✅ Mapbox has usage limits, but you won't hit them with normal use

## Token Security

Your public token is meant to be public (hence the name). However:

- Don't share tokens that have write/admin permissions
- You can restrict tokens to specific domains if deploying publicly
- You can create multiple tokens for different projects

## Troubleshooting

### "Failed to load map" error
- Double-check you copied the entire token
- Make sure there are no extra spaces
- Verify your Mapbox account is activated

### Token starts with `pk.`
- This is correct! All public tokens start with `pk.`

### Still having issues?
- Check [Mapbox Documentation](https://docs.mapbox.com/help/getting-started/access-tokens/)
- Make sure your account is verified
- Try creating a new token

---

**That's it!** Once you have your token, you're ready to explore! 🎮

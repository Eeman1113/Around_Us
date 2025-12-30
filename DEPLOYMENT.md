# 🚀 Deployment Guide

Want to share your game with the world? Here's how to deploy it online for free!

## Option 1: Vercel (Recommended - Easiest)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Build your game:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to your Vercel account (create one if needed)
   - Answer the setup questions (defaults are usually fine)
   - Your game will be live in seconds!

4. **Your game is now online!** Vercel will give you a URL like:
   `https://your-game.vercel.app`

### Continuous Deployment
If you push to GitHub, Vercel can auto-deploy on every commit:
1. Go to vercel.com
2. Import your GitHub repository
3. Vercel will automatically build and deploy on every push!

---

## Option 2: Netlify

1. **Build your game:**
   ```bash
   npm run build
   ```

2. **Deploy via Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy
   ```

3. **Or use drag-and-drop:**
   - Go to [netlify.com/drop](https://app.netlify.com/drop)
   - Drag your `dist` folder onto the page
   - Done! Your game is live

---

## Option 3: GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to "Pages"
   - Select `gh-pages` branch
   - Your game will be at: `https://yourusername.github.io/your-repo`

---

## Option 4: Static Hosting (Surge, Firebase, etc.)

### Surge
```bash
npm install -g surge
npm run build
cd dist
surge
```

### Firebase
```bash
npm install -g firebase-tools
npm run build
firebase init hosting
firebase deploy
```

---

## Important Notes

### No API Keys Needed!
- This app uses free OpenStreetMap tiles
- No tokens, no rate limits, no tracking
- Deploy anywhere without worrying about API costs!

### Custom Domain
Most hosting services allow custom domains:
1. Buy a domain (namecheap.com, google domains, etc.)
2. Follow your hosting provider's docs to connect it
3. Usually involves updating DNS settings

### Performance Tips
- The build command (`npm run build`) optimizes your game
- Gzip is usually enabled automatically by hosting services
- Consider using a CDN if you get lots of traffic

---

## Troubleshooting

### Build fails
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 14+)
- Clear cache: `rm -rf node_modules && npm install`

### Game doesn't work after deployment
- Check browser console for errors
- Make sure the build was successful
- Verify map tiles are loading

### Performance Tips
- The build command optimizes your game automatically
- Gzip is usually enabled by hosting services
- No API rate limits to worry about!

---

## Sharing Your Game

Once deployed, share your game:
- Post the URL on social media
- Add it to your portfolio
- Share with friends and family
- Submit to game directories

**Have fun sharing your creation!** 🎮🌍

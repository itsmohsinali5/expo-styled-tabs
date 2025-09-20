# Publishing Guide for expo-styled-tabs

This guide will help you publish the `expo-styled-tabs` package to npm and set up live demos.

## 📋 Pre-Publication Checklist

### 1. Update Package Information
- [ ] Update `package.json` with your information:
  - Change `"author"` to your details
  - Update `"repository"` URLs to your GitHub repo
  - Update `"homepage"` URL
  - Update `"bugs"` URL

### 2. Update README Links
- [ ] Replace `yourusername` with your actual GitHub username in README.md
- [ ] Update all GitHub URLs to point to your repository
- [ ] Update email addresses

### 3. Test the Package
- [ ] Run `npm install` to ensure all dependencies are correct
- [ ] Test the demo with `npm run demo`
- [ ] Verify all examples work correctly

## 🚀 Publishing Steps

### 1. Login to npm
```bash
npm login
```

### 2. Check Package Name Availability
```bash
npm view expo-styled-tabs
```
If the package exists, you'll need to choose a different name or contact the owner.

### 3. Build and Test
```bash
npm run build
```

### 4. Publish to npm
```bash
npm publish
```

### 5. Verify Publication
```bash
npm view expo-styled-tabs
```

## 🎯 Setting Up Live Demos

### Option 1: Expo Snack (Recommended)

1. **Create Expo Snack Account**
   - Go to [snack.expo.dev](https://snack.expo.dev)
   - Sign up/Login with GitHub

2. **Create New Snack**
   - Click "Create new Snack"
   - Copy your `App.js` content
   - Add the package: `expo-styled-tabs`

3. **Configure Snack**
   ```json
   {
     "dependencies": {
       "expo-styled-tabs": "latest",
       "@expo/vector-icons": "~14.0.0",
       "@react-navigation/native": "~6.0.6",
       "@react-navigation/bottom-tabs": "~6.0.9",
       "@react-navigation/material-top-tabs": "~6.0.6",
       "react-native-safe-area-context": "~4.10.0",
       "react-native-screens": "~3.31.0"
     }
   }
   ```

4. **Get Snack URL**
   - Save the Snack
   - Copy the shareable URL
   - Update README.md with the URL

### Option 2: GitHub Pages

1. **Create Demo Repository**
   ```bash
   git clone https://github.com/yourusername/expo-styled-tabs.git
   cd expo-styled-tabs
   ```

2. **Set up Expo Web**
   ```bash
   npx create-expo-app --template blank-typescript demo-web
   cd demo-web
   npm install expo-styled-tabs
   ```

3. **Deploy to GitHub Pages**
   - Follow Expo's web deployment guide
   - Update README with demo URL

### Option 3: CodeSandbox

1. **Create CodeSandbox**
   - Go to [codesandbox.io](https://codesandbox.io)
   - Create new React Native project
   - Add `expo-styled-tabs` dependency

2. **Configure for Mobile**
   - Use React Native Web template
   - Add your App.js content
   - Get shareable URL

## 📱 Demo App Setup

Your `App.js` is already set up as a comprehensive demo with:

- ✅ Interactive controls for all customization options
- ✅ Real-time preview of changes
- ✅ All variants and themes showcased
- ✅ Code generation feature
- ✅ Beautiful UI with proper styling

### Demo Features:
- **Live Controls**: Change position, variant, theme in real-time
- **Color Customization**: Interactive color pickers
- **Size Controls**: Sliders for height, padding, margins
- **Shadow Controls**: Customize shadows and elevation
- **Animation Settings**: Enable/disable animations
- **Code Generation**: Show generated code for current settings

## 🔗 Update README with Live Demo

Replace the placeholder URLs in README.md:

```markdown
## 🚀 Live Demo

**[Try it on Expo Snack](https://snack.expo.dev/@YOUR_USERNAME/expo-styled-tabs-demo)** - Interactive demo with all customization options

**[View Demo Source Code](https://github.com/YOUR_USERNAME/expo-styled-tabs/blob/main/App.js)** - Complete demo implementation
```

## 📈 Post-Publication

### 1. Create GitHub Release
```bash
git tag v1.0.0
git push origin v1.0.0
```

### 2. Share on Social Media
- Twitter: Share the package with #ReactNative #Expo
- Reddit: Post in r/reactnative
- Discord: Share in React Native communities

### 3. Monitor Usage
- Check npm download stats
- Monitor GitHub stars and forks
- Respond to issues and PRs

## 🛠️ Maintenance

### Version Updates
1. Update version in `package.json`
2. Update `CHANGELOG.md`
3. Create GitHub release
4. Publish to npm

### Bug Fixes
1. Fix issues in development
2. Test thoroughly
3. Update version (patch)
4. Publish update

### New Features
1. Add features in development
2. Update documentation
3. Update version (minor/major)
4. Publish update

## 📞 Support

- **GitHub Issues**: For bug reports and feature requests
- **GitHub Discussions**: For questions and community support
- **Email**: Direct support for urgent issues

## 🎉 Success Metrics

Track these metrics to measure success:
- npm download count
- GitHub stars
- GitHub forks
- Issues and PRs
- Community engagement
- Demo usage

---

**Good luck with your publication! 🚀**

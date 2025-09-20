# expo-styled-tabs

[![npm version](https://badge.fury.io/js/expo-styled-tabs.svg)](https://badge.fury.io/js/expo-styled-tabs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Expo](https://img.shields.io/badge/Expo-~54.0.9-blue.svg)](https://expo.dev/)

A highly customizable and feature-rich tab navigation component for React Native (Expo) applications. Built with React Navigation under the hood, it provides smooth animations, multiple styling variants, and comprehensive theming support.

## 🚀 Live Demo

### ▶️ Click the thumbnail below to play the demo
[![Watch the demo](https://img.youtube.com/vi/vJP888ZDQMo/0.jpg)](https://youtube.com/shorts/vJP888ZDQMo?feature=share)

<!-- **[View Demo Source Code](https://github.com/itsmohsinali5/expo-styled-tabs/blob/main/App.js)** - Complete demo implementation -->

## ✨ Features

- 🎨 **Multiple Variants**: Basic, Icons-only, Rounded pills, and Glassmorphism effects
- 📱 **Dual Positioning**: Support for both bottom and top tab bars
- 🎭 **Comprehensive Theming**: Light, dark, glass themes with auto-detection
- 🔧 **Fully Customizable**: 40+ customization props for complete control
- 📦 **Expo Ready**: Works out-of-the-box in Expo managed workflow
- 🛡️ **Safe Area Support**: Proper handling for iOS notch and Android compatibility
- ⚡ **Smooth Animations**: Built on React Navigation for fluid transitions
- 🎯 **TypeScript Ready**: Full TypeScript support (coming soon)
- 📱 **Cross Platform**: Works on iOS, Android, and Web

## 📦 Installation

```bash
npm install expo-styled-tabs
# or
yarn add expo-styled-tabs
```

### Peer Dependencies

Make sure you have these dependencies installed:

```bash
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/material-top-tabs react-native-safe-area-context react-native-screens @expo/vector-icons
```

## 🚀 Quick Start

```jsx
import React from 'react';
import CustomTabs from 'expo-styled-tabs';

// Your screen components
const HomeScreen = () => <Text>Home</Text>;
const ProfileScreen = () => <Text>Profile</Text>;

export default function App() {
  const tabs = [
    { name: "Home", component: HomeScreen, icon: "home" },
    { name: "Profile", component: ProfileScreen, icon: "user" },
  ];

  return (
    <CustomTabs
      position="bottom"
      variant="basic"
      tabs={tabs}
    />
  );
}
```

## 🎨 Variants

### Basic
```jsx
<CustomTabs variant="basic" tabs={tabs} />
```

### Icons Only
```jsx
<CustomTabs variant="icons" tabs={tabs} />
```

### Rounded Pills
```jsx
<CustomTabs variant="rounded" tabs={tabs} />
```

### Glassmorphism
```jsx
<CustomTabs variant="glass" theme="glass" tabs={tabs} />
```

## 📍 Positioning

### Bottom Tabs
```jsx
<CustomTabs position="bottom" tabs={tabs} />
```

### Top Tabs
```jsx
<CustomTabs position="top" tabs={tabs} />
```

## 🎭 Themes

### Auto Theme (System)
```jsx
<CustomTabs theme="auto" tabs={tabs} />
```

### Light Theme
```jsx
<CustomTabs theme="light" tabs={tabs} />
```

### Dark Theme
```jsx
<CustomTabs theme="dark" tabs={tabs} />
```

### Glass Theme
```jsx
<CustomTabs theme="glass" tabs={tabs} />
```

## 🔧 Customization

### Individual Props
```jsx
<CustomTabs
  tabs={tabs}
  // Colors
  activeColor="#FF6B6B"
  inactiveColor="#4ECDC4"
  backgroundColor="rgba(255, 255, 255, 0.9)"
  textColor="#2C3E50"
  borderColor="#BDC3C7"
  
  // Sizes
  height={60}
  borderRadius={30}
  fontSize={14}
  iconSize={28}
  padding={16}
  margin={8}
  
  // Shadows
  shadowColor="#FF6B6B"
  shadowOpacity={0.3}
  shadowRadius={12}
  elevation={8}
  
  // Animations
  enableAnimations={true}
  animationDuration={300}
/>
```

### Object-Based Customization
```jsx
<CustomTabs
  tabs={tabs}
  customColors={{
    active: '#FF6B6B',
    inactive: '#4ECDC4',
    background: 'rgba(255, 255, 255, 0.9)',
    text: '#2C3E50',
    border: '#BDC3C7'
  }}
  customSizes={{
    height: 60,
    borderRadius: 30,
    fontSize: 14,
    iconSize: 28,
    padding: 16
  }}
  customSpacing={{
    containerPadding: 8,
    containerMargin: 20,
    tabSpacing: 6
  }}
/>
```

### Advanced Styling
```jsx
<CustomTabs
  tabs={tabs}
  tabStyle={{
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 20
  }}
  activeTabStyle={{
    backgroundColor: '#FF6B6B',
    transform: [{ scale: 1.05 }],
    shadowColor: '#FF6B6B',
    shadowOpacity: 0.3
  }}
  inactiveTabStyle={{
    backgroundColor: 'transparent',
    opacity: 0.7
  }}
  containerStyle={{
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 25,
    marginHorizontal: 20
  }}
  textStyle={{
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }}
  iconStyle={{
    marginBottom: 2
  }}
/>
```

## 📚 API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Array` | `[]` | Array of tab objects with name, component, icon, iconFamily |
| `position` | `'top' \| 'bottom'` | `'bottom'` | Position of the tab bar |
| `variant` | `'basic' \| 'icons' \| 'rounded' \| 'glass'` | `'basic'` | Visual variant of the tabs |
| `theme` | `'light' \| 'dark' \| 'glass' \| 'auto'` | `'light'` | Color theme |
| `style` | `StyleProp<ViewStyle>` | `{}` | Custom container style |

### Color Customization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backgroundColor` | `string` | Theme-based | Container background color |
| `activeColor` | `string` | Theme-based | Active tab color |
| `inactiveColor` | `string` | Theme-based | Inactive tab color |
| `textColor` | `string` | Theme-based | Text color |
| `borderColor` | `string` | Theme-based | Border color |
| `customColors` | `object` | `{}` | Object with all color overrides |

### Size Customization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `number` | `50` | Tab bar height |
| `borderRadius` | `number` | `25` | Border radius for rounded variants |
| `fontSize` | `number` | `11-12` | Text font size |
| `iconSize` | `number` | `24` | Icon size |
| `padding` | `number` | `8-12` | Tab padding |
| `margin` | `number` | `4` | Tab margins |
| `customSizes` | `object` | `{}` | Object with all size overrides |

### Shadow Customization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `shadowColor` | `string` | `'#000'` | Shadow color |
| `shadowOpacity` | `number` | `0.1` | Shadow opacity |
| `shadowRadius` | `number` | `8` | Shadow blur radius |
| `elevation` | `number` | `4` | Android elevation |

### Animation Customization

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `enableAnimations` | `boolean` | `true` | Enable/disable animations |
| `animationDuration` | `number` | `200` | Animation duration in ms |

### Advanced Styling

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabStyle` | `StyleProp<ViewStyle>` | `{}` | Style for all tabs |
| `activeTabStyle` | `StyleProp<ViewStyle>` | `{}` | Style for active tab only |
| `inactiveTabStyle` | `StyleProp<ViewStyle>` | `{}` | Style for inactive tabs only |
| `containerStyle` | `StyleProp<ViewStyle>` | `{}` | Style for the tab container |
| `textStyle` | `StyleProp<TextStyle>` | `{}` | Style for tab text |
| `iconStyle` | `StyleProp<TextStyle>` | `{}` | Style for tab icons |

### Tab Object Structure

```typescript
interface Tab {
  name: string;                    // Tab display name
  component: React.ComponentType;  // Screen component
  icon?: string;                   // Icon name (Ionicons)
  iconFamily?: string;             // Icon family (default: 'Ionicons')
}
```

## 🎯 Examples

### Complete Customization Example
```jsx
import React from 'react';
import CustomTabs from 'expo-styled-tabs';

const MyApp = () => {
  const tabs = [
    { 
      name: "Home", 
      component: HomeScreen, 
      icon: "home-outline",
      iconFamily: "Ionicons"
    },
    { 
      name: "Search", 
      component: SearchScreen, 
      icon: "search",
      iconFamily: "Ionicons"
    },
    { 
      name: "Profile", 
      component: ProfileScreen, 
      icon: "person-outline",
      iconFamily: "Ionicons"
    },
  ];

  return (
    <CustomTabs
      position="bottom"
      variant="rounded"
      theme="light"
      activeColor="#FF6B6B"
      inactiveColor="#4ECDC4"
      backgroundColor="rgba(255, 255, 255, 0.95)"
      height={65}
      borderRadius={32}
      fontSize={14}
      iconSize={28}
      padding={16}
      shadowColor="#FF6B6B"
      shadowOpacity={0.3}
      shadowRadius={12}
      elevation={8}
      enableAnimations={true}
      animationDuration={300}
      activeTabStyle={{
        transform: [{ scale: 1.05 }],
        shadowColor: '#FF6B6B',
        shadowOpacity: 0.4
      }}
      containerStyle={{
        marginHorizontal: 20,
        paddingVertical: 8
      }}
    />
  );
};
```

## 🛠️ Development

### Running the Demo
```bash
# Clone the repository
git clone https://github.com/itsmohsinali5/expo-styled-tabs.git
cd expo-styled-tabs

# Install dependencies
npm install

# Start the demo
npm run demo
```

### Building
```bash
npm run build
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

- 📧 Email: itsmohsinali5@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/itsmohsinali5/expo-styled-tabs/issues)
<!-- - 💬 Discussions: [GitHub Discussions](https://github.com/itsmohsinali5/expo-styled-tabs/discussions) -->

## 🙏 Acknowledgments

- Built with [React Navigation](https://reactnavigation.org/)
- Icons by [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- Inspired by modern mobile design patterns

---

Made with ❤️ for the React Native community

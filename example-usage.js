// Comprehensive usage examples of expo-styled-tabs CustomTabs component
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import CustomTabs from './src/components/CustomTabs';

// Example screen components
const HomeScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Home Screen</Text>
    <Text>Welcome to the home screen!</Text>
  </View>
);

const SearchScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Search Screen</Text>
    <Text>Search for anything you want!</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Profile Screen</Text>
    <Text>Manage your profile settings here.</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Settings Screen</Text>
    <Text>Configure your app preferences.</Text>
  </View>
);

// Basic tabs configuration
const basicTabs = [
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
  { 
    name: "Settings", 
    component: SettingsScreen, 
    icon: "settings-outline",
    iconFamily: "Ionicons"
  },
];

// ============================================================================
// BASIC USAGE EXAMPLES
// ============================================================================

// 1. Basic Usage - Default styling
export const BasicExample = () => {
  return (
    <CustomTabs
      tabs={basicTabs}
      position="bottom"
      variant="basic"
      theme="light"
    />
  );
};

// 2. Different Positions
export const PositionExamples = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Bottom Position</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          position="bottom"
          variant="basic"
          theme="light"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Top Position</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          position="top"
          variant="basic"
          theme="light"
        />
      </View>
    </ScrollView>
  );
};

// 3. Different Variants
export const VariantExamples = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Basic Variant</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="basic"
          theme="light"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Icons Only</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="icons"
          theme="light"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Rounded Pills</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Glassmorphism</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="glass"
          theme="glass"
        />
      </View>
    </ScrollView>
  );
};

// 4. Different Themes
export const ThemeExamples = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Light Theme</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Dark Theme</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="dark"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Glass Theme</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="glass"
        />
      </View>
    </ScrollView>
  );
};

// ============================================================================
// CUSTOMIZATION EXAMPLES - INDIVIDUAL PROPS
// ============================================================================

// 5. Color Customization
export const ColorCustomizationExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Colors</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          activeColor="#FF6B6B"
          inactiveColor="#4ECDC4"
          backgroundColor="rgba(255, 255, 255, 0.9)"
          textColor="#2C3E50"
          borderColor="#BDC3C7"
        />
      </View>
      
      <Text style={styles.sectionTitle}>Custom Glass Colors</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="glass"
          theme="glass"
          activeColor="rgba(255, 107, 107, 0.8)"
          inactiveColor="rgba(78, 205, 196, 0.6)"
          backgroundColor="rgba(255, 255, 255, 0.1)"
        />
      </View>
    </ScrollView>
  );
};

// 6. Size Customization
export const SizeCustomizationExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Sizes</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          height={70}
          borderRadius={35}
          fontSize={16}
          iconSize={32}
          padding={20}
          margin={8}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Compact Sizes</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          height={45}
          borderRadius={20}
          fontSize={10}
          iconSize={20}
          padding={8}
          margin={2}
        />
      </View>
    </ScrollView>
  );
};

// 7. Shadow Customization
export const ShadowCustomizationExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Shadows</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          shadowColor="#FF6B6B"
          shadowOpacity={0.4}
          shadowRadius={15}
          elevation={12}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Subtle Shadows</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          shadowColor="#000000"
          shadowOpacity={0.1}
          shadowRadius={5}
          elevation={3}
        />
      </View>
    </ScrollView>
  );
};

// ============================================================================
// CUSTOMIZATION EXAMPLES - OBJECT-BASED CUSTOMIZATION
// ============================================================================

// 8. Custom Colors Object
export const CustomColorsObjectExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Colors Object</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          customColors={{
            active: '#FF6B6B',
            inactive: '#4ECDC4',
            background: 'rgba(255, 255, 255, 0.9)',
            text: '#2C3E50',
            border: '#BDC3C7'
          }}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Dark Custom Colors</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="dark"
          customColors={{
            active: '#00D4AA',
            inactive: '#8E8E93',
            background: '#1C1C1E',
            text: '#FFFFFF',
            border: '#38383A'
          }}
        />
      </View>
    </ScrollView>
  );
};

// 9. Custom Sizes Object
export const CustomSizesObjectExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Sizes Object</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          customSizes={{
            height: 65,
            borderRadius: 32,
            fontSize: 15,
            iconSize: 30,
            padding: 18,
            margin: 6
          }}
        />
      </View>
    </ScrollView>
  );
};

// 10. Custom Spacing Object
export const CustomSpacingObjectExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Spacing Object</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          customSpacing={{
            containerPadding: 10,
            containerMargin: 25,
            tabSpacing: 8
          }}
        />
      </View>
    </ScrollView>
  );
};

// ============================================================================
// ADVANCED STYLING EXAMPLES
// ============================================================================

// 11. Advanced Style Objects
export const AdvancedStyleExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Advanced Custom Styling</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          tabStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 20,
            borderWidth: 1,
            borderColor: 'rgba(0, 0, 0, 0.1)'
          }}
          activeTabStyle={{
            backgroundColor: '#FF6B6B',
            transform: [{ scale: 1.05 }],
            shadowColor: '#FF6B6B',
            shadowOpacity: 0.3,
            shadowRadius: 8,
            elevation: 8
          }}
          inactiveTabStyle={{
            backgroundColor: 'transparent',
            opacity: 0.7
          }}
          containerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 25,
            marginHorizontal: 20,
            paddingVertical: 8
          }}
          textStyle={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: 0.5
          }}
          iconStyle={{
            marginBottom: 2
          }}
        />
      </View>
    </ScrollView>
  );
};

// 12. Glass Theme with Custom Styling
export const GlassCustomStylingExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Glass Theme with Custom Styling</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="glass"
          theme="glass"
          customColors={{
            active: 'rgba(255, 255, 255, 0.4)',
            inactive: 'rgba(255, 255, 255, 0.2)',
            background: 'rgba(255, 255, 255, 0.1)',
            text: '#FFFFFF',
            border: 'rgba(255, 255, 255, 0.3)'
          }}
          customSizes={{
            height: 60,
            borderRadius: 20,
            fontSize: 13,
            iconSize: 26,
            padding: 14
          }}
          activeTabStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.4)',
            borderWidth: 2,
            borderColor: 'rgba(255, 255, 255, 0.6)',
            transform: [{ scale: 1.02 }]
          }}
          inactiveTabStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            borderColor: 'rgba(255, 255, 255, 0.2)'
          }}
          containerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            borderRadius: 25,
            marginHorizontal: 20,
            paddingVertical: 6
          }}
        />
      </View>
    </ScrollView>
  );
};

// 13. Animation Customization
export const AnimationCustomizationExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Custom Animation Duration</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          animationDuration={500}
          enableAnimations={true}
        />
      </View>
      
      <Text style={styles.sectionTitle}>No Animations</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          variant="rounded"
          theme="light"
          enableAnimations={false}
        />
      </View>
    </ScrollView>
  );
};

// ============================================================================
// COMPLETE CUSTOMIZATION EXAMPLE
// ============================================================================

// 14. Complete Customization Example
export const CompleteCustomizationExample = () => {
  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>Complete Customization</Text>
      <View style={styles.exampleContainer}>
        <CustomTabs
          tabs={basicTabs}
          position="bottom"
          variant="rounded"
          theme="light"
          // Individual color props
          activeColor="#E74C3C"
          inactiveColor="#3498DB"
          backgroundColor="rgba(255, 255, 255, 0.95)"
          textColor="#2C3E50"
          borderColor="#BDC3C7"
          // Individual size props
          height={65}
          borderRadius={32}
          fontSize={14}
          iconSize={28}
          padding={16}
          margin={6}
          // Shadow props
          shadowColor="#E74C3C"
          shadowOpacity={0.3}
          shadowRadius={12}
          elevation={8}
          // Animation props
          animationDuration={300}
          enableAnimations={true}
          // Advanced styling
          tabStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 25
          }}
          activeTabStyle={{
            backgroundColor: '#E74C3C',
            transform: [{ scale: 1.05 }],
            shadowColor: '#E74C3C',
            shadowOpacity: 0.4,
            shadowRadius: 10,
            elevation: 10
          }}
          inactiveTabStyle={{
            backgroundColor: 'transparent',
            opacity: 0.8
          }}
          containerStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: 30,
            marginHorizontal: 20,
            paddingVertical: 8
          }}
          textStyle={{
            fontWeight: '600',
            letterSpacing: 0.3
          }}
          iconStyle={{
            marginBottom: 2
          }}
        />
      </View>
    </ScrollView>
  );
};

// ============================================================================
// STYLES
// ============================================================================

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F8F9FA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#2C3E50',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 16,
    color: '#2C3E50',
  },
  exampleContainer: {
    height: 200,
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

// ============================================================================
// USAGE DOCUMENTATION
// ============================================================================

/*
CUSTOMTABS COMPONENT - COMPLETE USAGE GUIDE
==========================================

BASIC PROPS:
- tabs: Array of tab objects with name, component, icon, iconFamily
- position: 'top' | 'bottom' (default: 'bottom')
- variant: 'basic' | 'icons' | 'rounded' | 'glass' (default: 'basic')
- theme: 'light' | 'dark' | 'glass' | 'auto' (default: 'light')
- style: Custom container style object

INDIVIDUAL CUSTOMIZATION PROPS:
- backgroundColor: Override container background color
- activeColor: Override active tab color
- inactiveColor: Override inactive tab color
- textColor: Override text color
- borderColor: Override border color
- height: Set custom navbar height
- borderRadius: Set custom border radius
- fontSize: Set custom text size
- iconSize: Set custom icon size
- padding: Set custom tab padding
- margin: Set custom tab margins
- shadowColor: Set custom shadow color
- shadowOpacity: Set shadow opacity
- shadowRadius: Set shadow blur radius
- elevation: Set Android elevation

OBJECT-BASED CUSTOMIZATION:
- customColors: { active, inactive, background, text, border }
- customSizes: { height, borderRadius, fontSize, iconSize, padding, margin }
- customSpacing: { containerPadding, containerMargin, tabSpacing }
- customAnimations: { duration, enabled }

ADVANCED STYLING:
- tabStyle: Style for all tabs
- activeTabStyle: Style for active tab only
- inactiveTabStyle: Style for inactive tabs only
- containerStyle: Style for the tab container
- textStyle: Style for tab text
- iconStyle: Style for tab icons

ANIMATION PROPS:
- animationDuration: Animation duration in milliseconds (default: 200)
- enableAnimations: Enable/disable animations (default: true)

EXAMPLES:
1. Basic usage: <CustomTabs tabs={tabs} />
2. Custom colors: <CustomTabs tabs={tabs} activeColor="#FF6B6B" />
3. Custom sizes: <CustomTabs tabs={tabs} height={60} borderRadius={30} />
4. Object customization: <CustomTabs tabs={tabs} customColors={{...}} />
5. Advanced styling: <CustomTabs tabs={tabs} activeTabStyle={{...}} />

All props are optional and work together for maximum customization flexibility!
*/
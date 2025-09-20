import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTabs from './src/components/CustomTabs';
import { HomeScreen, SearchScreen, ProfileScreen, SettingsScreen } from './src/components/ExampleScreens';
// import CustomTabs from 'expo-styled-tabs';
export default function App() {
  const [currentVariant, setCurrentVariant] = useState('basic');
  const [currentPosition, setCurrentPosition] = useState('bottom');
  const [currentTheme, setCurrentTheme] = useState('auto');

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
    { 
      name: "Settings", 
      component: SettingsScreen, 
      icon: "settings-outline",
      iconFamily: "Ionicons"
    },
  ];

  const variants = [
    { key: 'basic', label: 'Basic' },
    { key: 'icons', label: 'Icons Only' },
    { key: 'rounded', label: 'Rounded Pills' },
    { key: 'glass', label: 'Glassmorphism' },
  ];

  const positions = [
    { key: 'bottom', label: 'Bottom' },
    { key: 'top', label: 'Top' },
  ];

  const themes = [
    { key: 'auto', label: 'Auto' },
    { key: 'light', label: 'Light' },
    { key: 'dark', label: 'Dark' },
    { key: 'glass', label: 'Glass' },
  ];

  const showDemo = () => {
    Alert.alert(
      "Demo Mode",
      "This is a demo of the expo-styled-tabs package. The tabs below show different configurations.",
      [{ text: "OK" }]
    );
  };

  const getBackgroundStyle = () => {
    if (currentTheme === 'glass' || currentVariant === 'glass') {
      return {
        backgroundColor: '#667eea',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      };
    }
    if (currentTheme === 'dark') {
      return {
        backgroundColor: '#1C1C1E',
      };
    }
    return {
      backgroundColor: '#F2F2F7',
    };
  };

  return (
    <View style={[styles.container, getBackgroundStyle()]}>
      <StatusBar style="auto" />
      
      {/* Demo Controls */}
      <SafeAreaView style={[
        styles.controlsContainer,
        (currentTheme === 'glass' || currentVariant === 'glass') && styles.glassControlsContainer
      ]}>
        <Text style={[
          styles.title,
          (currentTheme === 'glass' || currentVariant === 'glass') && styles.glassTitle
        ]}>expo-styled-tabs Demo</Text>
        
        <ScrollView style={styles.controls} showsVerticalScrollIndicator={false}>
          {/* Variant Selection */}
          <View style={styles.controlSection}>
            <Text style={[
              styles.controlLabel,
              (currentTheme === 'glass' || currentVariant === 'glass') && styles.glassControlLabel
            ]}>Variant:</Text>
            <View style={styles.controlButtonsContainer}>
              {variants.map((variant) => (
                <TouchableOpacity
                  key={variant.key}
                  style={[
                    styles.controlButton,
                    currentVariant === variant.key && styles.controlButtonActive
                  ]}
                  onPress={() => setCurrentVariant(variant.key)}
                >
                  <Text style={[
                    styles.controlButtonText,
                    currentVariant === variant.key && styles.controlButtonTextActive
                  ]}>
                    {variant.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Position Selection */}
          <View style={styles.controlSection}>
            <Text style={[
              styles.controlLabel,
              (currentTheme === 'glass' || currentVariant === 'glass') && styles.glassControlLabel
            ]}>Position:</Text>
            <View style={styles.controlButtonsContainer}>
              {positions.map((position) => (
                <TouchableOpacity
                  key={position.key}
                  style={[
                    styles.controlButton,
                    currentPosition === position.key && styles.controlButtonActive
                  ]}
                  onPress={() => setCurrentPosition(position.key)}
                >
                  <Text style={[
                    styles.controlButtonText,
                    currentPosition === position.key && styles.controlButtonTextActive
                  ]}>
                    {position.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Theme Selection */}
          <View style={styles.controlSection}>
            <Text style={[
              styles.controlLabel,
              (currentTheme === 'glass' || currentVariant === 'glass') && styles.glassControlLabel
            ]}>Theme:</Text>
            <View style={styles.controlButtonsContainer}>
              {themes.map((theme) => (
                <TouchableOpacity
                  key={theme.key}
                  style={[
                    styles.controlButton,
                    currentTheme === theme.key && styles.controlButtonActive
                  ]}
                  onPress={() => setCurrentTheme(theme.key)}
                >
                  <Text style={[
                    styles.controlButtonText,
                    currentTheme === theme.key && styles.controlButtonTextActive
                  ]}>
                    {theme.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.demoButton} onPress={showDemo}>
            <Text style={styles.demoButtonText}>Show Demo Info</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {/* CustomTabs Component */}
      <View style={styles.tabsContainer}>
        <CustomTabs
          position={currentPosition}
          variant={currentVariant}
          theme={currentTheme}
          tabs={tabs}
          style={styles.tabs}
          // Customization examples (uncomment to try):
          // height={60}
          // activeColor="#FF6B6B"
          // inactiveColor="#4ECDC4"
          // backgroundColor="rgba(255, 255, 255, 0.9)"
          // borderRadius={30}
          // fontSize={14}
          // iconSize={28}
          // padding={16}
          // margin={8}
          // shadowColor="#FF6B6B"
          // shadowOpacity={0.3}
          // shadowRadius={12}
          // elevation={8}
          // customColors={{
          //   active: '#FF6B6B',
          //   inactive: '#4ECDC4',
          //   background: 'rgba(255, 255, 255, 0.9)',
          //   text: '#2C3E50',
          //   border: '#BDC3C7'
          // }}
          // customSizes={{
          //   height: 60,
          //   borderRadius: 30,
          //   fontSize: 14,
          //   iconSize: 28,
          //   padding: 16
          // }}
          // customSpacing={{
          //   containerPadding: 8,
          //   containerMargin: 20,
          //   tabSpacing: 6
          // }}
          // tabStyle={{
          //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
          //   borderRadius: 20
          // }}
          // activeTabStyle={{
          //   backgroundColor: '#FF6B6B',
          //   transform: [{ scale: 1.05 }]
          // }}
          // inactiveTabStyle={{
          //   backgroundColor: 'transparent',
          //   opacity: 0.7
          // }}
          // containerStyle={{
          //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
          //   borderRadius: 25,
          //   marginHorizontal: 20
          // }}
          // textStyle={{
          //   fontWeight: 'bold',
          //   textTransform: 'uppercase'
          // }}
          // iconStyle={{
          //   marginBottom: 2
          // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#667eea',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  controlsContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  glassControlsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(20px)',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  glassTitle: {
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  controls: {
    marginBottom: 12,
    maxHeight: 200,
  },
  controlSection: {
    marginBottom: 16,
  },
  controlButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
    gap: 8,
  },
  controlLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  glassControlLabel: {
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  controlButton: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#F2F2F7',
    minWidth: 80,
    alignItems: 'center',
  },
  controlButtonActive: {
    backgroundColor: '#007AFF',
  },
  controlButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
  },
  controlButtonTextActive: {
    color: '#FFFFFF',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
  demoButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    shadowColor: '#34C759',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  demoButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  tabsContainer: {
    flex: 1,
  },
  tabs: {
    flex: 1,
  },
});

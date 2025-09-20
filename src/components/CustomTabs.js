import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const CustomTabs = ({ 
  tabs = [], 
  position = 'bottom',
  variant = 'basic',
  theme = 'light',
  style = {},
  // Customization props
  customColors = {},
  customSizes = {},
  customSpacing = {},
  customAnimations = {},
  // Individual customization options
  backgroundColor,
  activeColor,
  inactiveColor,
  textColor,
  borderColor,
  height,
  borderRadius,
  padding,
  margin,
  fontSize,
  iconSize,
  shadowColor,
  shadowOpacity,
  shadowRadius,
  elevation,
  // Animation options
  animationDuration = 200,
  enableAnimations = true,
  // Advanced styling
  tabStyle = {},
  activeTabStyle = {},
  inactiveTabStyle = {},
  containerStyle = {},
  textStyle = {},
  iconStyle = {},
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const getThemeColors = () => {
    let baseColors;
    switch (theme) {
      case 'dark':
        baseColors = {
          background: '#1C1C1E',
          text: '#FFFFFF',
          textSecondary: '#8E8E93',
          active: '#0A84FF',
          inactive: '#8E8E93',
          border: '#38383A',
        };
        break;
      case 'glass':
        baseColors = {
          background: 'rgba(255, 255, 255, 0.3)',
          text: '#FFFFFF',
          textSecondary: 'rgba(255, 255, 255, 0.95)',
          active: '#FFFFFF',
          inactive: 'rgba(255, 255, 255, 0.85)',
          border: 'rgba(255, 255, 255, 0.5)',
        };
        break;
      default: // light
        baseColors = {
          background: '#FFFFFF',
          text: '#000000',
          textSecondary: '#8E8E93',
          active: '#007AFF',
          inactive: '#8E8E93',
          border: '#C6C6C8',
        };
    }

    // Override with individual color props
    if (backgroundColor) baseColors.background = backgroundColor;
    if (activeColor) baseColors.active = activeColor;
    if (inactiveColor) baseColors.inactive = inactiveColor;
    if (textColor) baseColors.text = textColor;
    if (borderColor) baseColors.border = borderColor;

    // Override with custom colors object
    return { ...baseColors, ...customColors };
  };

  const colors = getThemeColors();

  const getCustomSizes = () => {
    const defaultSizes = {
      height: height || 50,
      borderRadius: borderRadius || (variant === 'rounded' ? 25 : 0),
      fontSize: fontSize || (variant === 'rounded' ? 11 : 12),
      iconSize: iconSize || 24,
      padding: padding || (variant === 'rounded' ? 12 : 8),
      margin: margin || (variant === 'rounded' ? 4 : 0),
    };
    return { ...defaultSizes, ...customSizes };
  };

  const getCustomSpacing = () => {
    const defaultSpacing = {
      containerPadding: 6,
      containerMargin: 16,
      tabSpacing: 4,
    };
    return { ...defaultSpacing, ...customSpacing };
  };

  const getCustomShadows = () => {
    return {
      shadowColor: shadowColor || '#000',
      shadowOpacity: shadowOpacity || 0.1,
      shadowRadius: shadowRadius || 8,
      elevation: elevation || 4,
    };
  };

  const sizes = getCustomSizes();
  const spacing = getCustomSpacing();
  const shadows = getCustomShadows();

  const renderTab = (tab, index) => {
    const isActive = activeTab === index;
    
    const getTabStyle = () => {
      const baseStyle = {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 8,
        ...tabStyle,
      };

      switch (variant) {
        case 'rounded':
          const isGlassTheme = theme === 'glass';
          const roundedStyle = {
            ...baseStyle,
            backgroundColor: isActive 
              ? (isGlassTheme ? 'rgba(255, 255, 255, 0.3)' : colors.active)
              : (isGlassTheme ? 'rgba(255, 255, 255, 0.1)' : 'transparent'),
            borderRadius: sizes.borderRadius,
            marginHorizontal: spacing.tabSpacing,
            marginVertical: spacing.tabSpacing,
            paddingVertical: 8,
            paddingHorizontal: sizes.padding,
            borderWidth: isGlassTheme ? (isActive ? 2 : 1) : 0,
            borderColor: isGlassTheme 
              ? (isActive ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0.2)')
              : 'transparent',
            shadowColor: shadows.shadowColor,
            shadowOffset: {
              width: 0,
              height: isActive ? 4 : 2,
            },
            shadowOpacity: isActive ? shadows.shadowOpacity * 3 : shadows.shadowOpacity,
            shadowRadius: isActive ? shadows.shadowRadius * 1.5 : shadows.shadowRadius,
            elevation: isActive ? shadows.elevation * 2 : shadows.elevation,
          };
          return isActive ? { ...roundedStyle, ...activeTabStyle } : { ...roundedStyle, ...inactiveTabStyle };
        case 'glass':
          return {
            ...baseStyle,
            backgroundColor: isActive ? 'rgba(255, 255, 255, 0.4)' : 'rgba(255, 255, 255, 0.15)',
            borderRadius: 16,
            marginHorizontal: 6,
            marginVertical: 6,
            borderWidth: isActive ? 2 : 1,
            borderColor: isActive ? 'rgba(255, 255, 255, 0.7)' : 'rgba(255, 255, 255, 0.4)',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: isActive ? 0.4 : 0.2,
            shadowRadius: 10,
            elevation: isActive ? 10 : 6,
          };
        default:
          return baseStyle;
      }
    };

    const getTextStyle = () => {
      const isGlassTheme = theme === 'glass';
      const baseStyle = {
        fontSize: sizes.fontSize,
        fontWeight: isActive ? '600' : '500',
        color: isActive 
          ? (variant === 'rounded' ? (isGlassTheme ? '#FFFFFF' : '#FFFFFF') : colors.active) 
          : (isGlassTheme && variant === 'rounded' ? 'rgba(255, 255, 255, 0.8)' : colors.inactive),
        textAlign: 'center',
        ...textStyle,
      };

      if (variant === 'icons') {
        return { ...baseStyle, marginTop: 4 };
      }

      if (variant === 'rounded' && isGlassTheme) {
        return {
          ...baseStyle,
          textShadowColor: 'rgba(0, 0, 0, 0.3)',
          textShadowOffset: { width: 0, height: 1 },
          textShadowRadius: 2,
        };
      }

      return baseStyle;
    };

    return (
      <TouchableOpacity
        key={tab.name || index}
        style={getTabStyle()}
        onPress={() => setActiveTab(index)}
        activeOpacity={0.7}
      >
        {tab.icon && (
          <Ionicons
            name={tab.icon}
            size={sizes.iconSize}
            color={isActive 
              ? (variant === 'rounded' ? '#FFFFFF' : colors.active) 
              : (theme === 'glass' && variant === 'rounded' ? 'rgba(255, 255, 255, 0.8)' : colors.inactive)}
            style={[
              theme === 'glass' && variant === 'rounded' ? {
                textShadowColor: 'rgba(0, 0, 0, 0.3)',
                textShadowOffset: { width: 0, height: 1 },
                textShadowRadius: 2,
              } : {},
              iconStyle
            ]}
          />
        )}
        {variant !== 'icons' && (
          <Text style={getTextStyle()} numberOfLines={variant === 'rounded' ? 1 : 1} ellipsizeMode="tail">
            {tab.name}
          </Text>
        )}
      </TouchableOpacity>
    );
  };

  const getContainerStyle = () => {
    const baseStyle = {
      backgroundColor: colors.background,
      borderTopColor: colors.border,
      borderTopWidth: position === 'bottom' ? 1 : 0,
      borderBottomColor: colors.border,
      borderBottomWidth: position === 'top' ? 1 : 0,
      flexDirection: 'row',
      minHeight: sizes.height,
      shadowColor: shadows.shadowColor,
      shadowOffset: {
        width: 0,
        height: position === 'bottom' ? -2 : 2,
      },
      shadowOpacity: shadows.shadowOpacity,
      shadowRadius: shadows.shadowRadius,
      elevation: shadows.elevation,
      ...containerStyle,
    };

    if (variant === 'glass') {
      return {
        ...baseStyle,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        position: 'absolute',
        [position]: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
        borderTopWidth: position === 'bottom' ? 1 : 0,
        borderBottomWidth: position === 'top' ? 1 : 0,
        borderTopColor: 'rgba(255, 255, 255, 0.4)',
        borderBottomColor: 'rgba(255, 255, 255, 0.4)',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: position === 'bottom' ? -4 : 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 15,
      };
    }

    if (variant === 'rounded') {
      const isGlassTheme = theme === 'glass';
      return {
        ...baseStyle,
        backgroundColor: isGlassTheme ? 'rgba(255, 255, 255, 0.1)' : colors.background,
        borderRadius: sizes.borderRadius * 1.2, // Container radius is slightly larger than tab radius
        marginHorizontal: spacing.containerMargin,
        marginBottom: position === 'bottom' ? 8 : 0,
        marginTop: position === 'top' ? 8 : 0,
        paddingVertical: spacing.containerPadding,
        paddingHorizontal: spacing.containerPadding,
        borderWidth: isGlassTheme ? 1 : 0,
        borderColor: isGlassTheme ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        shadowColor: shadows.shadowColor,
        shadowOffset: {
          width: 0,
          height: position === 'bottom' ? -4 : 4,
        },
        shadowOpacity: isGlassTheme ? shadows.shadowOpacity * 2 : shadows.shadowOpacity,
        shadowRadius: isGlassTheme ? shadows.shadowRadius * 2 : shadows.shadowRadius,
        elevation: isGlassTheme ? shadows.elevation * 3 : shadows.elevation * 1.5,
      };
    }

    return baseStyle;
  };

  const ActiveComponent = tabs[activeTab]?.component || (() => <View />);

  const renderTabBar = () => (
    <SafeAreaView 
      style={[styles.tabContainer, getContainerStyle()]} 
      edges={position === 'bottom' ? ['bottom'] : ['top']}
    >
      {tabs.map(renderTab)}
    </SafeAreaView>
  );

  return (
    <SafeAreaProvider>
      <View style={[styles.container, style]}>
        {position === 'top' && renderTabBar()}
        
        <View style={[
          styles.content,
          position === 'top' && variant === 'glass' && { paddingTop: 60 }
        ]}>
          <ActiveComponent />
        </View>
        
        {position === 'bottom' && renderTabBar()}
      </View>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  tabContainer: {
    minHeight: 50, // This will be overridden by custom height
  },
});

export default CustomTabs;

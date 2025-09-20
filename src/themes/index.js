import { Appearance } from 'react-native';

export const lightTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    textSecondary: '#8E8E93',
    border: '#C6C6C8',
    active: '#007AFF',
    inactive: '#8E8E93',
    tabBarBackground: '#FFFFFF',
    tabBarBorder: '#C6C6C8',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    pill: 20,
  },
  typography: {
    tabLabel: {
      fontSize: 12,
      fontWeight: '500',
    },
    tabLabelActive: {
      fontSize: 12,
      fontWeight: '600',
    },
  },
  shadows: {
    tabBar: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export const darkTheme = {
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    textSecondary: '#8E8E93',
    border: '#38383A',
    active: '#0A84FF',
    inactive: '#8E8E93',
    tabBarBackground: '#1C1C1E',
    tabBarBorder: '#38383A',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    pill: 20,
  },
  typography: {
    tabLabel: {
      fontSize: 12,
      fontWeight: '500',
    },
    tabLabelActive: {
      fontSize: 12,
      fontWeight: '600',
    },
  },
  shadows: {
    tabBar: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export const glassTheme = {
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: 'rgba(255, 255, 255, 0.1)',
    surface: 'rgba(255, 255, 255, 0.05)',
    text: '#FFFFFF',
    textSecondary: 'rgba(255, 255, 255, 0.7)',
    border: 'rgba(255, 255, 255, 0.2)',
    active: '#FFFFFF',
    inactive: 'rgba(255, 255, 255, 0.6)',
    tabBarBackground: 'rgba(255, 255, 255, 0.1)',
    tabBarBorder: 'rgba(255, 255, 255, 0.2)',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    pill: 20,
  },
  typography: {
    tabLabel: {
      fontSize: 12,
      fontWeight: '500',
    },
    tabLabelActive: {
      fontSize: 12,
      fontWeight: '600',
    },
  },
  shadows: {
    tabBar: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 8,
    },
  },
};

export const getSystemTheme = () => {
  const colorScheme = Appearance.getColorScheme();
  return colorScheme === 'dark' ? darkTheme : lightTheme;
};

export const mergeThemes = (baseTheme, customTheme) => {
  const deepMerge = (target, source) => {
    const result = { ...target };
    for (const key in source) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        result[key] = deepMerge(target[key] || {}, source[key]);
      } else {
        result[key] = source[key];
      }
    }
    return result;
  };
  
  return deepMerge(baseTheme, customTheme);
};

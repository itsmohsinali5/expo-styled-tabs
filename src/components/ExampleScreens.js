import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const HomeScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Home Screen</Text>
      <Text style={styles.description}>
        Welcome to the Home screen! This is an example of how the StyledTabs component works.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Features</Text>
        <Text style={styles.cardText}>• Multiple tab positions (top/bottom)</Text>
        <Text style={styles.cardText}>• Various styling variants</Text>
        <Text style={styles.cardText}>• Theme support</Text>
        <Text style={styles.cardText}>• Icon support</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export const SearchScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Search Screen</Text>
      <Text style={styles.description}>
        This is the Search screen. You can navigate between tabs smoothly.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Navigation</Text>
        <Text style={styles.cardText}>• Smooth tab transitions</Text>
        <Text style={styles.cardText}>• React Navigation integration</Text>
        <Text style={styles.cardText}>• Safe area handling</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export const ProfileScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.description}>
        This is the Profile screen. The tabs are fully customizable!
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Customization</Text>
        <Text style={styles.cardText}>• Custom themes</Text>
        <Text style={styles.cardText}>• Glassmorphism effects</Text>
        <Text style={styles.cardText}>• Rounded pill styles</Text>
        <Text style={styles.cardText}>• Icon variants</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export const SettingsScreen = () => (
  <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Settings Screen</Text>
      <Text style={styles.description}>
        This is the Settings screen. Perfect for configuration options.
      </Text>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Configuration</Text>
        <Text style={styles.cardText}>• Theme selection</Text>
        <Text style={styles.cardText}>• Position settings</Text>
        <Text style={styles.cardText}>• Style variants</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  content: {
    padding: 20,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 4,
  },
});

import React from 'react';
import { ScrollView, View, StyleSheet, SafeAreaView, Image, Text, useColorScheme } from 'react-native';

// Define the props interface for the LocationListItem
interface LocationListItemProps {
  imageUrl: string;
  name: string;
  headline: string;
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const backgroundColor = colorScheme === 'dark' ? '#353636' : '#D0D0D0';
  const textColor = colorScheme === 'dark' ? '#FFFFFF' : '#333333';

  return (
    <View style={[styles.backgroundContainer, { backgroundColor }]}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Text style={[styles.newsTitle, { color: textColor }]}>News Here</Text>
        </View>
        <ExampleParallax />
      </ScrollView>
    </View>
  );
};

const ExampleParallax = () => {
  return (
    <View style={styles.parallaxContainer}>
      {locations.map((location, index) => (
        <LocationListItem
          key={index}
          imageUrl={location.imageUrl}
          name={location.name}
          headline={location.headline}
        />
      ))}
    </View>
  );
};

// Update the LocationListItem component to use the interface
const LocationListItem: React.FC<LocationListItemProps> = ({ imageUrl, name, headline }) => {
  return (
    <View style={styles.locationItem}>
      <Image source={{ uri: imageUrl }} style={styles.locationImage} />
      <View style={styles.gradient} />
      <Text style={styles.locationName}>{name}</Text>
      <Text style={styles.locationHeadline}>{headline}</Text>
    </View>
  );
};

// Updated locations array with news images and headlines
const locations = [
  {
    name: 'Global Warming',
    headline: 'Rising temperatures threaten polar bears',
    imageUrl: 'https://example.com/news/global_warming.jpg',
  },
  {
    name: 'Tech Innovation',
    headline: 'New smartphone model sets sales records',
    imageUrl: 'https://example.com/news/tech_innovation.jpg',
  },
  {
    name: 'Economy Update',
    headline: 'Stocks soar as markets rebound',
    imageUrl: 'https://example.com/news/economy_update.jpg',
  },
  {
    name: 'Space Exploration',
    headline: 'Mars rover discovers signs of ancient life',
    imageUrl: 'https://example.com/news/space_exploration.jpg',
  },
  {
    name: 'Healthcare Advances',
    headline: 'Breakthrough in cancer treatment announced',
    imageUrl: 'https://example.com/news/healthcare_advances.jpg',
  },
  // ... other news items ...
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 30, // Increased vertical margin
    marginHorizontal: 30, // Increased horizontal margin
  },
  newsTitle: {
    fontSize: 32, // Increased font size even more
    fontWeight: 'bold',
    marginTop: 30, // Increased top margin
    marginBottom: 40, // Increased bottom margin
  },
  parallaxContainer: {
    flex: 1,
    paddingTop: 20, // Added padding to separate title from news items
  },
  locationItem: {
    position: 'relative',
    marginVertical: 15, // Increased vertical margin between items
    marginHorizontal: 25, // Increased horizontal margin for items
  },
  locationImage: {
    width: '100%',
    height: 200,
    borderRadius: 16,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderRadius: 16,
  },
  locationName: {
    position: 'absolute',
    left: 20,
    bottom: 40,
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  locationHeadline: {
    position: 'absolute',
    left: 20,
    bottom: 20,
    fontSize: 14,
    color: '#fff',
  },
});

export default App;
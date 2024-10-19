import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  useColorScheme,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

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
          <Text style={[styles.newsTitle, { color: textColor }]}>Latest news:</Text>
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

// Updated LocationListItem component to use the interface and handle modal
const LocationListItem: React.FC<LocationListItemProps> = ({ imageUrl, name, headline }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.locationItem}>
        <Image source={{ uri: imageUrl }} style={styles.locationImage} />
        <View style={styles.gradient} />
        <Text style={styles.locationName}>{name}</Text>
        <Text style={styles.locationHeadline}>{headline}</Text>
      </TouchableOpacity>

      {/* Modal for the overlay */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
  <TouchableOpacity style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
    <View style={styles.modalContent}>
      <Image 
        source={{ uri: `${imageUrl}?${new Date().getTime()}` }} 
        style={styles.modalImage} 
        onError={() => console.log('Error loading image')}
      />
      <Text style={styles.modalText}>{headline}</Text>
      <Text style={styles.modalText}>{`Details about ${name}. As scammers find new ways to steal money and personal information, consumers should be more vigilant about who they trust, especially online. A quick way to remember what to do when you think you're getting scammed is to think about the three S's, said Alissa Abdullah, also known as Dr. Jay, Mastercard’s deputy chief security officer.`}</Text>
    </View>
  </TouchableOpacity>
</View>

      </Modal>
    </>
  );
};

// Updated locations array with news images and headlines
const locations = [
  {
    name: 'Global Warming',
    headline: 'Rising temperatures threaten polar bears',
    imageUrl: 'https://img.lemde.fr/2024/10/18/0/0/6000/4000/700/0/75/0/a08fb85_1729234532051-sipa01179401-000040.jpg',
  },
  {
    name: 'Tech Innovation',
    headline: 'New smartphone model sets sales records',
    imageUrl: 'https://techbullion.com/wp-content/uploads/2024/10/How-Tampa-is-Becoming-a-Powerhouse-for-Tech-Innovation.jpg',
  },
  {
    name: 'Economy Update',
    headline: 'Stocks soar as markets rebound',
    imageUrl: 'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1srum5.img?w=768&h=512&m=6',
  },
  {
    name: 'Space Exploration',
    headline: 'Mars rover discovers signs of ancient life',
    imageUrl: 'https://th.bing.com/th?id=OVFT.tcRI9m8pMKNM-lIuQCT-Ui&pid=News&w=234&h=132&c=14&rs=2&qlt=90&dpr=1.3',
  },
  {
    name: 'Healthcare Advances',
    headline: 'Breakthrough in cancer treatment announced',
    imageUrl: 'https://rollingout.com/wp-content/uploads/2024/08/shutterstock_2276430429.jpg',
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  modalText: {
    marginVertical: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default App;

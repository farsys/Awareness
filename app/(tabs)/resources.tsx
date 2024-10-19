import { Image, StyleSheet, Platform, View, ScrollView } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
// User's current location
const var_user_latitude = 26.08047;
const var_user_longitude = -80.23380;

// List of nearby events with coordinates, severity, and description
const events = [
  {
    latitude: 26.08147,
    longitude: -80.19480,
    severity: 'Medium',
    description: 'Shelter  Capacity 10/90',
    icon: 'home'
  },
  {
    latitude: 26.07850,
    longitude: -80.26090,
    severity: 'Medium',
    description: 'Shelter  Capacity 50/100',
    icon: 'home'
  },
  {
    latitude: 26.07800,
    longitude: -80.23100,
    severity: 'Medium',
    description: 'Food Bank',
    nutrition:'nutrition'
  },
];

export default function HomeScreen() {
  return (
    
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Resources</ThemedText>
       
      </ThemedView>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: var_user_latitude,
            longitude: var_user_longitude,
            latitudeDelta: 0.0900, // Zoom 
            longitudeDelta: 0.0900, // Zoom l
          }}
          showsUserLocation={true} //
        >
          {/* User Location Marker with Icon */}
          <Marker
            coordinate={{
              latitude: var_user_latitude,
              longitude: var_user_longitude,
            }}
            title="You are here"
            description="This is your current location."
          >
            {/* Wrap Ionicons inside View */}
            <View style={styles.customMarker}>
              <Ionicons name="person-circle" size={40} color="blue" />
            </View>
          </Marker>

          {/* Render Markers for Events */}
          {events.map((event, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: event.latitude, longitude: event.longitude }}
            >

              



              {/* Custom Icon for Event Marker */}
              <View style={styles.customMarker}>
                <Ionicons name={event.icon}
                  size={30}
                  color={
                    event.severity === 'High'
                      ? 'red'
                      : event.severity === 'Medium'
                      ? 'orange'
                      : 'green'
                  }
                />
              </View>



              <Callout>
                <View style={styles.callout}>
                  <ThemedText>{`Severity: ${event.severity}`}</ThemedText>
                  <ThemedText>{event.description}</ThemedText>
                </View>
              </Callout>


            </Marker>
          ))}
        </MapView>
      </View>
      
      <ScrollView style={styles.infoContainer}>
        <ThemedText type="subtitle">Nearby</ThemedText>
        {events.map((event, index) => (
          <View key={index} style={styles.eventItem}>
            <ThemedText type="default">{`Importance: ${event.severity}`}</ThemedText>
            <ThemedText>{event.description}</ThemedText>
          </View>
        ))}
      </ScrollView>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  mapContainer: {
    flex: 1,
    height: 300,
    marginTop: 5,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  infoContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  eventItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
callout: {
  width: 150,
  padding: 5,
},
customMarker: {
  alignItems: 'center',
  justifyContent: 'center',
},
});

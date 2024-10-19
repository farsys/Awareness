import React from 'react';
import { Image, StyleSheet, View,ScrollView } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// User's current location
const var_user_latitude = 26.08047;
const var_user_longitude = -80.23380;

// List of nearby events with coordinates, severity, and description
const events = [
  {
    latitude: 26.18147,
    longitude: -80.33480,
    severity: 'High',
    description: 'Road closure due to maintenance',
    icon: 'alert-circle',
  },
  {
    latitude: 26.07170,
    longitude: -80.23090,
    severity: 'Medium',
    description: 'Accident reported in this area',
    icon: 'warning',
  },
  {
    latitude: 26.08200,
    longitude: -80.26100,
    severity: 'Low',
    description: 'Minor traffic delays expected',
    icon: 'walk',
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
        <Ionicons name="home-outline" size={25} color="black" />
        <ThemedText type="title">Dashboard</ThemedText>
       
      </ThemedView>

      {/* Map Container */}
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: var_user_latitude,
            longitude: var_user_longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
          showsUserLocation={true}
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
  customMarker: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  callout: {
    width: 150,
    padding: 5,
  },
  eventItem: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
});

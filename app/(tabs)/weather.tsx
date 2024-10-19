import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Alert } from 'react-native';

const EmergencyAlertSystem = () => {
  const [windSpeed, setWindSpeed] = useState('Loading wind speed...');
  const [temperature, setTemperature] = useState('Loading temperature...');

  // Dummy data for wind speed and temperature
  const dummyWindSpeed = 5.2; // Example wind speed in meters/second
  const dummyTemperature = 22; // Example temperature in degrees Celsius

  useEffect(() => {
    // Instead of fetching data, we set the dummy data
    setWindSpeed(`Current wind speed: ${dummyWindSpeed} m/s`);
    setTemperature(`Current temperature: ${dummyTemperature} °C`);
  }, []);

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/originals/f1/3f/b3/f13fb34cc03956b16ad356f8122b9621.jpg' }} // Replace with your storm image URL
      style={styles.background}
    >
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { marginBottom: 10 }]}>Emergency Alert System</Text>
        <Text style={[styles.headerSubtitle, { marginBottom: 20 }]}>Stay Informed, Stay Safe</Text>
        <View style={styles.alertBox}>
          <Text style={styles.alertHeading}>ALERT: Severe Weather Warning!</Text>
          <Text style={{ marginVertical: 10 }}>
            Immediate action is required. Please stay indoors and follow local guidelines.
          </Text>

        </View>
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.emergencyContacts}>
          <Text style={styles.contactTitle}>Information</Text>
          <View style={styles.windSpeedBox}>
            <Text style={styles.windSpeedTitle}>Current Wind Speed</Text>
            <Text style={styles.windSpeedAlert}>{windSpeed}</Text>
          </View>
          <View style={styles.temperatureBox}>
            <Text style={styles.temperatureTitle}>Current Temperature</Text>
            <Text style={styles.temperatureAlert}>{temperature}</Text>
          </View>
          <TouchableOpacity style={styles.contactItem}>
            <Text>📞 911 - Emergency Services</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Text>🚔 Local Police: (555) 123-4567</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.contactItem}>
            <Text>🔥 Fire Department: (555) 987-6543</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Get Help pressed!')}>
            <Text style={styles.buttonText}>Get Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Get Help pressed!')}>
            <Text style={styles.buttonText}>Preparedness</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    backgroundColor: 'rgba(220, 53, 69, 0.8)',
    padding: 5,
    textAlign: 'center',
    marginBottom: 5,
  },
  headerTitle: {
    fontSize: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  headerSubtitle: {
    fontSize: 18,
    color: 'white',
  },
  container: {
    alignItems: 'center',
  },
  alertBox: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1,
    borderColor: '#ffeeba',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    width: '100%',
  },
  alertHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  alertFooter: {
    marginTop: 10,
    color: '#721c24',
  },
  emergencyContacts: {
    width: '100%',
    marginBottom: 20,
  },
  contactTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  contactItem: {
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 8,
    marginBottom: 10,
  },
  windSpeedBox: {
    backgroundColor: 'rgba(13, 110, 253, 0.9)',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  windSpeedTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  windSpeedAlert: {
    fontSize: 18,
    color: 'white',
  },
  temperatureBox: {
    backgroundColor: 'rgba(253, 184, 19, 0.9)', // Different color for temperature box
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  temperatureTitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  temperatureAlert: {
    fontSize: 18,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 8,
    padding: 15,
    width: '45%',
    alignItems: 'center',
  },
  buttonOutline: {
    borderColor: 'red',
    borderWidth: 2,
    borderRadius: 8,
    padding: 15,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EmergencyAlertSystem;

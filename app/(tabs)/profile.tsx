import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Profile/Settings!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Basic Information</ThemedText>
        <ThemedText>
         <ThemedText type="defaultSemiBold">Name:</ThemedText> Jon Doe{' \n'}
         <ThemedText type="defaultSemiBold">Age:</ThemedText> 35{' \n'}
         <ThemedText type="defaultSemiBold">Blood Type:</ThemedText> O+{' \n'}
         <ThemedText type="defaultSemiBold">Phone: </ThemedText>555-555-5555{' \n'}
         <ThemedText type="defaultSemiBold">Address: </ThemedText> 123 Road ,FL
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Emergency contact</ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">Name: </ThemedText>Julia Robers{' \n'}
        <ThemedText type="defaultSemiBold">Phone: </ThemedText>555-555-5555{' \n'}
        <ThemedText type="defaultSemiBold">Address: </ThemedText> 456 Road ,FL
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">In Case of Emergency</ThemedText>
        <ThemedText>
        <ThemedText type="defaultSemiBold">Release Cloud Last Location: </ThemedText>On{' \n'}
        <ThemedText type="defaultSemiBold">Reach to Emermercy Contact: </ThemedText>On{' \n'}
    
        </ThemedText>
     


        
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

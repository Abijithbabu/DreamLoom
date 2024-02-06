import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import BG from './assets/images/landing.jpg';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={BG} style={styles.container}>
        <Text style={styles.title}>DreamLoom</Text>
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#27a0A1',
    fontSize: 50,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: '#000',
    padding: 10
  },
});

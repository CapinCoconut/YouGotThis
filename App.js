import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button } from 'react-native-web';
import WelcomeScreen from './Screens/WelcomeScreen';

export default function App() {
  return (
    <WelcomeScreen />
  );
}
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/LoginScreen';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    outfit_regular: require('./assets/fonts/Outfit-Regular.ttf'),
    outfit_medium: require('./assets/fonts/Outfit-Medium.ttf'),
    outfit_bold: require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey="mafufu">
      <View style={styles.container}>
        <SignedIn>
          <Text>You are Signed in</Text>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

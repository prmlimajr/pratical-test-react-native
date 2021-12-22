import { Home } from './src/screens/Home';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import {
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
} from '@expo-google-fonts/lato';

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}

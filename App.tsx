import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';

export default function App() {
  return (
    <View>
    <StatusBar style='light'/>

    <CategoryScreen/>
    </View>
  );
}


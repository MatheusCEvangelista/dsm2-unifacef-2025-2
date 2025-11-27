import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import MeuScreen from './screens/MeuScreen';
import EquipeScreen from './screens/EquipeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Meus" component={MeuScreen} />
        <Stack.Screen name="equipe" component={EquipeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
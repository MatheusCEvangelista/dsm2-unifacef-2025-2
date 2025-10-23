import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import BasicExample from './screens/BasicExample';
import FormValidation from './screens/FormValidation';
import RegisterScreen from './screens/RegisterScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Início" component={HomeScreen} />
        <Stack.Screen name="Exemplo Básico" component={BasicExample} />
        <Stack.Screen name='Validação de formulário' component={FormValidation}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{ title: 'Cadastro' }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Dados do Usuário' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

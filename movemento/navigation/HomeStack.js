import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen'
import CreateEntryStack from './CreateEntryStack';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='CreateEntryStack' component={CreateEntryStack} options={{ headerShown: false, unmountOnBlur: true}}/>
    </Stack.Navigator>
  )
}

export default HomeStack
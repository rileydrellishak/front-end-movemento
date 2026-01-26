import EntriesScreen from "../screens/EntriesScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const EntriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Entries' component={EntriesScreen}/>
    </Stack.Navigator>
  )
}

export default EntriesStack;
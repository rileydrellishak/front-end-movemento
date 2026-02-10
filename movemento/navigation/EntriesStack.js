import EntriesScreen from "../screens/EntriesScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditEntryScreen from "../screens/EditEntryScreen";

const Stack = createNativeStackNavigator();

const EntriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Entries' component={EntriesScreen} options={{headerShown: false}}/>
      <Stack.Screen name='Edit Entry' component={EditEntryScreen} options={{ headerShown: true, unmountOnBlur: true, presentation: 'modal'}}/>
    </Stack.Navigator>
  )
}

export default EntriesStack;
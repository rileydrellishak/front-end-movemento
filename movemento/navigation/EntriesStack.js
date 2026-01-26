import EntriesScreen from "../screens/EntriesScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditEntryScreen from "../screens/EditEntryScreen";
import EditEntryStack from "./EditEntryStack";

const Stack = createNativeStackNavigator();

const EntriesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Entries' component={EntriesScreen}/>
      <Stack.Screen name='EditEntryStack' component={EditEntryStack} options={{ headerShown: false, unmountOnBlur: true}}/>
    </Stack.Navigator>
  )
}

export default EntriesStack;
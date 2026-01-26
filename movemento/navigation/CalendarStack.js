import CalendarScreen from "../screens/CalendarScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const CalendarStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Calendar' component={CalendarScreen}/>
    </Stack.Navigator>
  )
}

export default CalendarStack;
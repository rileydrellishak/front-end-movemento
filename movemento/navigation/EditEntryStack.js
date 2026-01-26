import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditEntryScreen from '../screens/EditEntryScreen';

const Stack = createNativeStackNavigator();

const EditEntryStack = () => {
  return (
    <Stack.Navigator initialRouteName='EditEntry'>
      <Stack.Screen name='EditEntry' component={EditEntryScreen}/>
    </Stack.Navigator>
  )
}

export default EditEntryStack;
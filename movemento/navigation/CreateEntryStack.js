import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectMovementsScreen from '../screens/SelectMovementsScreen';
import SelectMoodsBeforeScreen from '../screens/SelectMoodsBeforeScreen';
import SelectMoodsAfterScreen from "../screens/SelectMoodsAfterScreen";
import ReflectionScreen from "../screens/ReflectionScreen";

const Stack = createNativeStackNavigator();

const CreateEntryStack = () => {
  return (
    <Stack.Navigator initialRouteName='SelectMovements'>
      <Stack.Screen name='SelectMovements' component={SelectMovementsScreen}/>
      <Stack.Screen name='SelectMoodsBefore' component={SelectMoodsBeforeScreen}/>
      <Stack.Screen name='SelectMoodsAfter' component={SelectMoodsAfterScreen}/>
      <Stack.Screen name='Reflection' component={ReflectionScreen}/>
    </Stack.Navigator>
  )
}

export default CreateEntryStack;
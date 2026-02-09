import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateEntryStack from "./CreateEntryStack";
import EditEntryScreen from "../screens/EditEntryScreen";
import SelectUserScreen from "../screens/SelectUserScreen";
const RootStack = createNativeStackNavigator();

const RootNavigator = ({ theme }) => {
  return (
    <RootStack.Navigator>
      {/* <RootStack.Screen name='Login' component={SelectUserScreen}/> */}
      <RootStack.Screen name='Main' component={TabNavigator} options={{ headerShown: false }}/>
      <RootStack.Screen name='CreateEntryModal' component={CreateEntryStack} options={{ presentation: 'modal', headerShown: false}}/>
    </RootStack.Navigator>
  )
}

export default RootNavigator;
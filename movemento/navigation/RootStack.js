import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateEntryStack from "./CreateEntryStack";
import EditEntryScreen from "../screens/EditEntryScreen";
import EditEntryStack from "./EditEntryStack";

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='Main' component={TabNavigator}/>
      <RootStack.Screen name='CreateEntryModal' component={CreateEntryStack} options={{ presentation: 'modal'}}/>
      <RootStack.Screen name='EditEntryModal' component={EditEntryStack} options={{ presentation: 'modal' }}/>
    </RootStack.Navigator>
  )
}

export default RootNavigator;
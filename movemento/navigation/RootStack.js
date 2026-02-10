import TabNavigator from "./TabNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateEntryStack from "./CreateEntryStack";
const RootStack = createNativeStackNavigator();

const RootNavigator = ({ theme }) => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name='Main' component={TabNavigator} options={{ headerShown: false }}/>
      <RootStack.Screen name='CreateEntryModal' component={CreateEntryStack} options={{ presentation: 'modal', headerShown: false}}/>
    </RootStack.Navigator>
  )
}

export default RootNavigator;
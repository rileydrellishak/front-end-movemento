import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import EntriesStack from './EntriesStack';
import CalendarStack from './CalendarStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Home' component={HomeStack} options={{title: 'Home'}}/>
      <Tab.Screen name='EntriesTab' component={EntriesStack} options={{title: 'Entries'}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;
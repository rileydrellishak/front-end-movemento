import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import EntriesStack from './EntriesStack';
import CalendarStack from './CalendarStack';
import Entypo from '@expo/vector-icons/Entypo';
// <Entypo name="home" size={24} color="black" />
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
// <SimpleLineIcons name="pencil" size={24} color="black" />
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home': 'home';
            return <Entypo name={iconName} size={size} color={color} />

          }
          else if (route.name === 'EntriesTab') {
            iconName = focused ? 'pencil' : 'pencil';
            return <Entypo name={iconName} size={size} color={color} />
          }
        }, tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} options={{title: 'Home'}}/>
      <Tab.Screen name='EntriesTab' component={EntriesStack} options={{title: 'Entries'}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;
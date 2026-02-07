import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import EntriesStack from './EntriesStack';
import Entypo from '@expo/vector-icons/Entypo';
import { useTheme } from 'react-native-paper'

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const theme = useTheme();
  
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
        }, tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: 'gray'
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} options={{title: 'Home'}}/>
      <Tab.Screen name='EntriesTab' component={EntriesStack} options={{title: 'Entries'}}/>
    </Tab.Navigator>
  )
}

export default TabNavigator;
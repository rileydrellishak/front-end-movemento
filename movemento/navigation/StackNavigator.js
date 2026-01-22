import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SelectMovementsScreen from "../screens/SelectMovementsScreen";
import SelectMoodsScreen from '../screens/SelectMoodsScreen';
import ReflectionScreen from "../screens/ReflectionScreen";
import { Pressable, Button } from "react-native";

const Stack = createNativeStackNavigator();

const goHomeButton = () => {
  return (
    <View>
      <Pressable onPress={() => alert('pressable worked')}>
        <Text>hey</Text>
      </Pressable>
    </View>
  )
}

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={ 
        {
          headerStyle: { backgroundColor: '#8FB8ED' }
        }
      }
    >
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
      <Stack.Screen
        name='SelectMovements'
        component={SelectMovementsScreen}
      />
      <Stack.Screen 
        name='SelectMoodsBefore'
        component={SelectMoodsScreen}
      />
    <Stack.Screen
      name='SelectMoodsAfter'
      component={SelectMoodsScreen}
    />
    <Stack.Screen
      name='Reflection'
      component={ReflectionScreen}
    />
  </Stack.Navigator>
  );
}

export default RootStack;
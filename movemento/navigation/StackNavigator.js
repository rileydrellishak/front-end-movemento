import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SelectMovementsScreen from "../screens/SelectMovementsScreen";
import SelectMoodsBeforeScreen from "../screens/SelectMoodsBeforeScreen";
import SelectMoodsAfterScreen from "../screens/SelectMoodsAfterScreen";
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
          headerStyle: { backgroundColor: 'green' }
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
        component={SelectMoodsBeforeScreen}
      />
    <Stack.Screen
      name='SelectMoodsAfter'
      component={SelectMoodsAfterScreen}
    />
    <Stack.Screen
      name='Reflection'
      component={ReflectionScreen}
    />
  </Stack.Navigator>
  );
}

export default RootStack;
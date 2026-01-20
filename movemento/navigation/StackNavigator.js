import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Home',
  screenOptions: {
    headerStyle: {backgroundColor: '#aeb4a9'}
  },
  screens: {
    Home: HomeScreen
  },
});

const Navigation = createStaticNavigation(RootStack);

export default Navigation;
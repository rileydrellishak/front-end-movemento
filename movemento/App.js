import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/StackNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

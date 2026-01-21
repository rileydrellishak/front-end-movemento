import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntryCalendar from '../components/EntryCalendar';
import ButtonStyles from '../styles/Buttons';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HOME</Text>
      <Pressable
        onPress={() => navigation.navigate('SelectMovements')}
        style={ButtonStyles.next}
      >
        <Text>Create an entry and go to the select movements screen</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate('Reflection')}
        style={ButtonStyles.debugging}
      >
        <Text>Quick jump to reflection screen for debugging</Text>
      </Pressable>
      <EntryCalendar></EntryCalendar>
    </View>
  )
}

export default HomeScreen
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CalendarScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>the screen where you will see a cakebdar</Text>
    </View>
  )
}

export default CalendarScreen
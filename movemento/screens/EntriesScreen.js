import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const EntriesScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>the screen where you will see entries</Text>
    </View>
  )
}

export default EntriesScreen
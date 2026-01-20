import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>HOME</Text>
      <Pressable><Text>CREATE!</Text></Pressable>
    </View>
  )
}

export default HomeScreen
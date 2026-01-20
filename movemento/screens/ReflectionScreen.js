import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ReflectionScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>reflection</Text>
      <Pressable onPress={() => navigation.popTo('Home')}>
        <Text>save!</Text>
      </Pressable>
    </View>
  )
}

export default ReflectionScreen
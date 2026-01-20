import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>HOME</Text>
      <Pressable onPress={() => navigation.navigate('SelectMovements')}>
        <Text>Create an entry and go to the select movements screen</Text>
      </Pressable>
    </View>
  )
}

export default HomeScreen
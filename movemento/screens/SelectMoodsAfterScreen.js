import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SelectMoodsAfterScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>select moods after</Text>
      <Pressable onPress={() => navigation.navigate('Reflection')}>
        <Text>go to the type your reflection screen</Text>
      </Pressable>
    </View>
  )
}

export default SelectMoodsAfterScreen
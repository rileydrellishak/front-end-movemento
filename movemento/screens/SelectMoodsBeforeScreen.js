import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SelectMoodsBeforeScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>the before moods</Text>
      <Pressable onPress={() => navigation.navigate('SelectMoodsAfter')}>
        <Text>go to the moods after screen</Text>
      </Pressable>
    </View>
  )
}

export default SelectMoodsBeforeScreen
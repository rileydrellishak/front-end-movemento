import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const SelectMovementsScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>pick movements</Text>
      <Pressable onPress={() => navigation.navigate('SelectMoodsBefore')}>
        <Text>go to moods before screen</Text>
      </Pressable>
    </View>
  )
}

export default SelectMovementsScreen
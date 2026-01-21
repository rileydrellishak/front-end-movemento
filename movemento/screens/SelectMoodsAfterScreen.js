import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import MoodButtonsContainer from '../components/containers/MoodButtonsContainer'

const SelectMoodsAfterScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>select moods after</Text>
      <MoodButtonsContainer/>
      <Pressable
        onPress={() => navigation.navigate('Reflection')}
        style={ButtonStyles.next}
      >
        <Text>go to the type your reflection screen</Text>
      </Pressable>
    </View>
  )
}

export default SelectMoodsAfterScreen
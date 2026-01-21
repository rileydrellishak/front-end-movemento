import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import MoodButtonsContainer from '../components/containers/MoodButtonsContainer'

const SelectMoodsBeforeScreen = () => {
  const navigation = useNavigation();
  return(
    <ScrollView>
      <Text>the before moods</Text>
      <MoodButtonsContainer/>
      <Pressable
        onPress={() => navigation.navigate('SelectMoodsAfter')}
        style={ButtonStyles.next}
      >
        <Text>go to the moods after screen</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SelectMoodsBeforeScreen
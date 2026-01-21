import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import MovementButtonsContainer from '../components/containers/MovementButtonsContainer';

const SelectMovementsScreen = () => {
  const navigation = useNavigation();
  return(
    <View>
      <Text>pick movements</Text>
      <MovementButtonsContainer/>
      <Pressable
        onPress={() => navigation.navigate('SelectMoodsBefore')}
        style={ButtonStyles.next}
      >
        <Text>go to moods before screen</Text>
      </Pressable>
    </View>
  )
}

export default SelectMovementsScreen
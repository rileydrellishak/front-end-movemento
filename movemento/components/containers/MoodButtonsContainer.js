import { View, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';
import MoodButton from '../buttons/MoodButton';

const MoodButtonsContainer = () => {
  return (
    <View style={ContainerStyles.mood}>
      <Text>the mood buttons</Text>
      <MoodButton/>
      <MoodButton/>
      <MoodButton/>
    </View>
  )
}

export default MoodButtonsContainer;
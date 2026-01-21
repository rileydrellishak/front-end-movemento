import { Pressable, Text } from 'react-native';
import ButtonStyles from '../../styles/Buttons';

const MoodButton = () => {
  return (
    <Pressable style={ButtonStyles.moods}>
      <Text>Mood button</Text>
    </Pressable>
  )
}

export default MoodButton;
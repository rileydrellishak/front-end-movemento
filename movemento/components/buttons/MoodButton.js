import { Pressable, Text } from 'react-native';
import ButtonStyles from '../../styles/Buttons';

const MoodButton = ({ name }) => {
  return (
    <Pressable style={ButtonStyles.moods}>
      <Text>{name}</Text>
    </Pressable>
  )
}

export default MoodButton;
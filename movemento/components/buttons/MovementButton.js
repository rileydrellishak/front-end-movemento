import { Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons';

const MovementButton = () => {
  return (
    <Pressable style={ButtonStyles.movements}>
      <Text>Movement name</Text>
    </Pressable>
  )
}

export default MovementButton;
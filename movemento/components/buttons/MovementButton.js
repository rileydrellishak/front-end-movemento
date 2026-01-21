import { Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons';

const MovementButton = ({ name }) => {
  return (
    <Pressable style={ButtonStyles.movements}>
      <Text style={ButtonStyles.movements}>{name}</Text>
    </Pressable>
  )
}

export default MovementButton;
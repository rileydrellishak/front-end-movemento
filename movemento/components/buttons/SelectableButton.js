import { Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons';

const SelectableButton = ({ variant, name }) => {
  return (
    <Pressable style={[ButtonStyles.base, variant === 'moods' && ButtonStyles.moods, variant == 'movements' && ButtonStyles.movements]}>
      <Text style={ButtonStyles.variant}>{name}</Text>
    </Pressable>
  )
}

export default SelectableButton;

// either movements or moods for button styles
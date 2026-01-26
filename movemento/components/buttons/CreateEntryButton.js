import { Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons'
import TextStyles from '../../styles/Text';

const CreateEntryButton = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[ButtonStyles.base, ButtonStyles.next]}
    >
      <Text style={[TextStyles.button, TextStyles.title]}>Create Entry</Text>
    </Pressable>
  )
};

export default CreateEntryButton;
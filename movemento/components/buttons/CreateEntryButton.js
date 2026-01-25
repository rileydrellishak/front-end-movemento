import { Pressable, Text } from 'react-native'
import ButtonStyles from '../../styles/Buttons'

const CreateEntryButton = ({ handleNext }) => {
  return (
    <Pressable
      onPress={handleNext}
      style={[ButtonStyles.base, ButtonStyles.next]}
    >
      <Text>Create an entry and go to the select movements screen</Text>
    </Pressable>
  )
};

export default CreateEntryButton;
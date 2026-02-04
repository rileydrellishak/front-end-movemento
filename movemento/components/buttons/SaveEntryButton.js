import { Pressable, Text } from "react-native"
import { Alert } from 'react-native'
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"

const SaveEntryButton = ({ saveEntry }) => {

  return (
    <Pressable style={[ButtonStyles.base, ButtonStyles.save]} onPress={saveEntry}>
      <Text style={TextStyles.save}>Save Entry</Text>
    </Pressable>
  )
}

export default SaveEntryButton
import { Pressable, Text } from "react-native"
import { Alert } from 'react-native'
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"

const SaveChangesButton = ({ saveChanges }) => {

  return (
    <Pressable style={[ButtonStyles.base, ButtonStyles.save]} onPress={() => saveChanges()}>
      <Text style={TextStyles.save}>Save Changes</Text>
    </Pressable>
  )
}

export default SaveChangesButton
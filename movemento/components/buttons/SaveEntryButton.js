import { Pressable, Text } from "react-native"
import { Alert } from 'react-native'
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"

const SaveEntryButton = ({ navigation }) => {
  const confirmSave = () => {
    Alert.alert(
      'Entry Saved',
      '',
      [
        {
          text: 'Go Home',
          onPress: () => navigation.popToTop()
        }
      ]
    )
  }

  const saveEntry = () => {
    confirmSave()
  }

  return (
    <Pressable style={ButtonStyles.save} onPress={saveEntry}>
      <Text style={TextStyles.save}>Save Entry</Text>
    </Pressable>
  )
}

export default SaveEntryButton
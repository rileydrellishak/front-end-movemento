import { Pressable, Text } from "react-native"
import { Alert } from 'react-native'
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"
import { createJournalEntryAPI } from "../../api/utilities"

const SaveEntryButton = ({ navigation, entry }) => {
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
    createJournalEntryAPI(entry)
    confirmSave()
  }

  return (
    <Pressable style={[ButtonStyles.base, ButtonStyles.save]} onPress={saveEntry}>
      <Text style={TextStyles.save}>Save Entry</Text>
    </Pressable>
  )
}

export default SaveEntryButton
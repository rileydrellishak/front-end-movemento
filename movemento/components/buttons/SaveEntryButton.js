import { Pressable, Text } from "react-native"
import { Alert } from 'react-native'

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
    <Pressable onPress={saveEntry}>
      <Text>Save Entry</Text>
    </Pressable>
  )
}

export default SaveEntryButton
import { Pressable, Text } from "react-native"
import { Alert } from 'react-native'
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"
import { createJournalEntryAPI } from "../../api/utilities"
import { useData } from "../../context/DataContext"

const SaveEntryButton = ({ navigation, entry, resetEntry }) => {
  const { addEntryToCache, selectedUser, setEntriesCache, entriesCache } = useData();
  const confirmSave = (newEntry) => {
    Alert.alert(
      'Entry Saved',
      '',
      [
        {
          text: 'Go Home',
          onPress: () => {
            resetEntry();
            navigation.getParent()?.goBack();
          }
        }
      ]
    )
  }

  const saveEntry = async () => {
    const newEntry = await createJournalEntryAPI(entry)
    addEntryToCache(entry.user_id, newEntry)
    confirmSave(newEntry)
  }

  return (
    <Pressable style={[ButtonStyles.base, ButtonStyles.save]} onPress={saveEntry}>
      <Text style={TextStyles.save}>Save Entry</Text>
    </Pressable>
  )
}

export default SaveEntryButton
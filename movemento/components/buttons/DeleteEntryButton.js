import { Alert } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { deleteJournalEntryAPI } from '../../api/utilities'

const DeleteEntryButton = ({ loading, setLoading, user_id, entry_id, onDeleteEntry }) => {
  const handleDelete = async () => {
    setLoading(true)
    try {
      await deleteJournalEntryAPI(user_id, entry_id);
      onDeleteEntry?.(entry_id)
      Alert.alert('Entry deleted', '', [{text: 'Close'}]);
    } catch (error) {
      console.error('delete failed', error);
      Alert.alert('Delete failed', '', [{text: 'Close'}])
    } setLoading(false)
  }

  const confirmDelete = () => {
    Alert.alert(
      'Delete this entry?',
      'This action is irreversable.',
      [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Delete', onPress: handleDelete}
    ],
    )
  }

  return (
    <Button
      onPress={confirmDelete}
    >
      <Text>delete Entry</Text>
    </Button>
  )
};

export default DeleteEntryButton;
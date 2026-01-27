import { Pressable, Text, Alert } from 'react-native'
import ButtonStyles from '../../styles/Buttons'
import TextStyles from '../../styles/Text';
import { deleteJournalEntryAPI } from '../../api/utilities'

const DeleteEntryButton = ({ user_id, entry_id, onDeleteEntry }) => {
  const handleDelete = async () => {
    try {
      await deleteJournalEntryAPI(user_id, entry_id);
      onDeleteEntry?.(entry_id)
      Alert.alert('Entry deleted', '', [{text: 'Close'}]);
    } catch (error) {
      console.error('delete failed', error);
      Alert.alert('Delete failed', '', [{text: 'Close'}])
    }
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
    <Pressable
      onPress={confirmDelete}
      style={[ButtonStyles.base, ButtonStyles.debugging]}
    >
      <Text>delete Entry</Text>
    </Pressable>
  )
};

export default DeleteEntryButton;
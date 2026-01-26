import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntriesContainer from '../components/containers/EntriesContainer';
import { useState, useEffect } from 'react'
import { getAllJournalEntriesForUserAPI, deleteJournalEntryAPI, updateJournalEntryAPI } from '../api/utilities';
import { useData } from '../context/DataContext';

const EntriesScreen = () => {
  const navigation = useNavigation();
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const { selectedUser } = useData();

  const fetchEntries = async () => {
    try {
      const entries = await getAllJournalEntriesForUserAPI(selectedUser.id)
      setEntries(entries)
    } catch (error) {
      console.error('error fetch', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchEntries();
  }, [selectedUser, entries])

  const deleteEntry = (user_id, id) => {
    return deleteJournalEntryAPI(user_id, id)
      .then(() => {
        return setEntries(prevEntries => prevEntries.filter(entry => entry.id !== id))
      });
  }

  const handleEditEntryButton = () => {
    navigation.navigate('EditEntryModal')
  }

  if (loading) {
    return (
      <Text>Loading entries...</Text>
    )
  }

  return(
    <View>
      <EntriesContainer handleEditEntryButton={handleEditEntryButton} data={entries} deleteEntry={deleteEntry}/>
    </View>
  )
}


export default EntriesScreen;
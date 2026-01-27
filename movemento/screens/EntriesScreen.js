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
  }, [selectedUser.id])

  const handleDeleteEntry = (entry_id) => {
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== entry_id))
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
      <EntriesContainer
        handleEditEntryButton={handleEditEntryButton}
        handleDeleteEntry={handleDeleteEntry}
        data={entries}/>
    </View>
  )
}


export default EntriesScreen;
import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntriesContainer from '../components/containers/EntriesContainer';
import { useState, useEffect } from 'react'
import { getAllJournalEntriesForUserAPI, deleteJournalEntryAPI, updateJournalEntryAPI } from '../api/utilities';
import { useData } from '../context/DataContext';

const EntriesScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const { selectedUser, entriesCache, setEntriesCache } = useData();

  const fetchEntries = async () => {
    try {
      setLoading(true)
      const newEntries = await getAllJournalEntriesForUserAPI(selectedUser.id)
      setEntries(newEntries)
      setEntriesCache(prev => ({...prev, [selectedUser.id]: newEntries}))
    } catch (error) {
      console.error('error fetch', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (entriesCache[selectedUser.id]) {
      setEntries(entriesCache[selectedUser.id]);
      setLoading(false);
    } else {
      fetchEntries()
    }
  }, [selectedUser.id, entriesCache[selectedUser.id]])

  const handleDeleteEntry = (entry_id) => {
    setEntries(prevEntries => prevEntries.filter(entry => entry.id !== entry_id))
    setEntriesCache(prev => ({
      ...prev,
      [selectedUser.id]: entries.filter(entry => entry.id !== entry_id)
    }))
  }

  const handleEditEntryButton = (entryId) => {
    navigation.navigate('EditEntryScreen', { entryId })
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
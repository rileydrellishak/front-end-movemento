import { View, Text, Pressable } from 'react-native'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import EntriesContainer from '../components/containers/EntriesContainer';
import { useState, useEffect, useCallback } from 'react'
import { getAllJournalEntriesForUserAPI, deleteJournalEntryAPI, updateJournalEntryAPI } from '../api/utilities';
import { useData } from '../context/DataContext';
import TextStyles from '../styles/Text'
import ContainerStyles from '../styles/Containers'
import EntryCalendar from '../components/EntryCalendar';

const EntriesScreen = ({ navigation }) => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const { selectedUser, entriesCache, setEntriesCache } = useData();
  const [fetched, setFetched] = useState(new Set())

  const fetchEntries = async () => {
    try {
      setLoading(true)
      if (fetched.has(selectedUser.id)) {
        setEntries(entriesCache[selectedUser.id])
        setLoading(false)
        return
      }
      const newEntries = await getAllJournalEntriesForUserAPI(selectedUser.id)
      setEntries(newEntries)
      setEntriesCache(prev => ({...prev, [selectedUser.id]: newEntries}))
      setFetched(prev => new Set([...prev, selectedUser.id]))
    } catch (error) {
      console.error('error fetch', error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchEntries()
    }, [selectedUser.id, fetched])
  )

  const handleDeleteEntry = (entry_id) => {
    setEntries(prevEntries => {
      const updated = prevEntries.filter(entry => entry.id !== entry_id)
      setEntriesCache(prev => ({
        ...prev,
        [selectedUser.id]: updated
      }))
      return updated
    })
  }

  const handleEditEntryButton = (entry) => {
    navigation.navigate('EditEntryScreen', { entry: entry })
  }

  if (loading) {
    return (
      <View style={[ContainerStyles.base, ContainerStyles.loading]}>
        <Text style={TextStyles.loading}>Loading entries...</Text>
      </View>
    )
  }

  return(
    <View>
      <EntryCalendar />
      <EntriesContainer
        handleEditEntryButton={handleEditEntryButton}
        handleDeleteEntry={handleDeleteEntry}
        data={entries}/>
    </View>
  )
}


export default EntriesScreen;
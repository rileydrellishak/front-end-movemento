import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntriesContainer from '../components/containers/EntriesContainer';
import { useState, useEffect } from 'react'
import { getAllJournalEntriesForUserAPI } from '../api/utilities';
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
  }, [selectedUser])

  if (loading) {
    return (
      <Text>Loading entries...</Text>
    )
  }

  return(
    <View>
      <EntriesContainer data={entries}/>
    </View>
  )
}

export default EntriesScreen
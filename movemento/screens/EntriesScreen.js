import { View, Text, Pressable } from 'react-native'
import { useFocusEffect } from '@react-navigation/native'
import EntriesContainer from '../components/containers/EntriesContainer';
import { useState, useEffect, useCallback } from 'react'
import { getAllJournalEntriesForUserAPI, deleteJournalEntryAPI, updateJournalEntryAPI } from '../api/utilities';
import { useData } from '../context/DataContext';
import TextStyles from '../styles/Text'
import ContainerStyles from '../styles/Containers'
import EntryCalendar from '../components/EntryCalendar';
import ScreenStyles from '../styles/Screens';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay'

const EntriesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false)
  const { selectedUser, entries, setEntries } = useData();

  const handleDeleteEntry = (entry_id) => {
    setEntries(entries.filter(entry => entry.id !== entry_id))
  };

  const handleEditEntryButton = (entry) => {
    navigation.navigate('EditEntryScreen', { entry: entry })
  }

  return(
    <View style={ScreenStyles.entries}>
      <Spinner visible={loading} textContent={'Deleting...'} textStyle={{ color: 'white' }}/>
      <EntryCalendar />
      <EntriesContainer
        handleEditEntryButton={handleEditEntryButton}
        handleDeleteEntry={handleDeleteEntry}
        data={entries}
        loading={loading}
        setLoading={setLoading}/>
    </View>
  )
}


export default EntriesScreen;
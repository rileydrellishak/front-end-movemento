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


const EntriesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true)
  const { selectedUser, entries, setEntries } = useData();

  const handleDeleteEntry = (entry_id) => {
    setEntries(entries.filter(entry => entry.id !== entry_id))
  };

  const handleEditEntryButton = (entry) => {
    navigation.navigate('EditEntryScreen', { entry: entry })
  }

  // if (loading) {
  //   return (
  //     <View style={[ContainerStyles.base, ContainerStyles.loading]}>
  //       <Text style={TextStyles.loading}>Loading entries...</Text>
  //     </View>
  //   )
  // }

  return(
    <View style={ScreenStyles.entries}>
      <EntryCalendar />
      <EntriesContainer
        handleEditEntryButton={handleEditEntryButton}
        handleDeleteEntry={handleDeleteEntry}
        data={entries}/>
    </View>
  )
}


export default EntriesScreen;
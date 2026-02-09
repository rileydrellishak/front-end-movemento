import { View } from 'react-native'
import EntriesContainer from '../components/containers/EntriesContainer';
import { useState } from 'react'
import { useData } from '../context/DataContext';
import EntryCalendar from '../components/EntryCalendar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Spinner from 'react-native-loading-spinner-overlay'
import { useTheme } from 'react-native-paper'

const EntriesScreen = ({ navigation }) => {
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const { selectedUser, entries, setEntries } = useData();

  const handleDeleteEntry = (entry_id) => {
    setEntries(entries.filter(entry => entry.id !== entry_id))
  };

  const handleEditEntryButton = (entry) => {
    navigation.navigate('EditEntryScreen', { entry: entry })
  }

  return(
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
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
import { ScrollView, Text } from 'react-native'
import Entry from './Entry';

const EntriesContainer = ({ loading, setLoading, handleEditEntryButton, handleDeleteEntry, data}) => {
  const newestToOldest = data.sort((a, b) => {
    return new Date(b.created_at) - new Date(a.created_at)
  })

  const renderEntries = newestToOldest.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        entry={entry}
        handleEditEntryButton={handleEditEntryButton}
        onDeleteEntry={handleDeleteEntry}
        loading={loading}
        setLoading={setLoading}
        />
    )
  })
  return (
    <ScrollView style={{flexGrow: 0, flexShrink: 1}}>
      {renderEntries}
    </ScrollView>
  )
};

export default EntriesContainer;
import { ScrollView, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';
import Entry from './Entry';

const EntriesContainer = ({ handleEditEntryButton, handleDeleteEntry, data }) => {

  const renderEntries = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        entry={entry}
        handleEditEntryButton={handleEditEntryButton}
        onDeleteEntry={handleDeleteEntry}
        />
    )
  })
  return (
    <ScrollView style={ContainerStyles.entries}>
      {renderEntries}
    </ScrollView>
  )
};

export default EntriesContainer;
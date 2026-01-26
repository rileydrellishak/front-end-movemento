import { ScrollView, Text } from 'react-native'
import ContainerStyles from '../../styles/Containers';
import Entry from './Entry';

const EntriesContainer = ({ handleEditEntryButton, deleteEntry, data }) => {

  const renderEntries = data.map((entry) => {
    return (
      <Entry 
        key={entry.id}
        id={entry.id}
        reflection={entry.reflection}
        user_id={entry.user_id}
        movements={entry.movements}
        created_at={entry.created_at}
        moods_before={entry.moods_before}
        moods_after={entry.moods_after}
        onDeleteEntry={deleteEntry}
        onEditEntry={handleEditEntryButton}
        />
    )
  })
  return (
    <ScrollView style={ContainerStyles.debugging}>
      {renderEntries}
    </ScrollView>
  )
};

export default EntriesContainer;
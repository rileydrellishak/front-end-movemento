import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useData } from '../context/DataContext';
import ContainerStyles from '../styles/Containers';
import { useJournalEntry } from '../context/JournalEntryContext';

const SelectMovementsScreen = () => {
  const navigation = useNavigation();
  const { movements } = useData();
  const { updateEntry } = useJournalEntry();
  
  return(
    <ScrollView>
      <Text>pick movements</Text>
      <SelectableButtonsContainer variant='movements' data={movements}/>
      <Pressable
        onPress={() => navigation.navigate('SelectMoodsBefore')}
        style={ButtonStyles.next}
      >
        <Text>go to moods before screen</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SelectMovementsScreen
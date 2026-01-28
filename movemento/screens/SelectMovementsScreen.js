import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import ContainerStyles from '../styles/Containers';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import movements from '../data/movements'
import FilterMovements from '../components/FilterMovements';

const SelectMovementsScreen = ({ navigation }) => {
  const { updateEntry } = useJournalEntry();

  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
      if (selectedIds) {
        updateEntry({ movements: selectedIds })
      }
    }, [selectedIds]);
  
  const handleNext = () => {
    navigation.navigate('SelectMoodsBefore')
  }

  return(
    <ScrollView>
      <Text>pick movements</Text>
      <FilterMovements />
      <SelectableButtonsContainer
        data={movements}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        variant='movements'
      />
      <Pressable
        onPress={handleNext}
        style={[ButtonStyles.base, ButtonStyles.next]}
      >
        <Text>go to moods before screen</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SelectMovementsScreen;
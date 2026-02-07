import { ScrollView, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'

const SelectMoodsAfterScreen = ({ navigation }) => {
  const { updateEntry } = useJournalEntry();

  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
      if (selectedIds) {
        updateEntry({ moods_after: selectedIds })
      }
    }, [selectedIds]);
  
  const handleNext = () => {
    navigation.navigate('Reflection')
  }

  return(
    <ScrollView>
      <Text>the after moods</Text>
      <SelectableButtonsContainer
        variant='moods'
        data={moods}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}/>
      <Button
        onPress={handleNext}
      >
        <Text>go to the reflection screen</Text>
      </Button>
    </ScrollView>
  )
}

export default SelectMoodsAfterScreen
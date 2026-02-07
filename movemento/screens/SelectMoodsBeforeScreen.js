import { ScrollView, View, Text, Pressable } from 'react-native'
import { Button } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'

const SelectMoodsBeforeScreen = ({ navigation }) => {
  const { updateEntry } = useJournalEntry();

  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
      if (selectedIds) {
        updateEntry({ moods_before: selectedIds })
      }
    }, [selectedIds]);
  
  const handleNext = () => {
    navigation.navigate('SelectMoodsAfter')
  }

  return(
    <ScrollView>
      <Text>the before moods</Text>
      <SelectableButtonsContainer
        variant='moods'
        data={moods}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}/>
      <Button
        onPress={handleNext}
      >
        <Text>go to the moods after screen</Text>
      </Button>
    </ScrollView>
  )
}

export default SelectMoodsBeforeScreen

{/* <ScrollView>
      <Text>{}</Text>
      <Text>pick movements</Text>
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
    </ScrollView> */}
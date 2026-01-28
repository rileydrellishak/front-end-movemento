import { useNavigation } from '@react-navigation/native'
import { ScrollView, View, Text, Pressable } from 'react-native'
import ButtonStyles from '../styles/Buttons';
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'

const SelectMoodsAfterScreen = () => {
  const navigation = useNavigation();
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
      <Pressable
        onPress={handleNext}
        style={[ButtonStyles.base, ButtonStyles.next]}
      >
        <Text>go to the reflection screen</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SelectMoodsAfterScreen
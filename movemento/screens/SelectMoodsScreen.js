import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ButtonStyles from '../styles/Buttons';
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useData } from '../context/DataContext';
import ContainerStyles from '../styles/Containers';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'

const SelectMoodsScreen = () => {
  const navigation = useNavigation();
  const { moods } = useData();
  const { updateEntry } = useJournalEntry();

  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
      if (selectedIds) {
        updateEntry({ moods_before: selectedIds })
      }
    }, [selectedIds]);
  
  const handleNext = () => {
    navigation.navigate('Reflection')
  }

  return(
    <ScrollView>
      <Text>the before moods</Text>
      <SelectableButtonsContainer
        variant='moods'
        data={moods}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}/>
      <Pressable
        onPress={handleNext}
        style={[ButtonStyles.base, ButtonStyles.next]}
      >
        <Text>go to the moods after screen</Text>
      </Pressable>
    </ScrollView>
  )
}

export default SelectMoodsScreen

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
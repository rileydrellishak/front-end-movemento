import { ScrollView, View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import movements from '../data/movements'
import FilterMovements from '../components/FilterMovements';

const SelectMovementsScreen = ({ navigation }) => {
  const { updateEntry } = useJournalEntry();
  const [search, setSearch] = useState('')
  const [selectedIds, setSelectedIds] = useState([])

  useEffect(() => {
      if (selectedIds) {
        updateEntry({ movements: selectedIds })
      }
    }, [selectedIds]);
  
  const handleNext = () => {
    navigation.navigate('SelectMoodsBefore')
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value.toLowerCase())
  }

  const filteredMovements = movements.filter(m => {
    if (search === '') {
      return m
    } if (m.slug.includes(search.toLowerCase())) {
      return m
    }
  })

  return(
    <ScrollView>
      <Button onPress={() => navigation.navigate('Reflection')}>
        <Text>jump to reflection page</Text>
      </Button>
      <Text>pick movements</Text>
      <FilterMovements search={search} setSearch={setSearch} />
      <SelectableButtonsContainer
        data={filteredMovements}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
        variant='movements'
      />
      <Button
        onPress={handleNext}
      >
        <Text>go to moods before screen</Text>
      </Button>
    </ScrollView>
  )
}

export default SelectMovementsScreen;
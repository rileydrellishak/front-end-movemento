import { ScrollView, View } from 'react-native'
import { Button, useTheme, Text, IconButton } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import movements from '../data/movements'
import FilterMovements from '../components/FilterMovements';
import FilteringButtonsContainer from '../components/containers/FilteringButtonsContainer';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const SelectMovementsScreen = ({ navigation }) => {
  const theme = useTheme()
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

  const movementCategories = movements.reduce((categories, m) => {
    if (!categories.includes(m.category)) {
      categories.push(m.category)
    } return categories
  }, [])

  return(
    <View style={{ 
        flex: 4, 
        padding: 5, 
        margin: 5, 
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{
        alignContent: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'space-evenly'}}>
        <Text variant='titleLarge'>How did you move today?</Text>
        <Text variant='titleMedium'>Select movements</Text>
        <FilterMovements search={search} setSearch={setSearch} />

        <Button
          onPress={() => setSelectedIds([])}
          buttonColor={theme.colors.error}
          labelStyle={{ textAlign: 'center'}}
          style={{width: 'auto'}}
        >
          <Text style={{color: theme.colors.onError, flexShrink: 1, textAlign: 'center'}}>Clear selected movements</Text>
        </Button>
      </View>
      <View style={{flex: 1}}>
        
        <SelectableButtonsContainer
          data={filteredMovements}
          selectedIds={selectedIds}
          setSelectedIds={setSelectedIds}
          variant='movements'
        />
      </View>
      <View style={{flex: 1}}>
        <Button
          onPress={handleNext}
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.onTertiary}
          labelStyle={{fontWeight: 'bold'}}
          icon='arrow-right'
          contentStyle={{flexDirection: 'row-reverse'}}
        >
          go to moods before screen
        </Button>
      </View>
    </View>
  )
}

export default SelectMovementsScreen;
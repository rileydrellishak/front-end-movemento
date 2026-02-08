import { ScrollView, View } from 'react-native'
import { Button, useTheme, Text } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'

const SelectMoodsAfterScreen = ({ navigation }) => {
  const theme = useTheme();
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
    <ScrollView style={{ 
        flex: .95, 
        padding: 5, 
        margin: 5, 
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{
        alignContent: 'center',
      }}>
      <Text variant='titleLarge'>Moods After</Text>
      <Text variant='titleMedium'>How did you feel after moving?</Text>
      <SelectableButtonsContainer
        variant='moods'
        data={moods}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}/>
      <Button
        onPress={handleNext}
        buttonColor={theme.colors.tertiary}
        textColor={theme.colors.onTertiary}
        labelStyle={{fontWeight: 'bold'}}
        icon='arrow-right'
        contentStyle={{flexDirection: 'row-reverse'}}
      >
        go to reflection
      </Button>
    </ScrollView>
  )
}

export default SelectMoodsAfterScreen
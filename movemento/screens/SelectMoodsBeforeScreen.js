import { ScrollView, View, Pressable } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'

const SelectMoodsBeforeScreen = ({ navigation }) => {
  const theme = useTheme()
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
    <ScrollView style={{ 
        flex: .95, 
        padding: 5, 
        margin: 5, 
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{
        alignContent: 'center',
      }}>
      <Text variant='titleLarge'>Moods Before</Text>
      <Text variant='titleMedium'>How did you feel before moving?</Text>
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
        go to moods after screen
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
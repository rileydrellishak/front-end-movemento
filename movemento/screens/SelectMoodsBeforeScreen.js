import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant='titleLarge'>Moods Before</Text>
          <Text variant='titleMedium' style={styles.subtitle}>How did you feel before moving?</Text>
        </View>
        <Button
            onPress={() => setSelectedIds([])}
            mode='outlined'
            textColor={theme.colors.error}
            labelStyle={styles.clearLabel}
            style={styles.clearButton}
            contentStyle={styles.clearContent}
            icon='close-circle-outline'
          >
            Clear Selected Moods
          </Button>
        <View style={styles.list}>
          <SelectableButtonsContainer
            variant='moods'
            data={moods}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
          />
        </View>
      </ScrollView>
      <View style={[styles.footer, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.outline }]}>
        <Button
          onPress={handleNext}
          buttonColor={theme.colors.tertiary}
          textColor={theme.colors.onTertiary}
          labelStyle={styles.nextLabel}
          icon='arrow-right'
          contentStyle={styles.nextContent}
        >
          Next: Select Moods After
        </Button>
      </View>
    </SafeAreaView>
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

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 96 },
  header: { marginBottom: 12 },
  subtitle: { marginTop: 4, marginBottom: 12, opacity: 0.8 },
  list: { marginVertical: 8 },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
  },
  nextLabel: { fontWeight: 'bold' },
  nextContent: { flexDirection: 'row-reverse' },
})
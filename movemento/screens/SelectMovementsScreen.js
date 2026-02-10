import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, useTheme, Text } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import movements from '../data/movements'
import FilterMovements from '../components/FilterMovements';
import { SafeAreaView } from 'react-native-safe-area-context'

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
    navigation.navigate('Select Moods Before')
  }

  const filteredMovements = movements.filter(m => {
    if (search === '') {
      return m
    } if (m.slug.includes(search.toLowerCase())) {
      return m
    }
  })

  return(
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant='titleLarge'>How did you move today?</Text>
          <Text variant='titleMedium' style={styles.subtitle}>Select movements</Text>
          <FilterMovements search={search} setSearch={setSearch} />
          <Button
            onPress={() => setSelectedIds([])}
            mode='outlined'
            textColor={theme.colors.error}
            labelStyle={styles.clearLabel}
            style={styles.clearButton}
            contentStyle={styles.clearContent}
            icon='close-circle-outline'
          >
            Clear Selected Movements
          </Button>
        </View>
        <View style={styles.list}>
          <SelectableButtonsContainer
            data={filteredMovements}
            selectedIds={selectedIds}
            setSelectedIds={setSelectedIds}
            variant='movements'
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
          Next: Select Moods Before
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 32, },
  header: { marginBottom: 12 },
  subtitle: { marginTop: 4, marginBottom: 12, opacity: 0.8 },
  clearButton: { marginTop: 8, borderRadius: 999, alignSelf: 'center' },
  clearLabel: { textAlign: 'center', fontSize: 12, lineHeight: 16 },
  clearContent: { height: 36, paddingHorizontal: 12 },
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

export default SelectMovementsScreen;
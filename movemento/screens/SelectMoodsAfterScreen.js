import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, useTheme, Text } from 'react-native-paper'
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react'
import moods from '../data/moods'
import { SafeAreaView } from 'react-native-safe-area-context'

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
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant='titleLarge'>Moods After</Text>
          <Text variant='titleMedium' style={styles.subtitle}>How do you feel after moving?</Text>
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
          Next: Reflect, Add Photo, Save
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default SelectMoodsAfterScreen

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
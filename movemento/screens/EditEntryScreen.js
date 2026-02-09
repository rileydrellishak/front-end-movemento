import { View, ScrollView, Alert, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'
import { List, Text, useTheme } from 'react-native-paper'
import EditMovementsAccordion from '../components/containers/EditMovementsAccordion'
import EditPhotoAccordion from '../components/containers/EditPhotoAccordion'
import SaveChangesButton from '../components/buttons/SaveChangesButton'
import { updateJournalEntryAPI, photoPostRequest } from '../api/utilities'
import { useJournalEntry } from '../context/JournalEntryContext'
import { useNavigation } from '@react-navigation/native'
import EditMoodsAccordion from '../components/containers/EditMoodsAccordion'
import EditReflectionAccordion from '../components/containers/EditReflectionAccordion'
import Spinner from 'react-native-loading-spinner-overlay'
import { SafeAreaView } from 'react-native-safe-area-context'

const EditEntryScreen = ({ route }) => {
  const { entry } = route.params
  const theme = useTheme()
  const navigation = useNavigation()
  const { updateEntry } = useJournalEntry();
  const {entries, setEntries} = useData();
  const [movementsExpanded, setMovementsExpanded] = useState(false)
  const [moodsExpanded, setMoodsExpanded] = useState(false)
  const [reflectionExpanded, setReflectionExpanded] = useState(false)
  const [selectedMovements, setSelectedMovements] = useState(entry.movements)
  const [selectedMoodsBefore, setSelectedMoodsBefore] = useState(entry.moodsBefore)
  const [selectedMoodsAfter, setSelectedMoodsAfter] = useState(entry.moodsAfter)
  const [reflectionText, setReflectionText] = useState(entry.reflection)
  const [imgPath, setImgPath] = useState(entry.img_path)
  const [loading, setLoading] = useState(false)

  const updateEntries = (updatedEntry) => {
    const updatedEntriesArray = entries.map((entry, id) => {
      if (id === updatedEntry.id) {
        return updatedEntry
      } return entry
    })
    setEntries(updatedEntriesArray)
  }

  const confirmSave = () => {
        Alert.alert(
          'Entry Saved',
          '',
          [
            {
              text: 'Go to Entries',
              onPress: () => {
                navigation.popToTop();
              }
            }
          ]
        )
      }
  
  const handleSaveChanges = async () => {
    setLoading(true)
    console.log('clicked the button')
    entry.movements = selectedMovements
    entry.moodsBefore = selectedMoodsBefore
    entry.moodsAfter = selectedMoodsAfter
    entry.reflection = reflectionText
    entry.img_path = imgPath
    try {
      const savedEntry = await updateJournalEntryAPI(entry.user_id, entry.id, entry)
      const updatedImgPath = await photoPostRequest(entry.img_path, entry.id)
      entry.img_path = updatedImgPath.img_path
      updateEntries(entry)
      setLoading(false)
      confirmSave()
    } catch (error) {
      console.error('err in handle save changes: ', error)
    }
  }

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Spinner visible={loading} textContent={'Saving...'} textStyle={{ color: 'white' }}/>
        <View style={styles.header}>
          <Text variant='titleLarge'>Edit Entry</Text>
          <Text variant='titleMedium' style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Update movements, moods, reflection, and photo
          </Text>
        </View>

        <View
          style={[
            styles.sectionCard,
            { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline },
          ]}
        >
          <List.Section title='Details'>
            <View style={[styles.sectionItem, { borderBottomColor: theme.colors.outlineVariant }]}>
              <EditMovementsAccordion
                selectedMovements={selectedMovements}
                setSelectedMovements={setSelectedMovements}
                movementsExpanded={movementsExpanded}
                setMovementsExpanded={setMovementsExpanded}
              />
            </View>

            <View style={[styles.sectionItem, { borderBottomColor: theme.colors.outlineVariant }]}>
              <EditMoodsAccordion
                selectedMoodsBefore={selectedMoodsBefore}
                setSelectedMoodsBefore={setSelectedMoodsBefore}
                selectedMoodsAfter={selectedMoodsAfter}
                setSelectedMoodsAfter={setSelectedMoodsAfter}
                moodsExpanded={moodsExpanded}
                setMoodsExpanded={setMoodsExpanded}
              />
            </View>

            <View style={[styles.sectionItem, { borderBottomColor: theme.colors.outlineVariant }]}>
              <EditReflectionAccordion
                reflectionText={reflectionText}
                setReflectionText={setReflectionText}
                reflectionExpanded={reflectionExpanded}
                setReflectionExpanded={setReflectionExpanded}
              />
            </View>

            <View style={styles.sectionItemLast}>
              <EditPhotoAccordion
                imgPath={imgPath}
                setImgPath={setImgPath}
              />
            </View>
          </List.Section>
        </View>
      </ScrollView>
      <View style={[styles.footer, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.outline }]}>
        <SaveChangesButton saveChanges={handleSaveChanges}/>
      </View>
    </SafeAreaView>
  )
}

export default EditEntryScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 96 },
  header: { marginBottom: 12 },
  subtitle: { marginTop: 4, marginBottom: 12, opacity: 0.8 },
  sectionCard: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingBottom: 4,
  },
  sectionItem: {
    borderBottomWidth: 1,
    paddingBottom: 4,
  },
  sectionItemLast: { paddingBottom: 4 },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
  },
})
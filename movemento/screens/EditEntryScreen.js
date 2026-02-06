import { View, Text, Pressable, ScrollView, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import ButtonStyles from '../styles/Buttons'
import ContainerStyles from '../styles/Containers'
import { useData } from '../context/DataContext'
import ReflectionTextInput from '../components/ReflectionTextInput'
import ScreenStyles from '../styles/Screens'
import { List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import EditMovementsAccordion from '../components/containers/EditMovementsAccordion'
import EditPhotoAccordion from '../components/containers/EditPhotoAccordion'
import SaveChangesButton from '../components/buttons/SaveChangesButton'
import { updateJournalEntryAPI } from '../api/utilities'
import { useJournalEntry } from '../context/JournalEntryContext'
import { useNavigation } from '@react-navigation/native'

const EditEntryScreen = ({ route }) => {
  const { entry } = route.params
  const navigation = useNavigation()
  const { updateEntry } = useJournalEntry();
  const {entries, setEntries} = useData();
  const [movementsExpanded, setMovementsExpanded] = useState(true)
  const [moodsExpanded, setMoodsExpanded] = useState(true)
  const [reflectionExpanded, setReflectionExpanded] = useState(true)
  const [selectedMovements, setSelectedMovements] = useState(entry.movements)
  const [selectedMoodsBefore, setSelectedMoodsBefore] = useState(entry.moodsBefore)
  const [selectedMoodsAfter, setSelectedMoodsAfter] = useState(entry.moodsAfter)
  const [reflectionText, setReflectionText] = useState(entry.reflection)
  const [imgPath, setImgPath] = useState(entry.img_path)

  const updateEntries = (updatedEntry) => {
    console.log(updatedEntry)
    const updatedEntriesArray = entries.map((entry, id) => {
      if (id === updatedEntry.id) {
        return updatedEntry
      } return entry
    })
    console.log(updatedEntriesArray)
    setEntries(updatedEntriesArray)
  }

  const confirmSave = () => {
        Alert.alert(
          'Entry Saved',
          '',
          [
            {
              text: 'Go Home',
              onPress: () => {
                navigation.popToTop();
              }
            }
          ]
        )
      }
  
  const handleSaveChanges = async () => {
    console.log('clicked the button')
    entry.movements = selectedMovements
    entry.moodsBefore = selectedMoodsBefore
    entry.moodsAfter = selectedMoodsAfter
    entry.reflection = reflectionText
    try {
      const savedEntry = await updateJournalEntryAPI(entry.user_id, entry.id, entry)
      updateEntries(entry)
      confirmSave()
    } catch (error) {
      console.error('err in handle save changes: ', error)
    }
  }

  return (
    <ScrollView style={[ScreenStyles.editEntries]}>
      <Text>the id for the currently being edited entry is {entry.id} and it belongs to user with id of {entry.user_id}</Text>
      <Text>the object being sent as updates looks like...</Text>
      <List.Section title='Accordions!'>
        <EditMovementsAccordion 
          selectedMovements={selectedMovements}
          setSelectedMovements={setSelectedMovements}
          movementsExpanded={movementsExpanded}
          setMovementsExpanded={setMovementsExpanded}/>

        <List.Accordion title='Select Moods'
          left={props => <List.Icon {...props} icon='emoticon-happy-outline'/>}
          expanded={moodsExpanded}
          onPress={() => setMoodsExpanded(!moodsExpanded)}
        />
        <List.Accordion title='Reflection'
          left={props => <List.Icon {...props} icon='thought-bubble'/>}
          expanded={reflectionExpanded}
          onPress={() => setReflectionExpanded(!reflectionExpanded)}>
            <ReflectionTextInput reflectionText={reflectionText} setReflectionText={setReflectionText}/>
        </List.Accordion>
        <EditPhotoAccordion/>
      </List.Section>
      <SaveChangesButton saveChanges={handleSaveChanges}/>
    </ScrollView>
  )
}

export default EditEntryScreen;
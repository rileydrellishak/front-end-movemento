import { View, Text, Pressable, ScrollView, Alert } from 'react-native'
import { useState, useEffect } from 'react'
import ButtonStyles from '../styles/Buttons'
import { useData } from '../context/DataContext'
import ScreenStyles from '../styles/Screens'
import { ActivityIndicator, List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import EditMovementsAccordion from '../components/containers/EditMovementsAccordion'
import EditPhotoAccordion from '../components/containers/EditPhotoAccordion'
import SaveChangesButton from '../components/buttons/SaveChangesButton'
import { updateJournalEntryAPI } from '../api/utilities'
import { useJournalEntry } from '../context/JournalEntryContext'
import { useNavigation } from '@react-navigation/native'
import EditMoodsAccordion from '../components/containers/EditMoodsAccordion'
import EditReflectionAccordion from '../components/containers/EditReflectionAccordion'
import SavingAlert from '../components/LoadingIndicator'
import LoadingIndicator from '../components/LoadingIndicator'
import ActivityIndicatorStyles from '../styles/ActivityIndicators'
import Spinner from 'react-native-loading-spinner-overlay'

const EditEntryScreen = ({ route }) => {
  const { entry } = route.params
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
    try {
      const savedEntry = await updateJournalEntryAPI(entry.user_id, entry.id, entry)
      updateEntries(entry)
      setLoading(false)
      confirmSave()
    } catch (error) {
      console.error('err in handle save changes: ', error)
    }
  }

  return (
    <ScrollView style={[ScreenStyles.editEntries]}>
      <Spinner visible={loading} textContent={'Saving...'} textStyle={{ color: 'white' }}/>
      <Text>
        the id for the currently being edited entry is {entry.id} and it belongs to user with id of {entry.user_id}
      </Text>

      <List.Section title='Accordions!'>
        
        <EditMovementsAccordion 
          selectedMovements={selectedMovements}
          setSelectedMovements={setSelectedMovements}
          movementsExpanded={movementsExpanded}
          setMovementsExpanded={setMovementsExpanded}/>

        <EditMoodsAccordion 
          selectedMoodsBefore={selectedMoodsBefore}
          setSelectedMoodsBefore={setSelectedMoodsBefore}
          selectedMoodsAfter={selectedMoodsAfter}
          setSelectedMoodsAfter={setSelectedMoodsAfter}
          moodsExpanded={moodsExpanded}
          setMoodsExpanded={setMoodsExpanded}
        />

        <EditReflectionAccordion 
          reflectionText={reflectionText}
          setReflectionText={setReflectionText}
          reflectionExpanded={reflectionExpanded}
          setReflectionExpanded={setReflectionExpanded}
        />

        <EditPhotoAccordion
          imgPath={imgPath}
          setImgPath={setImgPath}
          
        />

      </List.Section>

      <SaveChangesButton saveChanges={handleSaveChanges}/>

    </ScrollView>
  )
}

export default EditEntryScreen;
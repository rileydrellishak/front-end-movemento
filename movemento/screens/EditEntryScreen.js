import { View, Text, Pressable } from 'react-native'
import { useState } from 'react'
import ButtonStyles from '../styles/Buttons'
import ContainerStyles from '../styles/Containers'
import { useData } from '../context/DataContext'
import ReflectionTextInput from '../components/ReflectionTextInput'
import ScreenStyles from '../styles/Screens'
import { List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectableButtonsContainer from '../components/containers/SelectableButtonsContainer'
import movements from '../data/movements'

const EditEntryScreen = ({ route }) => {
  const { entry } = route.params
  const { useJournalEntry } = useData();
  const [expanded, setExpanded] = useState(true)

  const handlePress = () => {
    setExpanded(!expanded);
  }

  return (
    <SafeAreaView style={[ScreenStyles.editEntries]}>
      <Text>the id for the currently being edited entry is {entry.id} and it belongs to user with id of {entry.user_id}</Text>
      <List.Section title='Accordions!'>
        <List.Accordion title='Select Movements'
          left={props => <List.Icon {...props} icon='dumbbell'/>}
          expanded={expanded}
          onPress={handlePress}
        >


        </List.Accordion>
        <List.Accordion title='Select Moods'
          left={props => <List.Icon {...props} icon='emoticon-happy-outline'/>}
          expanded={expanded}
          onPress={handlePress}
        >
          


        </List.Accordion>
        <List.Accordion title='Reflection'
          left={props => <List.Icon {...props} icon='thought-bubble'/>}
          expanded={expanded}
          onPress={handlePress}>
            <ReflectionTextInput reflectionText={entry.reflection}/>


        </List.Accordion>
      </List.Section>
      <Pressable style={[ButtonStyles.base, ButtonStyles.save]}>
        <Text>save changes</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default EditEntryScreen;
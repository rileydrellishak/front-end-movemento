import { View, Text, Pressable } from 'react-native'
import ButtonStyles from '../styles/Buttons'
import ContainerStyles from '../styles/Containers'
import { useData } from '../context/DataContext'
import ReflectionTextInput from '../components/ReflectionTextInput'

const EditEntryScreen = ({ route }) => {
  const { entry } = route.params
  const { useJournalEntry } = useData();

  return (
    <View style={[ContainerStyles.debugging, ContainerStyles.entry]}>
      <Text>the id for the currently being edited entry is {entry.id} and it belongs to user with id of {entry.user_id}</Text>
      <ReflectionTextInput/>
      <Pressable style={[ButtonStyles.base, ButtonStyles.save]}>
        <Text>save changes</Text>
      </Pressable>
      <Text>{entry.reflection}</Text>
    </View>
  )
}

export default EditEntryScreen;
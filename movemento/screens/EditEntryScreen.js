import { View, Text, Pressable } from 'react-native'
import ButtonStyles from '../styles/Buttons'
import ContainerStyles from '../styles/Containers'

const EditEntryScreen = ({ route }) => {
  const { entryId } = route.params
  return (
    <View style={[ContainerStyles.debugging, ContainerStyles.entry]}>
      <Text>the id for the currently being edited entry is {entryId}</Text>
      <Pressable style={[ButtonStyles.base, ButtonStyles.save]}>
        <Text>save changes</Text>
      </Pressable>
    </View>
  )
}

export default EditEntryScreen;
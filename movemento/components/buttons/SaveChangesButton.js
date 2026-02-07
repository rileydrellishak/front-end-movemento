import { Text } from "react-native"
import { Button } from 'react-native-paper'

const SaveChangesButton = ({ saveChanges }) => {

  return (
    <Button
      onPress={() => saveChanges()}
    >
      <Text>Save Changes</Text>
    </Button>
  )
}

export default SaveChangesButton
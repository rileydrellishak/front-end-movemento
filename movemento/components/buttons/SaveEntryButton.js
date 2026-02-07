import { Text } from "react-native"
import { Button } from 'react-native-paper'
import { Alert } from 'react-native'

const SaveEntryButton = ({ saveEntry }) => {

  return (
    <Button onPress={saveEntry}>
      <Text>Save Entry</Text>
    </Button>
  )
}

export default SaveEntryButton
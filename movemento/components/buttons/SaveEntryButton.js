import { Text } from "react-native"
import { Button } from 'react-native-paper'
import { Alert } from 'react-native'
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"

const SaveEntryButton = ({ saveEntry }) => {

  return (
    <Button onPress={saveEntry}>
      <Text>Save Entry</Text>
    </Button>
  )
}

export default SaveEntryButton
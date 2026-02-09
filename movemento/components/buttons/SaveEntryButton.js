import { Text } from "react-native"
import { Button, useTheme } from 'react-native-paper'
import { Alert } from 'react-native'

const SaveEntryButton = ({ saveEntry }) => {
  const theme = useTheme()
  return (
    <Button
      onPress={saveEntry}
      buttonColor={theme.colors.tertiary}
      textColor={theme.colors.onTertiary}
      labelStyle={{fontWeight: 'bold'}}
    >
        Save Entry
      </Button>
  )
}

export default SaveEntryButton
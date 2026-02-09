import { Text } from "react-native"
import { Button, useTheme } from 'react-native-paper'

const SaveChangesButton = ({ saveChanges }) => {
  const theme = useTheme()

  return (
    <Button
      onPress={() => saveChanges()}
      buttonColor={theme.colors.tertiary}
      textColor={theme.colors.onTertiary}
      labelStyle={{ fontWeight: 'bold' }}
    >
      <Text>Save Changes</Text>
    </Button>
  )
}

export default SaveChangesButton
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
      Save Changes
    </Button>
  )
}

export default SaveChangesButton
import { Button, useTheme } from 'react-native-paper'

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
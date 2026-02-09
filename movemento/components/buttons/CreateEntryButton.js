import { Button, Text, useTheme } from 'react-native-paper'

const CreateEntryButton = ({ onPress }) => {
  const theme = useTheme()
  return (
    <Button
      onPress={onPress}
      style={{ backgroundColor: theme.colors.primary}}
    >
      <Text style={{ color: theme.colors.onPrimary}}>Create Entry</Text>
    </Button>
  )
};

export default CreateEntryButton;
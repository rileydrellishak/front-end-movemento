import { Button, useTheme } from 'react-native-paper'

const CreateEntryButton = ({ onPress }) => {
  const theme = useTheme()
  return (
    <Button
      onPress={onPress}
      style={{ backgroundColor: theme.colors.primary, height: 50, justifyContent: 'center'}}
      labelStyle={{ color: theme.colors.onPrimary, fontSize: 18, fontWeight: 'bold'}}
    >
      Create Entry
    </Button>
  )
};

export default CreateEntryButton;
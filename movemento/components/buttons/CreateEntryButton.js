import { Button, Text } from 'react-native-paper'

const CreateEntryButton = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
    >
      <Text>Create Entry</Text>
    </Button>
  )
};

export default CreateEntryButton;
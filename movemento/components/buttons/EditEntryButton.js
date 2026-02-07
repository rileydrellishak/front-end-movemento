import { Pressable, Text } from "react-native"
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const EditEntryButton = ({ entry }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('EditEntryScreen', { entry })
  }

  return (
    <Button onPress={handlePress}>
      <Text>Edit</Text>
    </Button>
  )
}

export default EditEntryButton;
import { Pressable, Text } from "react-native"
import ButtonStyles from "../../styles/Buttons"
import TextStyles from "../../styles/Text"
import { useNavigation } from '@react-navigation/native'

const EditEntryButton = ({ entry }) => {
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('EditEntryScreen', { entry })
  }

  return (
    <Pressable style={[ButtonStyles.base, ButtonStyles.edit, ButtonStyles.debugging]} onPress={handlePress}>
      <Text style={TextStyles.edit}>Edit</Text>
    </Pressable>
  )
}

export default EditEntryButton;
import { Button, useTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const EditEntryButton = ({ entry }) => {
  const theme = useTheme();
  const navigation = useNavigation()

  const handlePress = () => {
    navigation.navigate('EditEntryScreen', { entry })
  }

  return (
    <Button
      buttonColor={theme.colors.primary}
      textColor={theme.colors.onPrimary}
      mode='contained-tonal'
      onPress={handlePress}
      icon='file-document-edit-outline'
      contentStyle={{flexDirection: 'row-reverse'}}
    >
      Edit Entry
    </Button>
  )
}

export default EditEntryButton;
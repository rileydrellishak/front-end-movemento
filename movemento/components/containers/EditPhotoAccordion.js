import { View, Image, StyleSheet } from 'react-native'
import { Button, List, Text, useTheme } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker'

const EditPhotoAccordion = ({ imgPath, setImgPath }) => {
  const theme = useTheme()
  const handleAddPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.8,
      allowsEditing: true,
    })

    if (!result.canceled) {
      setImgPath(result.assets[0].uri);
    }
  }

  return (
    <List.Accordion
      title='Select photo'
      left={props => <List.Icon {...props} icon='camera'/>}
    >
      <View
        style={[
          styles.card,
          { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline },
        ]}
      >
        <Text variant='titleSmall' style={[styles.cardTitle, { color: theme.colors.onSurfaceVariant }]}
        >
          Photo
        </Text>
        <View style={styles.actions}>
          {imgPath && (
            <Image
              source={{ uri: imgPath }}
              style={[styles.photo, { borderColor: theme.colors.outline }]}
              resizeMode='cover'
            />
          )}
          <Button
            onPress={handleAddPhoto}
            icon='camera-outline'
            contentStyle={styles.actionContent}
            buttonColor={theme.colors.primary}
            labelStyle={{ color: theme.colors.onPrimary }}
          >
            {imgPath ? 'Change Photo' : 'Add Photo'}
          </Button>
          {imgPath && (
            <Button
              onPress={() => setImgPath('')}
              icon='trash-can-outline'
              contentStyle={styles.actionContent}
              buttonColor={theme.colors.error}
              labelStyle={{ color: theme.colors.onError }}
            >
              Remove Photo
            </Button>
          )}
        </View>
      </View>
    </List.Accordion>
  )
}

export default EditPhotoAccordion;

const styles = StyleSheet.create({
  card: {
    marginBottom: 8,
    padding: 12,
    paddingLeft: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  cardTitle: { marginBottom: 8 },
  actions: { gap: 8 },
  actionContent: { flexDirection: 'row-reverse' },
  photo: {
    width: '100%',
    maxWidth: 320,
    aspectRatio: 1,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: 'center',
    borderWidth: 1,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
})

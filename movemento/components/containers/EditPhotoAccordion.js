import { View, Text, ScrollView, Image } from 'react-native'
import { Button } from 'react-native-paper'
import { useState } from 'react'
import ContainerStyles from '../../styles/Containers'
import { useData } from '../../context/DataContext'
import ReflectionTextInput from '../ReflectionTextInput'
import ScreenStyles from '../../styles/Screens'
import { List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import EntryImage from './EntryImage'
import * as ImagePicker from 'expo-image-picker'

const EditPhotoAccordion = ({ imgPath, setImgPath }) => {
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
      <Button
        onPress={handleAddPhoto}>
          <Text>{imgPath ? 'change photo': 'add photo'}</Text>
      </Button>

      {imgPath && (
        <View>
          <Button
            onPress={() => setImgPath('')}
          >
              <Text>remove photo</Text>
          </Button>
          <Image source={{ uri: imgPath }} style={{ width: 120, height: 120, borderRadius: 8}}/>
        </View>
      )}
    </List.Accordion>
  )
}

export default EditPhotoAccordion;

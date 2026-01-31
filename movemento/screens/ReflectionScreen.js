import { View, Text, Pressable, Image } from 'react-native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import SaveEntryButton from '../components/buttons/SaveEntryButton';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import ButtonStyles from '../styles/Buttons';
import * as ImagePicker from 'expo-image-picker'

const ReflectionScreen = ({ navigation }) => {
  const { entry, updateEntry, resetEntry } = useJournalEntry();
  const [photoURI, setPhotoURI] = useState('')
  const [reflectionText, setReflectionText] = useState('')

  useEffect(() => {
      if (reflectionText) {
        updateEntry({ reflection: reflectionText })
      }
      if (photoURI) {
        updateEntry({ photoURI: photoURI })
      }
    }, [reflectionText, photoURI]);

  const handleAddPhoto = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.8,
      allowsEditing: true,
    })

    if (!result.canceled) {
      setPhotoURI(result.assets[0].uri);
    }
  }
  
  return(
    <View>
      <ReflectionTextInput
        reflectionText={reflectionText}
        setReflectionText={setReflectionText}
      />
      <Pressable style={[ButtonStyles.base, ButtonStyles.debugging]}
      onPress={handleAddPhoto}
      >
        <Text>{photoURI ? 'change photo': 'add photo'}</Text>
      </Pressable>
      {photoURI && (
        <Image source={{ uri: photoURI}} style={{ width: 120, height: 120, borderRadius: 8}}/>
      )}
      <SaveEntryButton navigation={navigation} entry={entry} resetEntry={resetEntry}/>
    </View>
  )
}

export default ReflectionScreen
import { View, Text, Pressable, Image, Alert } from 'react-native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import SaveEntryButton from '../components/buttons/SaveEntryButton';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import ButtonStyles from '../styles/Buttons';
import * as ImagePicker from 'expo-image-picker'
import { useData } from '../context/DataContext'
import { createJournalEntryAPI } from '../api/utilities'

const ReflectionScreen = ({ navigation }) => {
  const { entry, updateEntry, resetEntry } = useJournalEntry();
  const [photoURI, setPhotoURI] = useState('')
  const [reflectionText, setReflectionText] = useState('')
  const { addEntryToCache, selectedUser, setEntriesCache, entriesCache } = useData();

  useEffect(() => {
      if (reflectionText) {
        updateEntry({ reflection: reflectionText })
      }
      if (photoURI) {
        updateEntry({ img_path: photoURI })
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

  const confirmSave = (newEntry) => {
      Alert.alert(
        'Entry Saved',
        '',
        [
          {
            text: 'Go Home',
            onPress: () => {
              resetEntry();
              navigation.getParent()?.goBack();
            }
          }
        ]
      )
    }

  const saveEntry = async () => {
    const newEntry = await createJournalEntryAPI(entry)
    addEntryToCache(entry.user_id, newEntry)
    confirmSave(newEntry)
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
        <>
        <Pressable style={[ButtonStyles.base, ButtonStyles.debugging]} onPress={() => setPhotoURI('')}>
          <Text>remove photo</Text>
        </Pressable>
        <Image source={{ uri: photoURI }} style={{ width: 120, height: 120, borderRadius: 8}}/>
        </>
      )}
      <SaveEntryButton navigation={navigation} entry={entry} resetEntry={resetEntry} saveEntry={saveEntry}/>
    </View>
  )
}

export default ReflectionScreen
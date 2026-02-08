import { View, Image, Alert, ScrollView } from 'react-native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import { Button, useTheme, Text } from 'react-native-paper'
import SaveEntryButton from '../components/buttons/SaveEntryButton';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { useData } from '../context/DataContext'
import { createJournalEntryAPI, photoPostRequest, convertEntryFromAPI } from '../api/utilities'
import Spinner from 'react-native-loading-spinner-overlay';

const ReflectionScreen = ({ navigation }) => {
  const theme = useTheme();
  const { entry, updateEntry, resetEntry } = useJournalEntry();
  const [photoURI, setPhotoURI] = useState('')
  const [reflectionText, setReflectionText] = useState('')
  const { selectedUser, entries, setEntries } = useData();
  const [newEntryId, setNewEntryId] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
      if (reflectionText) {
        updateEntry({ reflection: reflectionText })
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

  const updateEntries = (newEntry) => {
    setEntries(prev => [
      ...prev,
      newEntry
    ])
  }

  const saveEntry = async () => {
    setLoading(true)
    const newEntryAPI = await createJournalEntryAPI(entry)
    
    let postedPhoto = null
    if (photoURI) {
      postedPhoto = await photoPostRequest(photoURI, newEntryAPI.id)
    }
    const newEntry = convertEntryFromAPI(newEntryAPI)
    
    if (postedPhoto) {
      newEntry.img_path = postedPhoto.img_path
    }
    updateEntries(newEntry)
    setLoading(false)
    confirmSave(newEntry)
  }
  
  return(
    <ScrollView
      style={{ 
        flex: .95, 
        padding: 5, 
        margin: 5, 
        backgroundColor: theme.colors.background,
      }}
      contentContainerStyle={{
        alignContent: 'center',
      }}
    >
      <Spinner visible={loading} textContent={'Saving...'} textStyle={{ color: 'white' }}/>
      <Text variant='titleLarge'>Reflection</Text>
      <Text variant='titleMedium'>How did moving impact your day?</Text>
      <ReflectionTextInput
        reflectionText={reflectionText}
        setReflectionText={setReflectionText}
      />
      <Button
        onPress={handleAddPhoto}
        icon='camera-outline'
        contentStyle={{flexDirection: 'row-reverse'}}
        buttonColor={theme.colors.primary}
        labelStyle={{color: theme.colors.onPrimary}}
      >
        {photoURI ? 'change photo': 'add photo'}
      </Button>
      {photoURI && (
        <>
        <Button
          onPress={() => setPhotoURI('')}
          icon='trash-can-outline'
          contentStyle={{flexDirection: 'row-reverse'}}
          buttonColor={theme.colors.error}
          labelStyle={{color: theme.colors.onError}}
          >
          remove photo
        </Button>
        <Image source={{ uri: photoURI }} style={{ width: 120, height: 120, borderRadius: 8}}/>
        </>
      )}
      <SaveEntryButton saveEntry={saveEntry}/>
    </ScrollView>
  )
}

export default ReflectionScreen
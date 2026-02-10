import { View, Image, Alert, ScrollView, StyleSheet } from 'react-native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import { Button, useTheme, Text } from 'react-native-paper'
import SaveEntryButton from '../components/buttons/SaveEntryButton';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker'
import { useData } from '../context/DataContext'
import { createJournalEntryAPI, photoPostRequest, convertEntryFromAPI } from '../api/utilities'
import Spinner from 'react-native-loading-spinner-overlay';
import { SafeAreaView } from 'react-native-safe-area-context'

const ReflectionScreen = ({ navigation }) => {
  const theme = useTheme();
  const { entry, updateEntry, resetEntry } = useJournalEntry();
  const [photoURI, setPhotoURI] = useState('')
  const [reflectionText, setReflectionText] = useState('')
  const { setEntries } = useData();

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
      newEntry,
      ...prev
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
    <SafeAreaView style={[styles.safeArea, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Spinner visible={loading} textContent={'Saving...'} textStyle={{ color: 'white' }}/>
        <View style={styles.header}>
          <Text variant='titleLarge'>Reflection</Text>
          <Text variant='titleMedium' style={styles.subtitle}>How did moving impact your day?</Text>
        </View>
        <ReflectionTextInput
          reflectionText={reflectionText}
          setReflectionText={setReflectionText}
        />
        <View
          style={[
            styles.card,
            { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline },
          ]}
        >
          <Text
            variant='titleSmall'
            style={[styles.cardTitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Photo
          </Text>
          <View style={styles.actions}>
            { photoURI && <Image
              source={{ uri: photoURI }}
              style={[styles.photo, { borderColor: theme.colors.outline }]}
              resizeMode='cover'
            />}
            <Button
              onPress={handleAddPhoto}
              icon='camera-outline'
              contentStyle={styles.actionContent}
              buttonColor={theme.colors.primary}
              labelStyle={{color: theme.colors.onPrimary}}
            >
              {photoURI ? 'Change Photo': 'Add Photo'}
            </Button>
            {photoURI && (
              <>
                <Button
                  onPress={() => setPhotoURI('')}
                  icon='trash-can-outline'
                  contentStyle={styles.actionContent}
                  buttonColor={theme.colors.error}
                  labelStyle={{color: theme.colors.onError}}
                >
                  Remove Photo
                </Button>
              </>
            )}
          </View>
        </View>
      </ScrollView>
      <View style={[styles.footer, { backgroundColor: theme.colors.surface, borderTopColor: theme.colors.outline }]}>
        <SaveEntryButton saveEntry={saveEntry} />
      </View>
    </SafeAreaView>
  )
}

export default ReflectionScreen

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 96 },
  header: { marginBottom: 12 },
  subtitle: { marginTop: 4, marginBottom: 12, opacity: 0.8 },
  card: {
    marginTop: 8,
    padding: 12,
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
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#e6e6e6',
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 6,
  },
})
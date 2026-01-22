import { View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import SaveEntryButton from '../components/buttons/SaveEntryButton';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';

const ReflectionScreen = () => {
  const navigation = useNavigation();
  const { updateEntry } = useJournalEntry();

  const [reflectionText, setReflectionText] = useState('')

  useEffect(() => {
      if (reflectionText) {
        updateEntry({ reflection: reflectionText })
      }
    }, [reflectionText]);

  const handleSave = () => {
    //make the api post request
  }
  
  return(
    <View>
      <ReflectionTextInput
        reflectionText={reflectionText}
        setReflectionText={setReflectionText}
      />
      <SaveEntryButton navigation={navigation}/>
    </View>
  )
}

export default ReflectionScreen
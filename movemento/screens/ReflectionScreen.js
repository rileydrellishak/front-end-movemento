import { View, Text, Pressable } from 'react-native'
import ReflectionTextInput from '../components/ReflectionTextInput';
import SaveEntryButton from '../components/buttons/SaveEntryButton';
import { useJournalEntry } from '../context/JournalEntryContext';
import { useState, useEffect } from 'react';
import ButtonStyles from '../styles/Buttons'

const ReflectionScreen = ({ navigation }) => {
  const { entry, updateEntry, resetEntry } = useJournalEntry();

  const [reflectionText, setReflectionText] = useState('')

  useEffect(() => {
      if (reflectionText) {
        updateEntry({ reflection: reflectionText })
      }
    }, [reflectionText]);
  
  return(
    <View>
      <ReflectionTextInput
        reflectionText={reflectionText}
        setReflectionText={setReflectionText}
      />
      <Pressable style={[ButtonStyles.base, ButtonStyles.debugging]}>
        <Text>Add photo</Text>
      </Pressable>
      <SaveEntryButton navigation={navigation} entry={entry} resetEntry={resetEntry}/>
    </View>
  )
}

export default ReflectionScreen
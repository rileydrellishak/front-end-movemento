import { View } from 'react-native'
import { Button, Text, useTheme } from 'react-native-paper'
import { useEffect, useState } from 'react';
import CreateEntryButton from '../components/buttons/CreateEntryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext'
import Spinner from 'react-native-loading-spinner-overlay'

const HomeScreen = ({ navigation }) => {
  const theme = useTheme()
  const { loading, users, selectedUser, setSelectedUser } = useData();
  const { updateEntry } = useJournalEntry();
  
  useEffect(() => {
    if (selectedUser?.id) {
      updateEntry({ user_id: selectedUser.id })
    }
  }, [selectedUser]);
  
  if (loading) {
    return (
      <Spinner visible={loading} textContent={'Loading...'} textStyle={{ color: 'white' }}/>
    )
  }

  const handleNext = () => {
    navigation.navigate('CreateEntryModal');
  }

  const handleGoBack = () => {
    navigation.popToTop()
  }

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <CreateEntryButton onPress={handleNext}/>
      <Button onPress={handleGoBack}>
        <Text style={{ color: theme.colors.onPrimaryContainer}}>go back and change user</Text>
      </Button>
      <Text>The currently selected user is {selectedUser.name}</Text>
    </View>
  )
}

export default HomeScreen;
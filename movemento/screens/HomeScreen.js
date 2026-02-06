import { ScrollView, View, Text, Pressable } from 'react-native'
import ButtonStyles from '../styles/Buttons';
import ContainerStyles from '../styles/Containers';
import { useEffect, useState } from 'react';
import CreateEntryButton from '../components/buttons/CreateEntryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext'

import TextStyles from '../styles/Text';
import ScreenStyles from '../styles/Screens';

import LoadingIndicator from '../components/LoadingIndicator';
import Spinner from 'react-native-loading-spinner-overlay'

const HomeScreen = ({ navigation }) => {
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
    <View style={ScreenStyles.home}>
      <CreateEntryButton onPress={handleNext}/>
      <Pressable style={[ButtonStyles.base, ButtonStyles.debugging]} onPress={handleGoBack}>
        <Text>go back and change user</Text>
      </Pressable>
      <Text>The currently selected user is {selectedUser.name}</Text>
    </View>
  )
}

export default HomeScreen;
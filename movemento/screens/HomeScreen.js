import { ScrollView, View, Text, Pressable } from 'react-native'
import { useLinkBuilder, useNavigation } from '@react-navigation/native'
import EntryCalendar from '../components/EntryCalendar';
import ButtonStyles from '../styles/Buttons';
import ContainerStyles from '../styles/Containers';
import EntriesContainer from '../components/containers/EntriesContainer';
import SelectUserContainer from '../components/containers/SelectUserContainer';
import { useEffect, useState } from 'react';
import CreateEntryButton from '../components/buttons/CreateEntryButton';

import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext'

import TextStyles from '../styles/Text';
import ScreenStyles from '../styles/Screens';

const HomeScreen = ({ navigation }) => {
  const { loading, users, selectedUser, setSelectedUser } = useData();
  const { updateEntry } = useJournalEntry();

  
  useEffect(() => {
    if (selectedUser?.id) {
      updateEntry({ user_id: selectedUser.id })
    }
  }, [selectedUser]);
  
  if (loading) {
    return <Text style={TextStyles.title}>loading...</Text>
  }
  
  const handleNext = () => {
    navigation.navigate('CreateEntryModal');
  }

  return (
    <View style={ScreenStyles.home}>
      <View style={ContainerStyles.debugging}>
        <CreateEntryButton onPress={handleNext}/>
      </View>
      <SelectUserContainer
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </View>
  )
}

export default HomeScreen;
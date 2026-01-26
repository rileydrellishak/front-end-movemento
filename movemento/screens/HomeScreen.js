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

const HomeScreen = () => {
  const navigation = useNavigation();
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
    <ScrollView>
      <Text style={TextStyles.title}>HOME</Text>
      <View style={ContainerStyles.debugging}>
        <CreateEntryButton onPress={handleNext}/>

        {/* <Pressable
          onPress={() => navigation.navigate('SelectMoodsBefore')}
          style={[ButtonStyles.base, ButtonStyles.debugging]}
        >
          <Text>Quick jump to SELECT MOODS BEFORE for debugging</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SelectMoodsAfter')}
          style={[ButtonStyles.base, ButtonStyles.debugging]}>
          <Text>Quick jump to SELECT MOODS AFTER for debugging</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Reflection')}
          style={[ButtonStyles.base, ButtonStyles.debugging]}
        >
          <Text>Quick jump to REFLECTION for debugging</Text>
        </Pressable> */}
      </View>
      {/* <EntriesContainer/> */}
      <SelectUserContainer
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
      <Text>The current selected user is {selectedUser.name}</Text>
      {/* <EntryCalendar></EntryCalendar> */}
    </ScrollView>
  )
}

export default HomeScreen;
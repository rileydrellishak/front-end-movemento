import { ScrollView, View, Text, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import EntryCalendar from '../components/EntryCalendar';
import ButtonStyles from '../styles/Buttons';
import ContainerStyles from '../styles/Containers';
import EntriesContainer from '../components/containers/EntriesContainer';
import SelectUserContainer from '../components/containers/SelectUserContainer';
import { useState, useEffect } from 'react';
import { useData } from '../context/DataContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { loading, users, selectedUser, setSelectedUser } = useData();

  if (loading) {
    return <Text>loading...</Text>
  }

  useEffect(() => {
    if (users && users.length > 0 && !selectedUser) {
      setSelectedUser(users[0].name);
    }
  }, [users]);

  return (
    <ScrollView>
      <Text>HOME</Text>
      <View style={ContainerStyles.debugging}>
        <Pressable
          onPress={() => navigation.navigate('SelectMovements')}
          style={ButtonStyles.next}
        >
          <Text>Create an entry and go to the select movements screen</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SelectMoodsBefore')}
          style={ButtonStyles.debugging}
        >
          <Text>Quick jump to SELECT MOODS BEFORE for debugging</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('SelectMoodsAfter')}
          style={ButtonStyles.debugging}
        >
          <Text>Quick jump to SELECT MOODS AFTER for debugging</Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate('Reflection')}
          style={ButtonStyles.debugging}
        >
          <Text>Quick jump to REFLECTION for debugging</Text>
        </Pressable>
      </View>
      {/* <EntriesContainer/> */}
      <SelectUserContainer users={users} selectedUser={selectedUser} setSelectedUser={setSelectedUser}/>
      <Text>The current selected user is {selectedUser}</Text>
      {/* <EntryCalendar></EntryCalendar> */}
    </ScrollView>
  )
}

export default HomeScreen
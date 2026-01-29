import { View, Text, Pressable } from 'react-native'
import ButtonStyles from '../styles/Buttons'
import SelectUserContainer from '../components/containers/SelectUserContainer';
import { useState, useEffect } from 'react'
import { useData } from '../context/DataContext'
import { useJournalEntry } from '../context/JournalEntryContext'

const SelectUserScreen = ({ navigation }) => {
  const { loading, users, selectedUser, setSelectedUser } = useData();
  const { updateEntry } = useJournalEntry();
  
  useEffect(() => {
    if (selectedUser?.id) {
      updateEntry({ user_id: selectedUser.id })
    }
  }, [selectedUser]);

  const handleGoHome = () => {
    navigation.navigate('Main')
  }

  return (
    <View>
      <Pressable onPress={handleGoHome} style={[ButtonStyles.base, ButtonStyles.next]}>
        <Text>click here to go to the home screen</Text>
      </Pressable>
      <SelectUserContainer
        users={users}
        selectedUser={selectedUser}
        setSelectedUser={setSelectedUser}
      />
    </View>
  )
}

export default SelectUserScreen
import { ScrollView, View, Text, Pressable } from 'react-native'
import ButtonStyles from '../styles/Buttons';
import ContainerStyles from '../styles/Containers';
import { useEffect, useState } from 'react';
import CreateEntryButton from '../components/buttons/CreateEntryButton';

import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext'

import TextStyles from '../styles/Text';
import ScreenStyles from '../styles/Screens';

const HomeScreen = ({ navigation }) => {
  const { loading } = useData();
  const { updateEntry } = useJournalEntry();
  
  if (loading) {
    return <Text style={TextStyles.title}>loading...</Text>
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
    </View>
  )
}

export default HomeScreen;
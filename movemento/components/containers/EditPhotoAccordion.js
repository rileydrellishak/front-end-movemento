import { View, Text, Pressable, ScrollView } from 'react-native'
import { useState } from 'react'
import ButtonStyles from '../../styles/Buttons'
import ContainerStyles from '../../styles/Containers'
import { useData } from '../../context/DataContext'
import ReflectionTextInput from '../ReflectionTextInput'
import ScreenStyles from '../../styles/Screens'
import { List } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectableButtonsContainer from './SelectableButtonsContainer' //({ variant, data, selectedIds=[], setSelectedIds })
import movements from '../../data/movements'

const EditPhotoAccordion = () => {
  return (
    <List.Accordion title='Select photo'
    left={props => <List.Icon {...props} icon='camera'/>}>
      <Text>select new photo</Text>
    </List.Accordion>
  )
}

export default EditPhotoAccordion;
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
import {findNames} from '../../helpers'

const EditMovementsAccordion = ({ selectedMovements, setSelectedMovements, movementsExpanded, setMovementsExpanded }) => {

  return (
    <List.Accordion 
      title='Select Movements'
      left={props => <List.Icon {...props} icon='dumbbell'/>}
      expanded={movementsExpanded}
      onPress={() => setMovementsExpanded(!movementsExpanded)}
    >
      <Text>selected movements: {findNames(selectedMovements, movements).join(', ')}</Text>
      <SelectableButtonsContainer 
        variant='movements'
        data={movements}
        selectedIds={selectedMovements}
        setSelectedIds={setSelectedMovements}
      />
    </List.Accordion>
  )
}

export default EditMovementsAccordion;
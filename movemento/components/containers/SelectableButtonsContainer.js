import ContainerStyles from '../../styles/Containers';
import SelectableButton from '../buttons/SelectableButton';
import { useData } from '../../context/DataContext';
import { View } from 'react-native'
import ButtonStyles from '../../styles/Buttons';
import { useState } from 'react'

const SelectableButtonsContainer = ({ variant, data, selectedIds=[], setSelectedIds }) => {

    console.log('selectedIds:', selectedIds, typeof selectedIds[0])

  const handlePress = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
    } else {
      setSelectedIds([...selectedIds, Number(id)])
    }
  }

  const buttons = data.map(({ id, name, slug }) => {
    return (
      <SelectableButton
        key={slug}
        id={id}
        name={name}
        variant={variant}
        isSelected={selectedIds.includes(id)}
        onSelect={() => handlePress(id)}
      />
    )
  })
  
  return (
    <View style={ContainerStyles.base}>
      {buttons}
    </View>
  )
}

export default SelectableButtonsContainer;
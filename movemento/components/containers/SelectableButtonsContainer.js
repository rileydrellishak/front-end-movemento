import ContainerStyles from '../../styles/Containers';
import SelectableButton from '../buttons/SelectableButton';
import { useData } from '../../context/DataContext';
import { View } from 'react-native'
import ButtonStyles from '../../styles/Buttons';
import { useState } from 'react'

const SelectableButtonsContainer = ({ variant, data, selectedIds=[], setSelectedIds }) => {

  const handleSelect = (id) => {
    setSelectedIds((prev) => 
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    )
  }

  const buttons = data.map(({ id, name, slug }) => {
    return (
      <SelectableButton
        key={slug}
        id={id}
        name={name}
        variant={variant}
        isSelected={selectedIds.includes(id)}
        onSelect={() => handleSelect(id)}
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
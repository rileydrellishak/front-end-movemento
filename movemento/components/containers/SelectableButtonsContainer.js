import SelectableButton from '../buttons/SelectableButton';
import { useData } from '../../context/DataContext';
import { ScrollView } from 'react-native'
import { useState } from 'react'

const SelectableButtonsContainer = ({ variant, data, selectedIds=[], setSelectedIds }) => {
  const handlePress = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id))
    } else {
      setSelectedIds([...selectedIds, id])
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
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', padding: 20}}>
      {buttons}
    </ScrollView>
  )
}

export default SelectableButtonsContainer;
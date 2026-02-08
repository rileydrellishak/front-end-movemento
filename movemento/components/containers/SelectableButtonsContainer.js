import SelectableButton from '../buttons/SelectableButton';
import { useData } from '../../context/DataContext';
import { View, StyleSheet } from 'react-native'
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
    <View style={styles.container}>
      {buttons}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly'
  },
})

export default SelectableButtonsContainer;
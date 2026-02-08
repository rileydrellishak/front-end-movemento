import { Searchbar } from 'react-native-paper'
import { useState } from 'react'

const FilterMovements = ({ search, setSearch }) => {
  return (
    <Searchbar 
      placeholder='Search'
      onChangeText={setSearch}
      value={search}
      mode={'bar'}
    />
  )
}
export default FilterMovements;
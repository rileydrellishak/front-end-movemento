import { SearchBar } from '@rneui/themed'
import {useState} from 'react'

const FilterMovements = () => {
  const [search, setSearch] = useState('')
  return (
    <SearchBar placeholer='Search for movements' onChangeText={setSearch} value={search} lightTheme={true} round={true}/>
  )
}
export default FilterMovements;
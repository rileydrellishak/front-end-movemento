import { Searchbar } from 'react-native-paper'

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
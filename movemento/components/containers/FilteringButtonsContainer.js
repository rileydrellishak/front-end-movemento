import { View, Text } from 'react-native'
import MovementCategoryButtons from '../buttons/MovementCategoryButtons';
import ContainerStyles from '../../styles/Containers';

const FilteringButtonsContainer = ({ categories }) => {
  const categoryButtons = categories.map(cat => {
    return (
      <MovementCategoryButtons name={cat}/>
    )
  })
  return (
    <View style={ContainerStyles.base}>{categoryButtons}</View>
  )
}

export default FilteringButtonsContainer;
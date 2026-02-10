import { View } from 'react-native'
import MovementCategoryButtons from '../buttons/MovementCategoryButtons';

const FilteringButtonsContainer = ({ categories }) => {
  const categoryButtons = categories.map(cat => {
    return (
      <MovementCategoryButtons key={cat} name={cat}/>
    )
  })
  return (
    <View
      style={{flex: 1}}
      contentContainerStyle={{flexDirection: 'row', flexWrap: 'wrap', padding: 20}}
    >
      {categoryButtons}
    </View>
  )
}

export default FilteringButtonsContainer;
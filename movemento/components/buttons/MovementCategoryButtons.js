import { Button } from 'react-native-paper'

const MovementCategoryButtons = ({ name }) => {
  return (
    <Button
      style={{alignSelf: 'flex-start', marginRight: 8, marginTop: 8, flex: 1}}
      labelStyle={{ textAlign: 'center' }}
      contentStyle={{ paddingHorizontal: 12 }}
      mode={'contained-tonal'}
    >
      {name}
    </Button>
  )
}

export default MovementCategoryButtons
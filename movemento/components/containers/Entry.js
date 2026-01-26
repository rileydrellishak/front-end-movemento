import { View, Text, Pressable } from 'react-native'
import ContainerStyles from '../../styles/Containers'
import ButtonStyles from '../../styles/Buttons'

const Entry = ({ id, user_id, reflection, moods_before, moods_after, movements, created_at }) => {
  
  const objectNames = (obj) => {
    return obj.name
  }

  const movement_names = movements.map(objectNames)
  const moods_before_names = moods_before.map(objectNames)
  const moods_after_names = moods_after.map(objectNames)

  return (
    <View style={[ContainerStyles.debugging, ContainerStyles.entry]}>
      <Text>{user_id}</Text>
      <Text>{created_at}</Text>
      <Text>{movement_names}</Text>
      <Text>{moods_before_names}</Text>
      <Text>{moods_after_names}</Text>
      <Text>{reflection}</Text>
      <Pressable style={[ButtonStyles.base, ButtonStyles.debugging]}>
        <Text>edit entry</Text>
      </Pressable>
      <Pressable style={[ButtonStyles.base, ButtonStyles.debugging]}>
        <Text>delete entry</Text>
      </Pressable>
    </View>
  )
}
export default Entry;

// {
//     "created_at": "2026-01-20T14:53:20.234146+00:00",
//     "id": 5,
//     "img_path": null,
//     "moods_after": [
//       {
//         "energy": "low",
//         "id": 8,
//         "name": "Tired",
//         "slug": "tired",
//         "valence": "neutral"
//       },
//       {
//         "energy": "medium",
//         "id": 9,
//         "name": "Neutral",
//         "slug": "neutral",
//         "valence": "neutral"
//       }
//     ],
//     "moods_before": [
//       {
//         "energy": "low",
//         "id": 8,
//         "name": "Tired",
//         "slug": "tired",
//         "valence": "neutral"
//       }
//     ],
//     "movements": [
//       {
//         "category": "sports",
//         "id": 6,
//         "is_outdoor": false,
//         "name": "Boxing",
//         "slug": "boxing"
//       },
//       {
//         "category": "cardio",
//         "id": 12,
//         "is_outdoor": false,
//         "name": "Dance",
//         "slug": "dance"
//       }
//     ],
//     "reflection": "I am tired",
//     "user_id": 3
// }
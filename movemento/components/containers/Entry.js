import { View, Text, Pressable } from 'react-native'
import ContainerStyles from '../../styles/Containers'
import ButtonStyles from '../../styles/Buttons';
import DeleteEntryButton from '../buttons/DeleteEntryButton';
import { useState } from 'react';
import EditEntryButton from '../buttons/EditEntryButton';

const Entry = ({ entry, handleEditEntryButton, onDeleteEntry }) => {
  
  const objectNames = (obj) => {
    return obj.name
  }

  const movement_names = entry.movements.map(objectNames)
  const moods_before_names = entry.moods_before.map(objectNames)
  const moods_after_names = entry.moods_after.map(objectNames)

  const dateObj = new Date(entry.created_at)
  const displayDate = dateObj.toLocaleDateString()

  const displayTime = dateObj.toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'})

  return (
    <View style={[ContainerStyles.debugging, ContainerStyles.entry]}>
      <Text>entry id is {entry.id}</Text>
      <Text>user id is {entry.user_id}</Text>
      <Text>{displayDate}</Text>
      <Text>{displayTime}</Text>
      <Text>{movement_names}</Text>
      <Text>{moods_before_names}</Text>
      <Text>{moods_after_names}</Text>
      <Text>{entry.reflection}</Text>
      <EditEntryButton entry={entry}/>
      <DeleteEntryButton user_id={entry.user_id} entry_id={entry.id} onDeleteEntry={onDeleteEntry}/>
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
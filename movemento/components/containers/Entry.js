import { View, Text, Pressable, Image } from 'react-native'
import ContainerStyles from '../../styles/Containers'
import ButtonStyles from '../../styles/Buttons';
import DeleteEntryButton from '../buttons/DeleteEntryButton';
import { useState } from 'react';
import EditEntryButton from '../buttons/EditEntryButton';
import EntryImage from './EntryImage';

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
    <View style={[ContainerStyles.entry]}>
      <Text>{displayDate}</Text>
      <Text>{displayTime}</Text>
      <Text>{movement_names}</Text>
      <Text>Moods before: {moods_before_names}</Text>
      <Text>Moods after: {moods_after_names}</Text>
      <Text>Reflection: {entry.reflection}</Text>
      <EntryImage url={entry.img_path}/>
      <EditEntryButton entry={entry}/>
      <DeleteEntryButton user_id={entry.user_id} entry_id={entry.id} onDeleteEntry={onDeleteEntry}/>
    </View>
  )
}
export default Entry;
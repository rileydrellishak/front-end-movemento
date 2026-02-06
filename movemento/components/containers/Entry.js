import { View, Text, Pressable, Image } from 'react-native'
import ContainerStyles from '../../styles/Containers'
import ButtonStyles from '../../styles/Buttons';
import DeleteEntryButton from '../buttons/DeleteEntryButton';
import { useState } from 'react';
import EditEntryButton from '../buttons/EditEntryButton';
import EntryImage from './EntryImage';
import movements from '../../data/movements'
import moods from '../../data/moods'
import { findNames } from '../../helpers';

const Entry = ({ entry, handleEditEntryButton, onDeleteEntry }) => {
  if (!entry) return null

  const movementNames = findNames(entry.movements, movements).join(', ')
  const moodsBeforeNames = findNames(entry.moodsBefore, moods).join(', ')
  const moodsAfterNames = findNames(entry.moodsAfter, moods).join(', ')

  const dateObj = new Date(entry.created_at)
  const displayDate = dateObj.toLocaleDateString()

  const displayTime = dateObj.toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'})

  return (
    <View style={[ContainerStyles.entry]}>
      <Text>{displayDate}</Text>
      <Text>{displayTime}</Text>
      <Text>Movements: {movementNames}</Text>
      <Text>Moods before: {moodsBeforeNames}</Text>
      <Text>Moods after: {moodsAfterNames}</Text>
      <Text>Reflection: {entry.reflection}</Text>
      <EntryImage url={entry.img_path}/>
      <EditEntryButton entry={entry}/>
      <DeleteEntryButton user_id={entry.user_id} entry_id={entry.id} onDeleteEntry={onDeleteEntry}/>
    </View>
  )
}
export default Entry;
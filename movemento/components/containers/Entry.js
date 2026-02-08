import { View, Image } from 'react-native'
import DeleteEntryButton from '../buttons/DeleteEntryButton';
import { useState } from 'react';
import EditEntryButton from '../buttons/EditEntryButton';
import EntryImage from './EntryImage';
import movements from '../../data/movements'
import moods from '../../data/moods'
import { findNames } from '../../helpers';
import { Surface, useTheme, Text } from 'react-native-paper'

const Entry = ({ entry, handleEditEntryButton, onDeleteEntry, loading, setLoading }) => {
  const theme = useTheme();
  if (!entry) return null

  const movementNames = findNames(entry.movements, movements).join(', ')
  const moodsBeforeNames = findNames(entry.moodsBefore, moods).join(', ')
  const moodsAfterNames = findNames(entry.moodsAfter, moods).join(', ')

  const dateObj = new Date(entry.created_at)
  const displayDate = dateObj.toLocaleDateString()

  const displayTime = dateObj.toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'})

  return (
    <Surface
      style={{ padding: 20, margin: 20, backgroundColor: theme.colors.primaryContainer, gap: 10,}}
      elevation={2}
    >
      <View
        style={{
          flex: 1,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 15
        }}
      >
        <Text>{displayDate}</Text>
        <Text>{displayTime}</Text>
      </View>
      <Text>Movements: {movementNames}</Text>
      <Text>Moods before: {moodsBeforeNames}</Text>
      <Text>Moods after: {moodsAfterNames}</Text>
      <Text>Reflection: {entry.reflection}</Text>
      {!!entry.img_path && <EntryImage url={entry.img_path}/>}
      <View
        style={{
          flex: 1,
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 15,
          justifyContent: 'center'
        }}
      >
        <EditEntryButton entry={entry}/>
        <DeleteEntryButton user_id={entry.user_id} entry_id={entry.id} onDeleteEntry={onDeleteEntry} loading={loading} setLoading={setLoading}/>
      </View>
    </Surface>
  )
}
export default Entry;
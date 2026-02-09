import { View, StyleSheet } from 'react-native'
import DeleteEntryButton from '../buttons/DeleteEntryButton';
import EditEntryButton from '../buttons/EditEntryButton';
import EntryImage from './EntryImage';
import movements from '../../data/movements'
import moods from '../../data/moods'
import { findNames } from '../../helpers';
import { Surface, useTheme, Text } from 'react-native-paper'

const Entry = ({ entry, handleEditEntryButton, onDeleteEntry, loading, setLoading }) => {
  const theme = useTheme();
  if (!entry) return null

  const movementNames = findNames(entry.movements, movements)
  const moodsBeforeNames = findNames(entry.moodsBefore, moods)
  const moodsAfterNames = findNames(entry.moodsAfter, moods)

  const visibleMovements = movementNames.slice(0, 3)
  const remainingMovements = movementNames.length - visibleMovements.length
  const visibleMoodsBefore = moodsBeforeNames.slice(0, 2)
  const remainingMoodsBefore = moodsBeforeNames.length - visibleMoodsBefore.length
  const visibleMoodsAfter = moodsAfterNames.slice(0, 2)
  const remainingMoodsAfter = moodsAfterNames.length - visibleMoodsAfter.length

  const dateObj = new Date(entry.created_at)
  const displayDate = dateObj.toLocaleDateString()

  const displayTime = dateObj.toLocaleString(undefined, {hour: 'numeric', minute: 'numeric'})

  return (
    <Surface
      style={[
        styles.card,
        { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline },
      ]}
      elevation={2}
    >
      <View
        style={styles.headerRow}
      >
        <Text style={{ color: theme.colors.onSurfaceVariant }}>{displayDate}</Text>
        <Text style={{ color: theme.colors.onSurfaceVariant }}>{displayTime}</Text>
      </View>
      <View>
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurfaceVariant }]}>Movements</Text>
        <View style={styles.chipRow}>
          {visibleMovements.map((name) => (
            <Text
              key={`movement-${name}`}
              style={[
                styles.chip,
                { backgroundColor: theme.colors.primaryContainer, color: theme.colors.onPrimaryContainer },
              ]}
            >
              {name}
            </Text>
          ))}
          {remainingMovements > 0 && (
            <Text
              style={[
                styles.chip,
                { backgroundColor: theme.colors.surfaceVariant, color: theme.colors.onSurfaceVariant },
              ]}
            >
              +{remainingMovements}
            </Text>
          )}
        </View>
      </View>
      <View>
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurfaceVariant }]}>Moods before</Text>
        <View style={styles.chipRow}>
          {visibleMoodsBefore.map((name) => (
            <Text
              key={`mood-before-${name}`}
              style={[
                styles.chip,
                { backgroundColor: theme.colors.secondaryContainer, color: theme.colors.onSecondaryContainer },
              ]}
            >
              {name}
            </Text>
          ))}
          {remainingMoodsBefore > 0 && (
            <Text
              style={[
                styles.chip,
                { backgroundColor: theme.colors.surfaceVariant, color: theme.colors.onSurfaceVariant },
              ]}
            >
              +{remainingMoodsBefore}
            </Text>
          )}
        </View>
      </View>
      <View>
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurfaceVariant }]}>Moods after</Text>
        <View style={styles.chipRow}>
          {visibleMoodsAfter.map((name) => (
            <Text
              key={`mood-after-${name}`}
              style={[
                styles.chip,
                { backgroundColor: theme.colors.tertiaryContainer, color: theme.colors.onTertiaryContainer },
              ]}
            >
              {name}
            </Text>
          ))}
          {remainingMoodsAfter > 0 && (
            <Text
              style={[
                styles.chip,
                { backgroundColor: theme.colors.surfaceVariant, color: theme.colors.onSurfaceVariant },
              ]}
            >
              +{remainingMoodsAfter}
            </Text>
          )}
        </View>
      </View>
      <View>
        <Text style={[styles.sectionLabel, { color: theme.colors.onSurfaceVariant }]}>Reflection</Text>
        <Text style={styles.reflectionText}>{entry.reflection}</Text>
      </View>
      {!!entry.img_path && (
        <EntryImage
          url={entry.img_path}
          style={{
            borderWidth: 1,
            borderColor: theme.colors.outline,
            backgroundColor: theme.colors.surfaceVariant,
          }}
        />
      )}
      <View
        style={styles.actions}
      >
        <EditEntryButton entry={entry}/>
        <DeleteEntryButton user_id={entry.user_id} entry_id={entry.id} onDeleteEntry={onDeleteEntry} loading={loading} setLoading={setLoading}/>
      </View>
    </Surface>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 10,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    gap: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 6,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    overflow: 'hidden',
  },
  sectionLabel: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
  },
  reflectionText: {
    marginTop: 4,
  },
  actions: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },
})

export default Entry;
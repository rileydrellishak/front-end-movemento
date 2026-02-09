import { ScrollView, View, StyleSheet } from 'react-native'
import { Button, Surface, Text, useTheme, Icon } from 'react-native-paper'
import { useEffect, useState } from 'react';
import CreateEntryButton from '../components/buttons/CreateEntryButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useData } from '../context/DataContext';
import { useJournalEntry } from '../context/JournalEntryContext'
import Spinner from 'react-native-loading-spinner-overlay'
import EntryCalendar from '../components/EntryCalendar'

const HomeScreen = ({ navigation }) => {
  const theme = useTheme()
  const { loading, users, selectedUser, setSelectedUser, entries } = useData();
  const { updateEntry } = useJournalEntry();
  
  useEffect(() => {
    if (selectedUser?.id) {
      updateEntry({ user_id: selectedUser.id })
    }
  }, [selectedUser]);
  
  if (loading) {
    return (
      <Spinner visible={loading} textContent={'Loading...'} textStyle={{ color: 'white' }}/>
    )
  }

  const handleNext = () => {
    navigation.navigate('CreateEntryModal');
  }

  const handleGoBack = () => {
    navigation.popToTop()
  }

  const entryCount = entries.length
  const latestEntry = entries.reduce((latest, current) => {
    if (!latest) return current
    return new Date(current.created_at) > new Date(latest.created_at) ? current : latest
  }, null)
  const latestDate = latestEntry ? new Date(latestEntry.created_at).toLocaleDateString() : 'No entries yet'

  const recentEntries = [...entries]
    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
    .slice(0, 2)

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor: theme.colors.background }]}
      edges={'left', 'right', 'bottom'}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text variant='titleLarge'>Welcome, {selectedUser.name}!</Text>
          <Text variant='titleMedium' style={[styles.subtitle, { color: theme.colors.onSurfaceVariant }]}
          >
            Ready for a new entry?
          </Text>
        </View>

        <View style={styles.primaryAction}>
          <CreateEntryButton onPress={handleNext} />
        </View>

        <Surface
          style={[
            styles.card,
            { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline },
          ]}
          elevation={1}
        >
          <Text style={[styles.cardTitle, { color: theme.colors.onSurfaceVariant }]}>Summary</Text>
          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>{entryCount}</Text>
              <Text style={[styles.summaryLabel, { color: theme.colors.onSurfaceVariant }]}>Total entries</Text>
            </View>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>{latestDate}</Text>
              <Text style={[styles.summaryLabel, { color: theme.colors.onSurfaceVariant }]}>Last entry</Text>
            </View>
          </View>
        </Surface>

        <Surface
          style={[
            styles.card,
            { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline },
          ]}
          elevation={1}
        >
          <EntryCalendar entries={entries}/>
        </Surface>
        <Surface
          style={[
            styles.card,
            { backgroundColor: theme.colors.surface, borderColor: theme.colors.outline, alignItems:'center', }, styles.summaryRow, 
          ]}
          elevation={1}
        >
          <Icon
            source='fire'
            color='orange'
            size={30}
          />
          <Text style={styles.summaryValue}>blank day streak - keep it up!</Text>
        </Surface>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  scrollContent: { padding: 16, paddingBottom: 24, },
  header: { marginBottom: 12, },
  subtitle: { marginTop: 4, marginBottom: 12, opacity: 0.8 },
  primaryAction: { marginBottom: 12, },
  card: {
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.4,
    marginBottom: 8,
  },
  summaryRow: { flexDirection: 'row', justifyContent: 'space-between' },
  summaryItem: { flex: 1 },
  summaryValue: { fontSize: 18, fontWeight: 'bold' },
  summaryLabel: { marginTop: 4 },
  emptyText: { marginTop: 4 },
  recentList: { gap: 8 },
  recentItem: { paddingVertical: 4 },
  recentDate: { fontWeight: 'bold' },
  recentMeta: { marginTop: 2 },
})
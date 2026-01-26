import { render } from '@testing-library/react-native';
import { movements, moods, users, DataProvider } from '../context/DataContext'
import { entry, JournalEntryProvider } from '../context/JournalEntryContext'

import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '../navigation/RootStack';

const defaultMovements = [
  {id: 1, name: 'barre'},
  {id: 2, name: 'indoor walk'},
  {id: 3, name: 'pickleball'}
]

const defaultMoods = [
  {id: 1, name: 'happy'},
  {id: 2, name: 'sad'},
  {id: 3, name: 'neutral'}
]

const defaultUsers = [
  {id: 1, name: 'riley'},
  {id: 2, name: 'maille'},
  {id: 3, name: 'bixby'}
]

const defaultJournalEntry = {
  user_id: 1,
  movements: [1, 2],
  moods_before: [2],
  moods_after: [1],
  reflection: 'Yay'
}

const renderWithContexts = (ui, options = {}) => {
  const movements = options.movements || defaultMovements;
  const moods = options.moods || defaultMoods;
  const users = options.users || defaultUsers
  const entry = options.entry || defaultJournalEntry

  return render(
    <DataProvider value={{ movements, moods, users }}>
      <JournalEntryProvider value={{entry}}>
        <NavigationContainer>
          <RootNavigator>
            {ui}
          </RootNavigator>
        </NavigationContainer>
      </JournalEntryProvider>
    </DataProvider>
  )
}

export default renderWithContexts;
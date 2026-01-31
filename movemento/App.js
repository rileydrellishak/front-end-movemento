import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import { JournalEntryProvider } from './context/JournalEntryContext'
import RootNavigator from './navigation/RootStack';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {

  return (
  <SafeAreaProvider>
      <DataProvider>
        <JournalEntryProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </JournalEntryProvider>
      </DataProvider>
  </SafeAreaProvider>
  );
}

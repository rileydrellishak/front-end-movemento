import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import { JournalEntryProvider } from './context/JournalEntryContext'
import RootNavigator from './navigation/RootStack';

export default function App() {

  return (
    <DataProvider>
      <JournalEntryProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </JournalEntryProvider>
    </DataProvider>
  );
}

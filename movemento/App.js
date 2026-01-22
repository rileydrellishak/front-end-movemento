import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/StackNavigator';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import { JournalEntryProvider } from './context/JournalEntryContext'

export default function App() {

  return (
    <DataProvider>
      <JournalEntryProvider>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </JournalEntryProvider>
    </DataProvider>
  );
}

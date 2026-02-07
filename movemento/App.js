import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';
import { JournalEntryProvider } from './context/JournalEntryContext'
import RootNavigator from './navigation/RootStack';
import { PaperProvider } from 'react-native-paper'
import LightTheme from './styles/LightTheme'

export default function App() {
  return (
  <PaperProvider theme={LightTheme}>
      <DataProvider>
        <JournalEntryProvider>
          <NavigationContainer theme={LightTheme}>
            <RootNavigator theme={LightTheme}/>
          </NavigationContainer>
        </JournalEntryProvider>
      </DataProvider>
  </PaperProvider>
  );
}

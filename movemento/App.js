import { NavigationContainer } from '@react-navigation/native';
import RootStack from './navigation/StackNavigator';
import { getAllMovementsAPI } from './api/movements';
import { useEffect, useState } from 'react';
import { DataProvider } from './context/DataContext';

export default function App() {

  return (
    <DataProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </DataProvider>
  );
}

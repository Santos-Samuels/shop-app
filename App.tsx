import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { AppProvider } from '@src/context';
import React from 'react';
import { Home } from '@pages/index';
import AppRoutes from '@src/routes/app.routes';


export default function App() {


  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

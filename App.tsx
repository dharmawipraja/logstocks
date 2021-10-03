/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'

import { store } from './src/Reducers/store';
import Root from './src/Navigation/rootNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={{ flex:1 }}>
          <Root />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
};

export default App;

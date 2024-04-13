/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {PaperProvider, Text} from 'react-native-paper';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <Text>Hello</Text>
    </PaperProvider>
  );
}

export default App;

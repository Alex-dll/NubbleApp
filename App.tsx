import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {theme} from '@theme';
import {Routes} from '@routes';

import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

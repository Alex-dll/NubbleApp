import React from 'react';

import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Routers} from './src/routes/Routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Routers />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;

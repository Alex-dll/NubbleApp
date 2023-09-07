import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {Button} from './src/components/Button';
import {ThemeProvider} from '@shopify/restyle';

import {Box} from './src/components/Box';
import {theme} from './src/theme';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text preset="headingLarge" italic>
            Olá mundo
          </Text>

          <Box my="s12">
            <Button title="Entrar" />
          </Box>

          <Box my="s12">
            <Button loading title="Entrar" />
          </Box>

          <Box my="s12">
            <Button disabled title="Entrar" />
          </Box>

          <Box my="s12">
            <Button preset="outline" title="Entrar" />
          </Box>

          <Box my="s12">
            <Button disabled preset="outline" title="Entrar" />
          </Box>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

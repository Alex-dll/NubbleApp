import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from './src/components/Text';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <Text italic>Olá mundo</Text>
      <Text bold>Olá mundo</Text>
      <Text preset="paragraphSmall" italic>
        Olá mundo
      </Text>
    </SafeAreaView>
  );
}

export default App;

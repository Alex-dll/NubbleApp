import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Text} from './src/components/Text';
import {ThemeProvider} from '@shopify/restyle';

import {theme} from './src/theme';
import {Box} from './src/components/Box';
import {Button} from './src/components/Button';
import {TextInput} from './src/components/TextInput';
import {Icon} from './src/components/Icon';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24}}>
          <Text marginBottom="s8" preset="headingLarge">
            Olá
          </Text>
          <Text preset="paragraphLarge" mb="s40">
            Digite seu e-mail e senha para entrar
          </Text>

          <TextInput
            errorMessage="ola"
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />

          <TextInput
            label="Senha"
            placeholder="Digite sua senha"
            RightComponent={<Icon color="gray2" name="eyeOn" />}
            boxProps={{mb: 's10'}}
          />

          <Text preset="paragraphSmall" color="primary" bold>
            Esqueci minha senha
          </Text>

          <Button title="Entrar" mt="s48" />
          <Button title="Criar uma conta" mt="s12" preset="outline" />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;

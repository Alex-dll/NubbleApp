import React from 'react';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {Icon} from '../../../components/Icon';
import {Screen} from '../../../components/Screen';
import type {LoginScreenScreenProps} from '../../../routes/types';

function LoginScreen({navigation}: LoginScreenScreenProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen>
      <Text marginBottom="s8" preset="headingLarge">
        Olá
      </Text>
      <Text preset="paragraphLarge" mb="s40">
        Digite seu e-mail e senha para entrar
      </Text>

      <TextInput
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

      <Text
        onPress={navigateToForgotPasswordScreen}
        color="primary"
        preset="paragraphSmall"
        bold>
        Esqueci minha senha
      </Text>

      <Button title="Entrar" mt="s48" />
      <Button
        title="Criar uma conta"
        mt="s12"
        preset="outline"
        onPress={navigateToSignUpScreen}
      />
    </Screen>
  );
}

export {LoginScreen};

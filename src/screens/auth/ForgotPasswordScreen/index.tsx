import React from 'react';
import {Button} from '../../../components/Button';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import type {ForgotPasswordScreenScreenProps} from '../../../routes/types';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: ForgotPasswordScreenScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    // TODO: submit form
    reset({
      title: `Enviamos as instruções  ${'\n'}para seu e-mail`,
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
      icon: {
        name: 'messageRound',
        color: 'primary',
      },
    });
  }
  return (
    <Screen canGoBack>
      <Text preset="headingLarge" mb="s16">
        Esqueci minha senha
      </Text>
      <Text preset="paragraphLarge" mb="s32">
        Digite seu e-mail e enviaremos as instruções para redefinição de senha
      </Text>
      <TextInput
        label="E-mail"
        placeholder="Digite seu e-mail"
        boxProps={{mb: 's40'}}
      />
      <Button onPress={submitForm} title="Recuperar senha" />
    </Screen>
  );
}

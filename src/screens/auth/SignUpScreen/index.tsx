import React from 'react';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Button} from '../../../components/Button';
import {PasswordInput} from '../../../components/PasswordInput';
import type {SignUpScreenScreenProps} from '../../../routes/types';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SignUpScreen({navigation}: SignUpScreenScreenProps) {
  const {reset} = useResetNavigationSuccess();

  function submitForm() {
    //TODO: Implementar
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
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>

      <TextInput label="Seu username" placeholder="@" boxProps={{mb: 's20'}} />
      <TextInput
        label="Nome Completo"
        placeholder="Digite seu nome completo"
        boxProps={{mb: 's20'}}
      />
      <TextInput
        label="Email"
        placeholder="Digite seu email"
        boxProps={{mb: 's20'}}
      />

      <PasswordInput
        label="Senha"
        placeholder="Digite sua senha"
        boxProps={{mb: 's48'}}
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}

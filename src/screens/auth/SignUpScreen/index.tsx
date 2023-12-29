import React from 'react';
import {Screen} from '../../../components/Screen';
import {Text} from '../../../components/Text';
import {TextInput} from '../../../components/TextInput';
import {Icon} from '../../../components/Icon';
import {Button} from '../../../components/Button';

export function SignUpScreen() {
  function submitForm() {
    //TODO: Implementar
  }

  return (
    <Screen canGoBack>
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
      <TextInput
        label="Senha"
        placeholder="Digite sua senha"
        RightComponent={<Icon color="gray2" name="eyeOn" />}
        boxProps={{mb: 's48'}}
      />

      <Button title="Criar uma conta" onPress={submitForm} />
    </Screen>
  );
}

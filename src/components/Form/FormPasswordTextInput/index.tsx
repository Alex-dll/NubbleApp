import React from 'react';
import {Controller, UseControllerProps, FieldValues} from 'react-hook-form';
import {PasswordInput} from '../../PasswordInput';
import {PasswordInputProps} from '../../PasswordInput/types';

export function FormPasswordTextInput<FormType extends FieldValues>({
  control,
  name,
  rules,
  ...passwordTextInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field, fieldState}) => (
        <PasswordInput
          value={field.value}
          onChangeText={field.onChange}
          errorMessage={fieldState.error?.message}
          {...passwordTextInputProps}
        />
      )}
    />
  );
}

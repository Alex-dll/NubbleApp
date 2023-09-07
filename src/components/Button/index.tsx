import React from 'react';

import {Text} from '../Text';
import {buttonPresets} from './buttonPresets';

import {TouchableOpacityBox} from '../Box';
import {ButtonProps} from './types';
import {ActivityIndicator} from '../ActivityIndicator';

export function Button({
  title,
  loading,
  preset = 'primary',
  disabled,
  ...rest
}: ButtonProps) {
  const buttonPreset = buttonPresets[preset][disabled ? 'disabled' : 'default'];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      paddingHorizontal="s20"
      height={50}
      alignItems="center"
      justifyContent="center"
      borderRadius="s16"
      {...buttonPreset.container}
      {...rest}>
      {loading ? (
        <ActivityIndicator color={buttonPreset.content} />
      ) : (
        <Text preset="paragraphMedium" bold color={buttonPreset.content}>
          {title}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}

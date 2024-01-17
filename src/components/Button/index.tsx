import React from 'react';

import {ThemeColors} from '@theme';

import {ActivityIndicator} from '../ActivityIndicator';
import {TouchableOpacityBox, TouchableOpacityBoxProps} from '../Box';
import {Text} from '../Text';

import {buttonPresets} from './buttonPresets';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

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

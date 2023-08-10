import React from 'react';
import {Text as RNText} from 'react-native';
import type {ITextProps} from './types';
import {$fontSizes, getFontFamily} from './consts';

export function Text({
  preset = 'headingMedium',
  bold,
  semiBold,
  italic,
  children,
  style,
  ...rest
}: ITextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);

  console.log(fontFamily);

  return (
    <RNText style={[$fontSizes[preset], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
}

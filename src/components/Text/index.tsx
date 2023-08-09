import React from 'react';
import {Text as RNText} from 'react-native';
import type {ITextProps} from './types';
import {$fontSizes} from './consts';

export function Text({
  preset = 'headingMedium',
  children,
  style,
  ...rest
}: ITextProps) {
  return (
    <RNText style={[$fontSizes[preset], style]} {...rest}>
      {children}
    </RNText>
  );
}

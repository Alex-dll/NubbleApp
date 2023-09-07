import React from 'react';
import type {ITextProps} from './types';
import {$fontSizes, SRText, getFontFamily} from './consts';

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

  return (
    <SRText
      color="backgroundContrast"
      style={[$fontSizes[preset], {fontFamily}, style]}
      {...rest}>
      {children}
    </SRText>
  );
}

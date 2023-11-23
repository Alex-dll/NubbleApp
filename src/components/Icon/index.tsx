import React from 'react';
import type {IconProps} from './types';
import {iconRegistry} from './consts';
import {useAppTheme} from '../../hooks/useAppTheme';

export function Icon({
  name,
  size = 20,
  color = 'backgroundContrast',
}: IconProps) {
  const {colors} = useAppTheme();
  const SGVIcon = iconRegistry[name];

  if (!SGVIcon) {
    return null;
  }

  return <SGVIcon size={size} color={colors[color]} />;
}

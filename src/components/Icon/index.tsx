import React from 'react';
import type {IconProps} from './types';
import {iconRegistry} from './consts';
import {useAppTheme} from '../../hooks/useAppTheme';
import {Pressable} from 'react-native';

export function Icon({
  name,
  size = 20,
  color = 'backgroundContrast',
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SGVIcon = iconRegistry[name];

  if (!SGVIcon) {
    return null;
  }

  if (onPress) {
    return (
      <Pressable hitSlop={10} onPress={onPress}>
        <SGVIcon size={size} color={colors[color]} />
      </Pressable>
    );
  }

  return <SGVIcon size={size} color={colors[color]} />;
}

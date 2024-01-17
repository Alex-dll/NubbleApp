import {ThemeColors} from '@theme';
import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';
import {useAppTheme} from '@hooks';

export interface ActivityIndicatorProps
  extends Omit<RNActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}

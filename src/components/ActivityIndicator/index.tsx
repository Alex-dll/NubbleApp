import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import type {ActivityIndicatorProps} from './types';
import {useAppTheme} from '../../hooks/useAppTheme';

export function ActivityIndicator({color}: ActivityIndicatorProps) {
  const {colors} = useAppTheme();

  return <RNActivityIndicator color={colors[color]} />;
}

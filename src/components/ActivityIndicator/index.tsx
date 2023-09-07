import React from 'react';
import {ActivityIndicator as RNActivityIndicator} from 'react-native';
import type {ActivityIndicatorProps} from './types';
import {useTheme} from '@shopify/restyle';
import {Theme} from '../../theme/types';

export function ActivityIndicator({color}: ActivityIndicatorProps) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator color={colors[color]} />;
}

import React from 'react';
import {ScrollView, View} from 'react-native';
import {type ScreenContainerProps} from './types';

export function ScrollViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return <ScrollView style={{backgroundColor}}>{children}</ScrollView>;
}

export function ViewContainer({
  children,
  backgroundColor,
}: ScreenContainerProps) {
  return <View style={{backgroundColor}}>{children}</View>;
}

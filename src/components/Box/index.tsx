import {ComponentProps} from 'react';
import {
  TouchableOpacity,
  type TouchableOpacityProps as RNTouchableOpacityProps,
} from 'react-native';

import {
  createRestyleComponent,
  backgroundColor,
  spacing,
  layout,
  border,
  spacingShorthand,
  createBox,
  BackgroundColorProps,
  SpacingProps,
  LayoutProps,
  BorderProps,
  SpacingShorthandProps,
} from '@shopify/restyle';

import {type Theme} from '@theme';

export type BoxProps = ComponentProps<typeof Box>;

export type TouchableOpacityBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  RNTouchableOpacityProps;

const Box = createBox<Theme>();

const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export {Box, TouchableOpacityBox};

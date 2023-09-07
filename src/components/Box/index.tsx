import {TouchableOpacity} from 'react-native';
import {
  createRestyleComponent,
  backgroundColor,
  spacing,
  layout,
  border,
  spacingShorthand,
  createBox,
} from '@shopify/restyle';
import type {TouchableOpacityBoxProps} from './types';
import type {Theme} from '../../theme/types';

const Box = createBox<Theme>();

const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, spacingShorthand, layout, border],
  TouchableOpacity,
);

export {Box, TouchableOpacityBox};

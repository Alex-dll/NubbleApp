import {useTheme} from '@shopify/restyle';
import type {Theme} from '../../theme/types';

export function useAppTheme() {
  return useTheme<Theme>();
}

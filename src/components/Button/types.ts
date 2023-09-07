import type {ThemeColors} from '../../theme/types';
import {TouchableOpacityBoxProps} from '../Box/types';

export type ButtonPreset = 'primary' | 'outline';

export interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPreset;
  disabled?: boolean;
}

export interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

import type {ThemeColors} from '../../theme/types';
import type {IconName} from './consts';

export interface IconProps {
  name: IconName;
  size?: number;
  color?: ThemeColors;
  onPress?: () => void;
}

export interface IconBase {
  size?: number;
  color?: string;
}

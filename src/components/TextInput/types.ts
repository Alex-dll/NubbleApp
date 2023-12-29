import {type ReactElement} from 'react';
import {TextInputProps as RNTextInputProps} from 'react-native';
import {type BoxProps} from '../Box/types';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  RightComponent?: ReactElement;
  boxProps?: BoxProps;
}

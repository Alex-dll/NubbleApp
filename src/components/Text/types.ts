import {ComponentProps} from 'react';
import type {TextProps as RNTextProps} from 'react-native';
import {SRText} from './consts';

type SRTextProps = ComponentProps<typeof SRText>;

export interface ITextProps extends RNTextProps, SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export type TextVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

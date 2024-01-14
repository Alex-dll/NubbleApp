import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {IconProps} from '../components/Icon/types';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProps, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

export type LoginScreenScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'LoginScreen'
>;

export type SignUpScreenScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignUpScreen'
>;

export type SuccessScreenScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SuccessScreen'
>;

export type ForgotPasswordScreenScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

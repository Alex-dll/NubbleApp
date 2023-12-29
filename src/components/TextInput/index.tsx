import React, {useRef} from 'react';
import {Pressable, TextInput as RNTextInput, TextStyle} from 'react-native';
import {Box} from '../Box';
import {Text} from '../Text';
import {$fontFamily, $fontSizes} from '../Text/consts';

import {type TextInputProps} from './types';

import {useAppTheme} from '../../hooks/useAppTheme';
import {type BoxProps} from '../Box/types';

export function TextInput({
  label,
  errorMessage,
  RightComponent,
  boxProps,

  ...RNTextInputProps
}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  const $textInputContainer: BoxProps = {
    flexDirection: 'row',
    borderWidth: errorMessage ? 2 : 1,
    borderColor: errorMessage ? 'error' : 'gray4',
    padding: 's16',
    borderRadius: 's12',
  };

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={focusInput}>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            style={$textInputStyle}
            {...RNTextInputProps}
          />
          {RightComponent && (
            <Box justifyContent="center" ml="s16">
              {RightComponent}
            </Box>
          )}
        </Box>
        {errorMessage && (
          <Text bold preset="paragraphSmall" color="error">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  padding: 0,
  flexGrow: 1,
  flexShrink: 1,

  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

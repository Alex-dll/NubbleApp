import React from 'react';
import {Box} from '../Box';
import {type ScreenProps} from './types';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';
import {Icon} from '../Icon';
import {Text} from '../Text';

export function Screen({children, canGoBack = false}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}}>
      {canGoBack && (
        <Box mb="s24" flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="primary" />
          <Text preset="paragraphMedium" semiBold ml="s8">
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}

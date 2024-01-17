import React from 'react';

import {Button, Icon, Screen, Text} from '@components';
import {SuccessScreenScreenProps} from '@routes';

export function SuccessScreen({navigation, route}: SuccessScreenScreenProps) {
  return (
    <Screen>
      <Icon {...route.params.icon} size={48} />
      <Text preset="headingLarge" mt="s24">
        {route.params.title}
      </Text>
      <Text preset="paragraphLarge" mt="s16">
        {route.params.description}
      </Text>
      <Button onPress={navigation.goBack} title="Voltar ao início" mt="s40" />
    </Screen>
  );
}

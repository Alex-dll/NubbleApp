import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/Routes/types';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: RootStackParamList['SuccessScreen']) {
    navigation.reset({
      index: 1,
      routes: [
        {name: 'LoginScreen'},
        {
          name: 'SuccessScreen',
          params: {
            title: params.title,
            description: params.description,
            icon: params.icon,
          },
        },
      ],
    });
  }

  return {reset};
}

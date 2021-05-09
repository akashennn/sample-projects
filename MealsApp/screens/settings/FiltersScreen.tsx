import React from 'react';
import { Text, View } from 'react-native';
import {
  TProfileScreenNavigationProp,
  TProfileScreenRouteProp,
} from '../../navigation/Navigator';

type TProps = {
  route: TProfileScreenRouteProp;
  navigation: TProfileScreenNavigationProp;
};

const FiltersScreen = ({ route, navigation }: TProps): JSX.Element => {
  console.log('route', route);
  console.log('navigation', navigation);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>FiltersScreen</Text>
    </View>
  );
};

export default FiltersScreen;

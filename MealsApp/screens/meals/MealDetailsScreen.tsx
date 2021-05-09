import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { Dispatch, useEffect } from 'react';
import { Image, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import DataRow from '../../components/DataRow';
import { TStackParamList } from '../../navigation/Navigator';
import { TAppState } from '../../redux/reducers/rootReducer';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { TOGGLE_FAVORITE, TMealsActions } from './../../redux/actions/meals';
import { TMeal } from '../../types/api';

export type TProfileScreenRouteProp = RouteProp<
  TStackParamList,
  'MealDetailsScreen'
>;

export type TProfileScreenNavigationProp = StackNavigationProp<
  TStackParamList,
  'MealDetailsScreen'
>;

type TProps = {
  route: TProfileScreenRouteProp;
  navigation: TProfileScreenNavigationProp;
};

const MealDetailsScreen = ({ route, navigation }: TProps): JSX.Element => {
  const { menuId, title } = route.params;
  const mealData = useSelector((state: TAppState) => state.meals.meals).find(
    (m) => m.id === menuId
  );
  const isFavoriteMeal = useSelector(
    (state: TAppState) => state.meals.userFavorites
  ).find((m) => m.id === menuId);
  const mealDispatch = useDispatch<Dispatch<TMealsActions>>();

  const userFavoritesToggle = () => {
    return (
      <MaterialIcon
        name='favorite-outline'
        style={{
          fontSize: 24,
          padding: 12,
          color: isFavoriteMeal ? 'red' : 'black',
        }}
        onPress={() =>
          mealDispatch({ type: TOGGLE_FAVORITE, meal: mealData as TMeal })
        }
      />
    );
  };

  useEffect(() => {
    navigation.setOptions({ title, headerRight: () => userFavoritesToggle() });
  }, [title, mealData, isFavoriteMeal]);

  if (!mealData) {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Text>No data found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Image source={{ uri: mealData.imageUrl }} style={{ height: 200 }} />

      <DataRow title='Preparation Time' data={`${mealData.duration} minutes`} />

      <Text
        style={{
          marginRight: 12,
          marginLeft: 12,
          marginBottom: 12,
          fontSize: 18,
          fontWeight: 'bold',
        }}
      >
        Ingredients
      </Text>

      {mealData.ingredients.map((ingredient, index) => (
        <DataRow
          title={`#${index}`}
          data={`${ingredient}`}
          key={index}
          isListItem
        />
      ))}
    </View>
  );
};

export default MealDetailsScreen;

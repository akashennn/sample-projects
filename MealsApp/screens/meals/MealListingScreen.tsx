import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import { TStackParamList } from '../../navigation/Navigator';
import { TAppState } from '../../redux/reducers/rootReducer';

export type TProfileScreenRouteProp = RouteProp<
  TStackParamList,
  'MealListingScreen'
>;

export type TProfileScreenNavigationProp = StackNavigationProp<
  TStackParamList,
  'MealListingScreen'
>;

type TProps = {
  route: TProfileScreenRouteProp;
  navigation: TProfileScreenNavigationProp;
};

const MealListingScreen = ({ navigation, route }: TProps): JSX.Element => {
  const { title, categoryId } = route.params;

  const mealsData = useSelector(
    (state: TAppState) => state.meals.meals
  ).filter((m) => m.categoryIds.includes(categoryId));

  useEffect(() => {
    navigation.setOptions({ title });
  }, [title]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <FlatList
        data={mealsData}
        renderItem={(menu) => (
          <View
            style={{
              display: 'flex',
              flex: 1,
              margin: 12,
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MealDetailsScreen', {
                  menuId: menu.item.id,
                  title: menu.item.title,
                })
              }
            >
              <View
                style={{
                  display: 'flex',
                  flex: 1,
                  height: 200,
                }}
              >
                <ImageBackground
                  source={{ uri: menu.item.imageUrl }}
                  style={{ flex: 1, justifyContent: 'flex-end' }}
                >
                  <Text
                    style={{
                      color: 'white',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      backgroundColor: '#000000a0',
                    }}
                  >
                    {menu.item.title}
                  </Text>
                </ImageBackground>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(menu) => menu.id}
      />
    </View>
  );
};

export default MealListingScreen;

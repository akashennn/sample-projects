import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { TStackParamList } from '../../navigation/Navigator';
import { TAppState } from '../../redux/reducers/rootReducer';

export type TProfileScreenRouteProp = RouteProp<
  TStackParamList,
  'MealCategoriesScreen'
>;

export type TProfileScreenNavigationProp = StackNavigationProp<
  TStackParamList,
  'MealCategoriesScreen'
>;

type TProps = {
  route: TProfileScreenRouteProp;
  navigation: TProfileScreenNavigationProp;
};

const MealCategoriesScreen = ({ navigation }: TProps): JSX.Element => {
  const categoriesData = useSelector(
    (state: TAppState) => state.meals.categories
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <FlatList
        data={categoriesData}
        numColumns={2}
        renderItem={(category) => (
          <View
            style={{
              display: 'flex',
              height: '100%',
              width: '50%',
            }}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('MealListingScreen', {
                  categoryId: category.item.id,
                  title: category.item.title,
                })
              }
            >
              <View
                style={{
                  display: 'flex',
                  height: 150,
                  padding: 12,
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: `${category.item.color}`,
                  marginTop: 6,
                  marginBottom: 6,
                  marginLeft: 6,
                  marginRight: 6,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  backgroundColor: `${category.item.color}`,
                }}
              >
                <Text style={{ textAlign: 'right' }}>
                  {category.item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(category) => category.id}
      />
    </View>
  );
};

export default MealCategoriesScreen;

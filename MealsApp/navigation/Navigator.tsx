import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MealListingScreen from '../screens/meals/MealListingScreen';
import MealCategoriesScreen from '../screens/meals/MealCategoriesScreen';
import MealDetailsScreen from '../screens/meals/MealDetailsScreen';
import MealFavoritesScreen from '../screens/meals/MealFavoritesScreen';
import FiltersScreen from '../screens/settings/FiltersScreen';
import AntIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export type TStackParamList = {
  MealCategoriesScreen: undefined;
  MealListingScreen: { categoryId: string; title: string };
  MealDetailsScreen: { menuId: string; title: string };
  MealFavoritesScreen: undefined;
  Filters: undefined;
};

const Navigator = () => {
  const Drawer = createDrawerNavigator();
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator<TStackParamList>();

  const drawerNavigationToggle = (navigation: any) => {
    return (
      <AntIcon
        onPress={() => navigation.toggleDrawer()}
        name='menu-unfold'
        style={{ fontSize: 24, padding: 12 }}
      />
    );
  };

  // flows
  const mealsFlow = () => {
    return (
      <Stack.Navigator initialRouteName='MealCategoriesScreen'>
        <Stack.Screen
          name='MealCategoriesScreen'
          component={MealCategoriesScreen}
          options={({ navigation }) => ({
            title: 'Categories',
            headerLeft: () => drawerNavigationToggle(navigation),
          })}
        />
        <Stack.Screen name='MealListingScreen' component={MealListingScreen} />
        <Stack.Screen name='MealDetailsScreen' component={MealDetailsScreen} />
      </Stack.Navigator>
    );
  };

  const favoritesFlow = () => {
    return (
      <Stack.Navigator initialRouteName='MealFavoritesScreen'>
        <Stack.Screen
          name='MealFavoritesScreen'
          component={MealFavoritesScreen}
          options={({ navigation }) => ({
            headerLeft: () => drawerNavigationToggle(navigation),
            title: 'Favorites',
          })}
        />
        <Stack.Screen name='MealDetailsScreen' component={MealDetailsScreen} />
      </Stack.Navigator>
    );
  };

  const mealsAndFavoritesFlow = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name='Meals'
          component={mealsFlow}
          options={{
            tabBarIcon: () => (
              <IonIcon name='fast-food-outline' style={{ fontSize: 24 }} />
            ),
          }}
        />
        <Tab.Screen
          name='Favorites'
          component={favoritesFlow}
          options={{
            tabBarIcon: () => (
              <MaterialIcon name='favorite-outline' style={{ fontSize: 24 }} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };

  const settingsFlow = () => {
    return (
      <Stack.Navigator initialRouteName='Filters'>
        <Stack.Screen
          name='Filters'
          component={FiltersScreen}
          options={({ navigation }) => ({
            headerLeft: () => drawerNavigationToggle(navigation),
          })}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='MealsAndFavorites'>
        <Drawer.Screen
          name='MealsAndFavorites'
          component={mealsAndFavoritesFlow}
          options={{ title: 'Meals' }}
        />
        <Drawer.Screen name='Settings' component={settingsFlow} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;

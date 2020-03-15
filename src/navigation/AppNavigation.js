import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { theme } from '../theme';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationScreen } from '../screens/AuthorizationScreen';
import { ListScreen } from '../screens/ListScreen';
import { ElementScreen } from '../screens/ElementScreen';
import { User } from '../components/uiElements/User';

const Stack = createStackNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.DANGER_COLOR,
          height: 70
        },
        headerTintColor: theme.WHITE_COLOR,
        headerTitleStyle: {
          fontSize: 16
        },
        headerRightContainerStyle: {
          marginRight: 20
        }
      }}
    >
      <Stack.Screen
        name="Auth"
        component={AuthorizationScreen}
        options={{
          title: 'Вход в личный кабинет'
        }}
      />
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'Список',
          headerLeft: null,
          headerRight: () => <User />
        }}
      />
      <Stack.Screen
        name="Element"
        component={ElementScreen}
        options={{
          title: 'Элемент',
          headerRight: () => <User />
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
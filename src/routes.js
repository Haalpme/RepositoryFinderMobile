import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        gestureEnabled: false,
        headerBackTitle: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#FFF',
      }}
    >
      <Stack.Screen
        name={Main.options.title}
        options={{ title: Main.options.title }}
        component={Main}
      />
      <Stack.Screen
        name="User"
        component={User}
        options={{ title: User.navigationOptions.title }}
      />
    </Stack.Navigator>
  );
}

export default Routes;

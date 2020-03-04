import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenList from './screens/screenList';
import Authentication from './screens/screenAuthentication';

export default class MyComponent extends React.Component {
  render() {
    const Stack = createStackNavigator();
    xBackground = { backgroundColor: '#fd7e14'}

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authentication">
          <Stack.Screen name="Authentication"
          component={Authentication}
            options={
              {
                title: 'Authentication',
                headerStyle: xBackground,
                headerTintColor: '#fff',
              }
            } />
            <Stack.Screen name="ScreenList"
            component={ScreenList}
            options={
              {
                title: 'ScreenList',
                headerStyle: xBackground,
                headerTintColor: '#fff',
              }
            } />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
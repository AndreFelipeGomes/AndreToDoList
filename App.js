import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ColorPropType } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Authentication from './screens/screenAuthentication';
import ScreenList from './screens/screenList';

export default class MyComponent extends React.Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Authentication">
          <Stack.Screen name="Authentication"
            component={Authentication}
            options={
              {
                title: 'Authentication',
                headerStyle: {
                  backgroundColor: '#fd7e14',
                },
                headerTintColor: '#fff',
              }
            } />
            <Stack.Screen name="ScreenList"
            component={ScreenList}
            options={
              {
                title: 'ScreenList',
                headerStyle: {
                  backgroundColor: '#fd7e14',
                },
                headerTintColor: '#fff',
              }
            } />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
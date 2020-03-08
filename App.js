import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenList from './screens/screenList';
import Authentication from './screens/screenAuthentication';
import AddToDoList from './screens/screenAddToDoList';
import {Portal} from 'react-native-paper';

export default class MyComponent extends React.Component {
  render() {
    const Stack = createStackNavigator();
    xBackground = { backgroundColor: '#FE5F55'}

    return (
      <NavigationContainer>
        <Portal.Host>
          <Stack.Navigator initialRouteName="Authentication">
            <Stack.Screen name="Authentication"
            component={Authentication}
              options={
                {
                  title: 'Authentication',
                  headerStyle: xBackground,
                  headerTintColor: '#EEf5DB',
                }
              } />
              <Stack.Screen name="ScreenList"
              component={ScreenList}
              options={
                {
                  title: 'ScreenList',
                  headerStyle: xBackground,
                  headerTintColor: '#EEf5DB',
                }
              } />
              <Stack.Screen name="AddToDoList"
              component={AddToDoList}
              options={
                {
                  title: 'AddToDoList',
                  headerStyle: xBackground,
                  headerTintColor: '#EEf5DB',
                }
              } />
          </Stack.Navigator>
        </Portal.Host>
      </NavigationContainer>
    );
  }
}
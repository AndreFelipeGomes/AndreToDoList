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
<<<<<<< HEAD
    xBackground = { backgroundColor: '#FE5F55'}
=======
    xBackground = { backgroundColor: '#fd7e14'}
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e

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
<<<<<<< HEAD
                  headerTintColor: '#EEf5DB',
=======
                  headerTintColor: '#fff',
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                }
              } />
              <Stack.Screen name="ScreenList"
              component={ScreenList}
              options={
                {
                  title: 'ScreenList',
                  headerStyle: xBackground,
<<<<<<< HEAD
                  headerTintColor: '#EEf5DB',
=======
                  headerTintColor: '#fff',
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                }
              } />
              <Stack.Screen name="AddToDoList"
              component={AddToDoList}
              options={
                {
                  title: 'AddToDoList',
                  headerStyle: xBackground,
<<<<<<< HEAD
                  headerTintColor: '#EEf5DB',
=======
                  headerTintColor: '#fff',
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                }
              } />
          </Stack.Navigator>
        </Portal.Host>
      </NavigationContainer>
    );
  }
}
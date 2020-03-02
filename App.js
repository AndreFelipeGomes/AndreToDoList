import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import Authentication from './screens/screenAuthentication';

export default class MyComponent extends React.Component {
  state = {
    user: '',
    password: '',
    auth: false,
  };

  _validAuth = () => {
    (this.state.user == 'ANDRE')?
      (this.state.password == '123')? 
       this.setState({auth : true})
      :
       this.setState({auth : false})
    : 
      this.setState({auth : false})
  }
  render(){
    return (
      <Authentication>

      </Authentication>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    backgroundColor: 'rgb(34, 34, 34)',
  },
})

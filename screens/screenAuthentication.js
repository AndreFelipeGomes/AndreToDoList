import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';
import { SQLiteWrapper, delayedAlert, HProWS, formatCurrency } from '../hpro-rn';

export default class Authentication extends React.Component {
    state = {
        user: 'A',
        password: 'A',
    };
    componentDidMount = () => {
        this.createTable()
     }
     createTable = async () => {
       await SQLiteWrapper.transactionAsync(transaction => {
         transaction.executeSql('create table if not exists htod (id INTEGER PRIMARY KEY AUTOINCREMENT, name varchar(100), checked integer default 0)');
       })	
     }
     dropTable = async () => {
        await SQLiteWrapper.transactionAsync(transaction => {
          transaction.executeSql('drop table if exists htod');
        })	
        this.createTable()
      }
    _validAuth = () => {
        
        (this.state.user == 'A') ?
            (this.state.password == 'A') ?
                this.props.navigation.navigate('ScreenList',{
                    itemId: 86,
                    otherParam: 'anything you want here',
                  })
                :
                this.setState({ auth: false })
            :
            this.setState({ auth: false })
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.textInput}
                    label='Usuario'
                    value={this.state.user}
                    onChangeText={user => this.setState({ user })}
                />
                <TextInput
                    style={styles.textInput}
                    label='Senha'
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity style={styles.button} onPress={this._validAuth}>
                    <Text>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.dropTable}>
                    <Text>DropDataBase</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgb(34, 34, 34)',
    },
    textInput: {
        margin: 5,
    },
    button: {
        backgroundColor: '#fd7e14',
        height: 40,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    textButton: {
        color: 'red'
    },
});

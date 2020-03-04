import React from 'react';
import 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper'; 
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class AddToDoList extends React.Component {
    state = {
        descricaoToDo : '',
    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput
                     style={styles.textInput}
                     label='Descrição'
                     value={this.state.descricaoToDo}
                     onChangeText={descricaoToDo => this.setState({descricaoToDo})}
                />
                <TouchableOpacity style={styles.button}>
                    <Text>Adicionar</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(34, 34, 34)',
    },
    textInput: {
        marginTop: 10,
        margin: 5,
    },
    button: {
        height: 40,
        backgroundColor: '#fd7e14',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    }
});
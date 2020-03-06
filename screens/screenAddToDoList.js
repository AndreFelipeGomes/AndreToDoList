import React from 'react';
import 'react-native-gesture-handler';
import { TextInput, Portal } from 'react-native-paper'; 
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Animated } from 'react-native';
import { SQLiteWrapper } from 'hpro-rn/';


export default class AddToDoList extends React.Component {
    constructor(props){
        super(props)
    }

    state = {
        opacity: new Animated.Value(0),
        descricaoToDo : '',
    }

    componentDidMount = () => {
        Animated.spring(
            this.state.opacity,
            {
                toValue: 1,
                duration: 1000,
            }
        ).start()
    }

    _goBack = () => {
        this.props._addToDo(this.state.descricaoToDo);
        this.props._changeState();
    }

    render(){
        return (
            <Portal>
                <Animated.View style={{flex: 1,backgroundColor: 'rgba(34,34,34,0.8)', opacity: this.state.opacity}}>
                    <TouchableOpacity style={{flex:1}} onPress={() => this.props._changeState()}>
                    <View style={{
                            top: ((Math.round(Dimensions.get('window').height/2)-75)),//((Altura da tela/2)-(Altura do view/2))
                            height: 150,
                            borderRadius: 5,
                            marginLeft: 10,
                            marginRight: 10,
                            backgroundColor: '#6c757d',
                        }}>
                        <View style={{flex:1}}>
                            <TextInput
                                style={styles.textInput}
                                label='Descrição'
                                value={this.state.descricaoToDo}
                                onChangeText={descricaoToDo => this.setState({descricaoToDo})}
                            />
                        </View>
                        <TouchableOpacity style={styles.button} onPress={this._goBack}>
                            <Text>Adicionar</Text>
                        </TouchableOpacity>
                    </View>
                    </TouchableOpacity>
                </Animated.View>
            </Portal>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        top: 0,
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: '#fff',
    },
    textInput: {
        flex: 1,
        marginTop: 5,
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
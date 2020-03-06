import React from 'react';
import 'react-native-gesture-handler';
import { IconButton, Checkbox} from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Dimensions, Animated, Text } from 'react-native';
import { SQLiteWrapper  } from '../hpro-rn';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        width:  new Animated.Value(0),
        right:  new Animated.Value(-100),
        openClose: false,
        moveToLeft: new Animated.Value(Math.round(Dimensions.get('window').width)),
    }

    componentDidMount = () => {
        Animated.spring(
            this.state.moveToLeft,
            {
                toValue : 0,
                duration: 1000,
            }
        ).start()
    }

    _changeChecked = (id,checked) => {
        this.props._changeChecked(id,checked)
    }
    _movToExc = async() => {
        Animated.timing(
            this.state.moveToLeft,
            {
                toValue : (this.state.openClose)? 0 : 50,
                duration : 470,
            }
        ).start(
            Animated.timing(
                this.state.right,
                {
                    toValue : (this.state.openClose)? -100 : 0,
                    duration : 470,
                }
            ).start(
                Animated.timing(
                    this.state.width,
                    {
                        toValue : (this.state.openClose)? 0 : 100,
                        duration : 470,
                    }
                ).start()
            ),
            this.setState({
                openClose : !this.state.openClose
            })
        )
    }
    _deleteToDo = async (id) => {
        console.log('assas')
        await SQLiteWrapper.transactionAsync(transaction => {
            transaction.executeSql(`delete from htod where id = ${3}`);
          })	
    }
    render() {
        return (
            <Animated.View style={{
                flex: 1, 
                zIndex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#343a40',
                borderRadius: 5,
                padding: 7,
                marginVertical: 8,
                marginHorizontal: 16,
                right: this.state.moveToLeft,
            }}>
                <TouchableOpacity onPressIn={this._movToExc} style={{flex: 1, flexDirection:'row', zIndex: 2}}>
                    <Checkbox
                        status={(this.props._item.checked == 1) ? 'checked' : 'unchecked'}
                        onPress={() => this._changeChecked(this.props._item.id, this.props._item.checked)}
                        style={{zIndex: 2}}
                    />
                    <Text style={styles.title}>{this.props._item.name}</Text>
                </TouchableOpacity>
                <IconButton
                    icon="camera"
                    color='orange'
                    size={30}
                    onPress={() => null}
                    key={this.props._item.id}
                />
                <TouchableOpacity onPress={this._deleteToDo}style={{ justifyContent: 'center',alignItems: 'center',borderBottomRightRadius: 5,borderTopRightRadius: 5,position: 'absolute',backgroundColor: '#dc3545', height: 70, width: this.state.width, zIndex: 1, right:this.state.right}}>
                    <Text style={{color: '#fff'}}>Excluir</Text>
                </TouchableOpacity>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
        backgroundColor: 'rgb(34, 34, 34)'
    },
    item: {
        flex: 1,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#343a40',
        borderRadius: 5,
        padding: 7,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        zIndex: 2,
        fontSize: 22,
        color:'#fff'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'orange'
    },
});
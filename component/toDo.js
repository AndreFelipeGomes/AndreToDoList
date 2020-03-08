import React from 'react';
import 'react-native-gesture-handler';
<<<<<<< HEAD
import { IconButton, Checkbox } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Dimensions, Animated, Text, Keyboard } from 'react-native';
import { SQLiteWrapper } from '../hpro-rn';
=======
import { IconButton, Checkbox} from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Dimensions, Animated, Text } from 'react-native';
import { SQLiteWrapper  } from '../hpro-rn';
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
<<<<<<< HEAD
        width: new Animated.Value(0),
        right: new Animated.Value(-100),
=======
        width:  new Animated.Value(0),
        right:  new Animated.Value(-100),
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
        openClose: false,
        moveToLeft: new Animated.Value(Math.round(Dimensions.get('window').width)),
    }

<<<<<<< HEAD
    // componentWillMount () {
    //     // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    //     // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    // }
    
    // componentWillUnmount () {
    //     // this.keyboardDidShowListener.remove();
    //     // this.keyboardDidHideListener.remove();
    // }

=======
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
    componentDidMount = () => {
        Animated.spring(
            this.state.moveToLeft,
            {
<<<<<<< HEAD
                toValue: 0,
                duration: 1000,
                // useNativeDriver: true,
            }
        ).start()
        // Animated.parallel([
        //     Animated.spring(
        //         this.state.moveToLeft,
        //         {
        //             toValue: 0,
        //             duration: 1000,
        //         }
        //     ),
        //     Animated.spring(
        //         this.state.moveToLeft,
        //         {
        //             toValue: 0,
        //             duration: 1000,
        //         }
        //     )
        // ]).start()
    }

    _keyboardDidShow = () => {
         console.log('as')
    }

    _keyboardDidHide = () => {
         console.log('as')
    }

    _changeChecked = (id, checked) => {
        this.props._changeChecked(id, checked)
    }
    _movToExc = async () => {
        Animated.timing(
            this.state.moveToLeft,
            {
                toValue: (this.state.openClose) ? 0 : 50,
                duration: 470,
            }
        ).start(
            
            Animated.timing(
                this.state.right,
                {
                    toValue: (this.state.openClose) ? -100 : 0,
                    duration: 470,
=======
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
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                }
            ).start(
                Animated.timing(
                    this.state.width,
                    {
<<<<<<< HEAD
                        toValue: (this.state.openClose) ? 0 : 100,
                        duration: 470,
=======
                        toValue : (this.state.openClose)? 0 : 100,
                        duration : 470,
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                    }
                ).start()
            ),
            this.setState({
<<<<<<< HEAD
                openClose: !this.state.openClose
            })
        )
    }
    _deleteToDo = async () => {                  
        await SQLiteWrapper.transactionAsync(transaction => {
            transaction.executeSql(`delete from htod where id = ?`, [this.props._item.id]);
        })
        this.props._attStatList()
=======
                openClose : !this.state.openClose
            })
        )
    }
    _deleteToDo = async (id) => {
        console.log('assas')
        await SQLiteWrapper.transactionAsync(transaction => {
            transaction.executeSql(`delete from htod where id = ${3}`);
          })	
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
    }
    render() {
        return (
            <Animated.View style={{
<<<<<<< HEAD
                flex: 1,
=======
                flex: 1, 
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                zIndex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
<<<<<<< HEAD
                backgroundColor: '#4F6567',
=======
                backgroundColor: '#343a40',
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                borderRadius: 5,
                padding: 7,
                marginVertical: 8,
                marginHorizontal: 16,
                right: this.state.moveToLeft,
            }}>
<<<<<<< HEAD
                <TouchableOpacity onPressIn={this._movToExc} style={{ flex: 1, flexDirection: 'row', zIndex: 2 }}>
                    <Checkbox
                        status={(this.props._item.checked == 1) ? 'checked' : 'unchecked'}
                        onPress={() => this._changeChecked(this.props._item.id, this.props._item.checked)}
                        style={{ zIndex: 2 }}
=======
                <TouchableOpacity onPressIn={this._movToExc} style={{flex: 1, flexDirection:'row', zIndex: 2}}>
                    <Checkbox
                        status={(this.props._item.checked == 1) ? 'checked' : 'unchecked'}
                        onPress={() => this._changeChecked(this.props._item.id, this.props._item.checked)}
                        style={{zIndex: 2}}
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                    />
                    <Text style={styles.title}>{this.props._item.name}</Text>
                </TouchableOpacity>
                <IconButton
                    icon="camera"
<<<<<<< HEAD
                    color='#B8D8D8'
=======
                    color='orange'
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
                    size={30}
                    onPress={() => null}
                    key={this.props._item.id}
                />
<<<<<<< HEAD
                <Animated.View style={{
                    ...styles.excl,
                    right: this.state.right,
                    width: this.state.width,
                }}>
                    <TouchableOpacity onPress={this._deleteToDo}>
                        <Text style={{ color: '#fff' }}>Excluir</Text>
                    </TouchableOpacity>
                </Animated.View>
=======
                <TouchableOpacity onPress={this._deleteToDo}style={{ justifyContent: 'center',alignItems: 'center',borderBottomRightRadius: 5,borderTopRightRadius: 5,position: 'absolute',backgroundColor: '#dc3545', height: 70, width: this.state.width, zIndex: 1, right:this.state.right}}>
                    <Text style={{color: '#fff'}}>Excluir</Text>
                </TouchableOpacity>
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
<<<<<<< HEAD
=======
        backgroundColor: 'rgb(34, 34, 34)'
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
    },
    item: {
        flex: 1,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
<<<<<<< HEAD
=======
        backgroundColor: '#343a40',
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
        borderRadius: 5,
        padding: 7,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        zIndex: 2,
        fontSize: 22,
<<<<<<< HEAD
        color: '#fff',
=======
        color:'#fff'
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'orange'
    },
<<<<<<< HEAD
    excl: {
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,
        position: 'absolute',
        backgroundColor: '#FE5F55',
        height: 70,
        zIndex: 1,
    }
=======
>>>>>>> f6e547605ebe83656d7a6bee9420471b1a8cd94e
});
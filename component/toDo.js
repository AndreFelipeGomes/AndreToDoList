import React from 'react';
import 'react-native-gesture-handler';
import { IconButton, Checkbox } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, Dimensions, Animated, Text, Keyboard } from 'react-native';
import { SQLiteWrapper } from '../hpro-rn';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        width: new Animated.Value(0),
        right: new Animated.Value(-100),
        openClose: false,
        moveToLeft: new Animated.Value(Math.round(Dimensions.get('window').width)),
    }

    // componentWillMount () {
    //     // this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow.bind(this));
    //     // this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide.bind(this));
    // }
    
    // componentWillUnmount () {
    //     // this.keyboardDidShowListener.remove();
    //     // this.keyboardDidHideListener.remove();
    // }

    componentDidMount = () => {
        Animated.spring(
            this.state.moveToLeft,
            {
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
                }
            ).start(
                Animated.timing(
                    this.state.width,
                    {
                        toValue: (this.state.openClose) ? 0 : 100,
                        duration: 470,
                    }
                ).start()
            ),
            this.setState({
                openClose: !this.state.openClose
            })
        )
    }
    _deleteToDo = async () => {                  
        await SQLiteWrapper.transactionAsync(transaction => {
            transaction.executeSql(`delete from htod where id = ?`, [this.props._item.id]);
        })
        this.props._attStatList()
    }
    render() {
        return (
            <Animated.View style={{
                flex: 1,
                zIndex: 2,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: '#4F6567',
                borderRadius: 5,
                padding: 7,
                marginVertical: 8,
                marginHorizontal: 16,
                right: this.state.moveToLeft,
            }}>
                <TouchableOpacity onPressIn={this._movToExc} style={{ flex: 1, flexDirection: 'row', zIndex: 2 }}>
                    <Checkbox
                        status={(this.props._item.checked == 1) ? 'checked' : 'unchecked'}
                        onPress={() => this._changeChecked(this.props._item.id, this.props._item.checked)}
                        style={{ zIndex: 2 }}
                    />
                    <Text style={styles.title}>{this.props._item.name}</Text>
                </TouchableOpacity>
                <IconButton
                    icon="camera"
                    color='#B8D8D8'
                    size={30}
                    onPress={() => null}
                    key={this.props._item.id}
                />
                <Animated.View style={{
                    ...styles.excl,
                    right: this.state.right,
                    width: this.state.width,
                }}>
                    <TouchableOpacity onPress={this._deleteToDo}>
                        <Text style={{ color: '#fff' }}>Excluir</Text>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        zIndex: 1,
    },
    item: {
        flex: 1,
        zIndex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        padding: 7,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        zIndex: 2,
        fontSize: 22,
        color: '#fff',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'orange'
    },
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
});
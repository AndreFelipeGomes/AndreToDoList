import React from 'react';
import 'react-native-gesture-handler';
import { TextInput, Portal, IconButton, Checkbox} from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, Dimensions, Animated, Text } from 'react-native';

export default class ToDo extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
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

    render() {
        return (
            <Animated.View style={{
                flex: 1,
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
                <View style={{flex: 1, flexDirection:'row'}}>
                    <Checkbox
                        status={(this.props._item.checked == 1) ? 'checked' : 'unchecked'}
                        onPress={() => this._changeChecked(this.props._item.id, this.props._item.checked)}
                    />
                    <Text style={styles.title}>{this.props._item.name}</Text>
                </View>
                <IconButton
                    icon="camera"
                    color='orange'
                    size={30}
                    onPress={() => null}
                    key={this.props._item.id}
                />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(34, 34, 34)'
    },
    item: {
        flex: 1,
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
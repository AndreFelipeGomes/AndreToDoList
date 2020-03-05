import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Animated } from 'react-native';
import { Text, IconButton, FAB, Portal } from 'react-native-paper';
import 'react-native-gesture-handler';
import AddToDoList from './screenAddToDoList';
import ToDo from '../component/toDo';

export default class ScreenList extends React.Component {
    constructor(props) {
        super(props)
    }

    _changeState = () => {
        this.setState({
            adding: !this.state.adding,
        })
    }

    state = {
        adding: false,
        list: [
            {
                id: '1',
                name: "andre",
                checked: false,
            },
            {
                id: '2',
                name: "suellen",
                checked: false,
            }
        ]
    }
    _changeChecked = (id,checked) => {
        console.log(checked)
        let list = this.state.list
        list[id-1].checked = !checked
        this.setState({
            list: list,
        })
        // console.log(this.state.list)
    }
    _addToDo = (name) => {
        let list = this.state.list
        let nId = (list.length+1)
        nId = JSON.stringify(nId)
        let object = { name: name, id: nId}
        console.log(nId)
        list.push(object)
        this.setState({ list: list })
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) =>
                            <ToDo 
                                _item={item}
                                _changeChecked={this._changeChecked.bind(this)}
                            />
                    }
                    keyExtractor={(item) => item.id}
                />
                {
                    this.state.adding ?
                        <AddToDoList
                            _changeState={this._changeState}
                            _addToDo={this._addToDo.bind(this)}
                        />
                        :
                        null
                }

                <FAB
                    style={styles.fab}
                    icon="plus"
                    color='white'
                    // onPress={() => this._PushOnStateList()}
                    onPress={() => this.setState({ adding: true })}
                />
            </SafeAreaView>
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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: 'orange'
    },
});
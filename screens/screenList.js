import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList, Animated } from 'react-native';
import { Text, IconButton, FAB, Portal } from 'react-native-paper';
import 'react-native-gesture-handler';
import AddToDoList from './screenAddToDoList';
import ToDo from '../component/toDo';
import { SQLiteWrapper } from '../hpro-rn';

export default class ScreenList extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        adding: false,
        list: []
    }
   _attStatList = async () => {
        var resultSet = await SQLiteWrapper.executeSqlAsync('select * from htod');
        this.setState({list: resultSet.rows._array})
   }
   componentDidMount = () => {
        this._attStatList()
   }
    _changeState = () => {
        this.setState({
            adding: !this.state.adding,
        })
    }
    _changeChecked = async (id,checked) => {
        const chk = (checked == 0)? 1 : 0
        await SQLiteWrapper.executeSqlAsync(`update htod set checked = ${chk} where id = ${id}`)
        this._attStatList();
    }
    _addToDo = async (name) => {
        await SQLiteWrapper.executeSqlAsync('insert into htod (name, checked) values (?,?)',[name,0])
        var resultSet = await SQLiteWrapper.executeSqlAsync('select * from htod');
        console.log('as')
        this.setState({list: resultSet.rows._array})
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
                                _attStatList={this._attStatList.bind(this)}
                            />
                    }
                    keyExtractor={(item) => item.id.toString()}
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
        backgroundColor: '#EEF5DB'
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#7A9E9F'
    },
});
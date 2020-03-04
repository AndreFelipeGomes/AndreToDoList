import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Text, IconButton, FAB } from 'react-native-paper';
import 'react-native-gesture-handler';

export default class ScreenList extends React.Component {
    componentDidMount = () => {
        //const params = JSON.stringify(this.props.navigation.getParam('itemId', 'NO-ID'))
        console.log(this.props.navigation)
        // this.setState({
        //     list : [
        //         {
        //             name : params.name
        //         },
        //         {
        //             name : params.name
        //         }
        //     ]
        // })
    }
    
    state = {
        list: [
            {
                name: "andre"
            },
            {
                name: "suellen"
            }
        ]
    }

    _PushOnStateList = () => {
        let list = this.state.list
        let object = { name: "suellen" }
        list.push(object)
        this.setState({ list : list})
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={({ item }) =>
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.name}</Text>
                            <IconButton
                                icon="camera"
                                color='orange'
                                size={30}
                                onPress={() => this._PushOnStateList()}
                            />
                        </View>}
                    keyExtractor={( item , index) => index}
                />
                <FAB
                    style={styles.fab}
                    icon="plus"
                    color='white'
                    // onPress={() => this._PushOnStateList()}
                    onPress={() => this.props.navigation.navigate('AddToDoList')}
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
        flex : 1,
        flexDirection : 'row', 
        justifyContent : 'space-between',
        alignItems : 'center',
        backgroundColor: '#343a40',
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
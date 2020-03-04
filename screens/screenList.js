import React from 'react';
import { StyleSheet, View, SafeAreaView, FlatList } from 'react-native';
import { Text, IconButton, FAB } from 'react-native-paper';
import 'react-native-gesture-handler';

export default class ScreenList extends React.Component {
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
                    renderItem={({ item, index }) =>
                        <View style={styles.item}>
                            <Text style={styles.title}>{item.name}</Text>
                            <IconButton
                                icon="camera"
                                color='orange'
                                size={30}
                                onPress={() => console.log('Pressed')}
                            />
                        </View>}
                    keyExtractor={(item , index) => index}
                />
                <FAB
                    style={styles.fab}
                    small
                    icon="plus"
                    onPress={() => this._PushOnStateList()}
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
        padding: 20,
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
      },
});
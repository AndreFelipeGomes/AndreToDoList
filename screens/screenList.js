import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { FlatList } from 'react-native-paper';

export default class ScreenList extends React.Component {
    state = {
        list : [
            {
                name : "andre"
            },
            {
                name : "suellen"
            }
        ]
    }
    render() {
        return (
            <FlatList
                data={this.state.list}
            />
        );
    }
}
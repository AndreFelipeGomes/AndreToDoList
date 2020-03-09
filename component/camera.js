import React from "react";
import 'react-native-gesture-handler';
import { View, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Text, FAB } from  'react-native-paper';
import { Camera } from 'expo-camera';
import {SQLiteWrapper } from '../hpro-rn'


export default class ToDo extends React.Component {
    constructor(props){
        super(props)
    }
    state = {
        hasPermission: null,
        setHasPermission: null,
        type : Camera.Constants.Type.back,
        uri: ''
    }

    componentDidMount = async() => {
        this.permissionCamera()
        this.attPic()
    }
    permissionCamera = async() => {
        const { status } = await Camera.requestPermissionsAsync();
        this.setState({
            hasPermission : (status === 'granted')
        })
    }
    takePic = async() => {
        let photo = await this.camera.takePictureAsync();
        await SQLiteWrapper.executeSqlAsync('update htod set uri = ? where id = ?',[photo.uri, this.props.route.params.id])
        this.setState({
            uri : photo.uri
        })
    }
    attPic = async() => {
        uri = await SQLiteWrapper.executeSqlAsync('select uri from htod where id = ?', [this.props.route.params.id])
        uri = uri.rows._array[0].uri
        console.log(uri)
        this.setState({
            uri : uri
        })

    }
    shuffleCam = () => {
        this.setState({
            type : (this.state.type === Camera.Constants.Type.back)? Camera.Constants.Type.front :  Camera.Constants.Type.back   
        })
    }
    render(){
        return(
            <SafeAreaView style={{ flex: 1 }}>
                {
                (this.state.hasPermission !== null)?
                     <View style={{flex: 1}}>
                        <Camera 
                            style={{ flex: 0.5 }} 
                            type={this.state.type}
                            ref={ref => {
                                this.camera = ref;
                            }}
                            >
                            <View
                            style={{
                                flex: 1,
                                backgroundColor: 'transparent',
                                flexDirection: 'row',
                            }}>
                            </View>
                        </Camera>
                        <View style={{flex: 0.5}}>
                        <Image
                            source={{ uri: this.state.uri }}
                            style={{flex: 1}}/>
                            <FAB
                                style={styles.fabShuffle}
                                icon="shuffle-variant"
                                color='white'
                                onPress={this.shuffleCam}
                            />
                            <FAB
                                style={styles.fabTakePic}
                                icon="camera"
                                color='white'
                                onPress={this.takePic}
                            />
                        </View>
                    </View>
                :
                    (this.state.hasPermission === false)?
                        <Text>No acess to camera</Text>
                    :
                        null
                }
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    fabTakePic: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#7A9E9F'
    }, 
    fabShuffle: {
        position: 'absolute',
        margin: 16,
        left: 0,
        bottom: 0,
        backgroundColor: '#7A9E9F'
    },
});
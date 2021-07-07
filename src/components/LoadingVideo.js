import React from 'react'
import {View,Text,Image,StyleSheet,Dimensions, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'


const LoadingVideo =(props)=>{
    return(
        <View style={styles.container}>
            <Icon name="paper-plane" size={66} color="#464BD8"/>
            <Text style={styles.text}>Loading Videos ...</Text>
            <Text style={styles.info}>You can view the videos on </Text>
            <Text style={styles.info}>your profile here.</Text>
            <View style={styles.line}></View>
            <View style={styles.addCont}>
                <Text style={styles.addlinks}>Add Links</Text>
                <Pressable onPress={props.onPress}>
                    <Icon name="add" color="white" size={25}/>
                </Pressable>
                
            </View>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container : {
        width : Dimensions.get('window').width * 0.95,
        height : 270    ,
        backgroundColor : '#617887',
        alignItems : 'center',
        justifyContent :'center',
        borderRadius : 10,
        marginTop : 20,
        paddingTop : 10
    },
    text : {
        color : "white",
        fontWeight : "700",
        fontSize : 20,
        marginBottom : 15
    },
    info :{
        color : "#D9D9DA",
        fontSize : 16,
        fontWeight  :"600"
    },
    line : {
        borderColor : "#BBBEC0",
        borderTopWidth : 2,
        width : Dimensions.get('window').width * 0.9,
        marginVertical : 15,
        opacity : 0.2
    },
    addlinks : {
        color : "#D9D9DA",
        fontSize : 15,
        fontWeight : "700",
        marginRight : 10
    },
    addCont : {
        flexDirection  : "row",
        justifyContent : "center",
        alignItems : "center",
        marginBottom : 10

    }
})
export {LoadingVideo}
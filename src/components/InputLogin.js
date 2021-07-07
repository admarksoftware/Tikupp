import React from 'react'
import {TextInput,View,StyleSheet,Platform} from 'react-native'

const InputLogin =(props)=>{
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder = {props.placeholder}
                multiline ={false}
                style={styles.inputStyle}
                placeholderTextColor = {Platform.OS === 'android' ? "#BAE4FF" : "gray"}
                onChangeText={props.onChangeText}
                returnKeyType="done"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#BBE1FA',
        width : 298,
        height : 55,
        borderRadius : 15,
        opacity : 0.44,
        alignItems : 'center',
        justifyContent :'center'
    },
    inputStyle : {
        width : 250,
        color :  'gray',
        fontWeight : '600',
        fontSize : 18
    }
})
export {InputLogin}
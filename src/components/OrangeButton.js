import React from 'react'
import {Pressable,Text,Image, StyleSheet} from 'react-native'

const OrangeButton =(props)=>{
    return(
        <Pressable onPress={props.onPress} style={[props.style,styles.container]}>
            <Text style={styles.title}>{props.title}</Text>
            <Image style={styles.icon}  source={require('../assets/star.png')}/>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container : {
        backgroundColor :'#FF6C00',
        borderRadius : 15,
        alignItems : 'center',
        flexDirection : 'row',
        justifyContent : 'center'
        
    },
    icon : {
        width : 24 ,
        height : 24,
        marginLeft : 10
    },
    title : {
        fontSize : 18,
        color : 'white',
        fontWeight : '600',

    }
})
export {OrangeButton}
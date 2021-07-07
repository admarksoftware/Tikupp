import React,{useState} from 'react'
import {Pressable,Text,Image, StyleSheet, View , Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

const width = Dimensions.get('window').width

const FollowerButton =(props)=>{
    return(
        
        <Pressable onPress={props.onPress} style={styles.container}>
            <View style={{flexDirection :'row'}}>
                
                    <Icon  name={props.true ? "user-circle"  : "heart"}color="#FF6C00" size={24}/>
                    <Text style={styles.title}>{props.data.followers}</Text>   
               
                
            </View>
                
           <View style={styles.coinCont}>
                <Text style={styles.coinText}>{props.data.coin}</Text>
                <Image style={{width : 24 ,height : 24}} source={require('../assets/star.png')}/>
           </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    container : {
        width : width * 0.9,
        height : 47,
        flexDirection : 'row',
        backgroundColor : '#2D3B44',
        justifyContent : 'space-between',
        alignItems :'center',
        paddingHorizontal : 23,
        borderRadius :  10,
        marginBottom : 15
        
    },
    title : {
        color : '#FFFFFF',
        fontSize : 15,
        fontWeight : '600',
        marginLeft : 10
    },
   coinCont : {
       flexDirection : 'row',
       alignItems : 'center'
   },
   coinText : {
       color :  '#FFFFFF',
       fontSize : 16,
       opacity : 0.4,
       marginRight : 10
   }
    
})
export {FollowerButton}
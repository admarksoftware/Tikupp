import React,{useState} from 'react'
import {Pressable,Text,Image, StyleSheet, View , Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'


const width = Dimensions.get('window').width

const HashtagDetailItem =(props)=>{
    return(
        
        <View onPress={props.onPress} style={styles.container}>
            <View style={[styles.numberCont,{marginBottom : 10}]}>
                <Icon name="hashtag" color="orange" size = {14}/>
                <Text style={styles.numberText}>{props.number}</Text>
            </View>
            <View>
                <Text style={{color : 'white'}} selectable={true}>{props.data}</Text>
            </View>
            <View style={styles.footer}>
                <View style={styles.numberCont}>
                    <Image style={{width : 16,height : 16}} source={require('../assets/star.png')}/>
                    <Text style={styles.numberText}>1</Text>
                </View>
               <Pressable onPress={props.onPress}>
                   <Text style={{color : '#BBBEC0' , fontSize : 13}}>Copy</Text>
               </Pressable>
            </View>
            
            
        </View>
    )
}
const styles = StyleSheet.create({
    container : {
        width : width * 0.95,
        backgroundColor : "#2D3B44",
        borderRadius : 20,
        marginBottom : 10,
        justifyContent : 'space-evenly',
        padding : 20
    },
    numberCont : {
        flexDirection : 'row',
        
    },
    numberText : {
        color :'#FFFFFF',
        fontSize : 13,
        marginLeft : 10
    },
   footer : {
       flexDirection : 'row',
       alignItems : 'center',
      
       marginTop : 20,
       justifyContent : 'space-between'
    
   }
})
export {HashtagDetailItem}
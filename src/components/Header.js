import React,{useState,useEffect,useContext} from 'react'
import {View,Image,Text,StyleSheet, Dimensions , Pressable} from 'react-native'
import Context from '../context/store'
import Icon from 'react-native-vector-icons/Ionicons'
import Icons from 'react-native-vector-icons/FontAwesome5'

const Header =(props)=>{
    const  [show,setShow]=useState(props.show)
    const   {state,dispatch}=useContext(Context)

    // useEffect(() => {
    //    setShow(props.show)
    // }, [])
    return(
        <View style={styles.container}>
            {show ?
            <Pressable onPress={props.onPress}>
                 <Icons name="chevron-left" size={25} color ="white"/>
            </Pressable>
             
               : 
               <Pressable onPress={props.onPress}>
                   <Icon name="add-circle" size={28} color={props.color}/>
               </Pressable>
               }
            <Text style={styles.title}>{props.title}</Text>
            <View style={styles.iconCont}>
                <Text style={styles.coin}>{state.coins}</Text>
                <Image style={{width : 26 , height : 26}} source={require('../assets/star.png')}/>
            </View>
            
        </View>
    )
}
const styles =StyleSheet.create({
    container : {
        width : Dimensions.get('window').width,
        height : 60,
        backgroundColor : "#1B262C",
        borderBottomWidth : 1,
        borderBottomColor : "#2D3B44",
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingHorizontal : 15
       
    },
    iconCont : {
        flexDirection : 'row',
        justifyContent :'center',
        alignItems :'center'
    },
    coin : {
        color : 'white' , 
        fontWeight : "700",
        marginRight : 10
    },
    title  :{
        color : 'white',
        fontSize : 18,
        fontWeight : '600'
    },
     line : {
        borderColor : "#BBBEC0",
        borderTopWidth : 2,
        width : Dimensions.get('window').width * 0.9,
        marginVertical : 15,
        opacity : 0.2
    }
})
export {Header}
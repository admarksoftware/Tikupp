import React,{useState,useContext} from 'react'
import {SafeAreaView,View,Text,Image,StatusBar,Pressable} from 'react-native'
import Context from '../context/store'
import API from '../data/api'
import Axios  from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import {InputLogin} from '../components'
import styles from '../style/LoginPages/loginStyle'


const Login =(props)=>{

    const [nick,setNick]=useState("")
    const {state,dispatch}=useContext(Context)
    
    const LoginMail =(text)=> setNick(text)
    
   async function goLoading(){
        if(nick.length  != 0){
            let res= await Axios.get(API.GET_USER_TIKTOK + nick,{
                headers : {
                    apikey : API.API_KEY
                }
            })
            console.log(res.data)
            dispatch({type :"SET_USER" , user : res.data})
            props.navigation.navigate('Loading')
           AsyncStorage.setItem("@USER", nick)
        }else {
            alert("Please  NickName ")
        }   
    }
    return(
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor ="#1B262C"/>
            <View style={styles.containerPage}>
                <Image style={styles.iconStyle} source={require('../assets/TikUp+.png')}/>
                <InputLogin placeholder = "Tiktok Nickname" onChangeText={LoginMail}/>
                <Pressable style={styles.loginButton} onPress={()=>goLoading()} >
                    <Text style={styles.loginText}>continue</Text>
                </Pressable>
                <Text style={styles.text}>You can login with your username</Text>
            </View>
        </SafeAreaView>
    )
}
export {Login}
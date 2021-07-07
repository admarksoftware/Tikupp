import React,{useEffect,useContext} from 'react'
import {SafeAreaView,View ,Image,StatusBar} from 'react-native'
import API from "../data/api"
import Context from '../context/store'
import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../style/LoginPages/loginStyle'

const SplashScreen =(props)=>{
    const {state,dispatch}=useContext(Context)

    useEffect(() => {
        
        setTimeout(() => {
            AsyncStorage.getItem("@COIN").then(res=>{
                console.log(res)
               if(res != null){
                   dispatch({type : "SET_COIN" , coinTotal :parseInt(res)})
               }else {
                   dispatch({type : "SET_COIN" , coinTotal : 0})
               }
            })
            AsyncStorage.getItem("@USER").then(res=>{
                if (res != null) {
                getData(res)
                props.navigation.navigate('Loading')
                }else {
                    props.navigation.navigate("Login")
                }
            })
        }, 3000);
       
    }, [])
    const getData =async(user)=>{
      
        let res= await Axios.get(API.GET_USER_TIKTOK + user,{
            headers : {
                apikey : API.API_KEY
            }
        })
        dispatch({type :"SET_USER" , user : res.data})
    }
    return(
        <SafeAreaView style={styles.containerPage}>
              
            <StatusBar backgroundColor ="#1B262C" barStyle="light-content"/>
            <Image style={{width : 200 ,height : 200}} source={require('../assets/loadingX.png')}/>
            <Image style={styles.iconStyle} source={require('../assets/TikUp+.png')}/>
        </SafeAreaView>
    )
}
export {SplashScreen}
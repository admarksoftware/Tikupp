import React,{useEffect} from 'react'
import {SafeAreaView,Image,Text,StatusBar} from 'react-native'
import styles from '../style/LoginPages/loginStyle'

const Loading =(props)=>{
    useEffect(() => {
     setTimeout(() => {
            props.navigation.navigate('Main')
        }, 2000);
    }, [])
    return(
        <SafeAreaView style={styles.containerPage}>
               <StatusBar backgroundColor ="#1B262C"/>
            <Image style={{width : 200, height : 200}}  source={require('../assets/loadingX.png')}/>
            <Text style={styles.text}>Logging in, please wait ...</Text>
        </SafeAreaView>
    )
}
export {Loading}
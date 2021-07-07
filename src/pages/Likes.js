import React,{useState,useEffect,useContext} from 'react'
import {SafeAreaView,View,Text,StatusBar} from 'react-native'
import {LoadingVideo,ErrorVideos,AddLinks} from '../components'

const Likes =(props)=>{
    const [showError,setShowError]=useState(false)
    const params=props.navigation.state.params
    useEffect(() => {
        
        setTimeout(() => {
            setShowError(true)
         }, 5000);
    }, [])

    const getAddView=()=>{
            props.navigation.navigate("addLink",{item  : params})
    }
    return(
        <SafeAreaView style={{flex : 1}}>
               <StatusBar backgroundColor ="#1B262C"/>
            <View style={{flex : 1 , backgroundColor : "#1B262C" ,alignItems : "center"}}>
               { showError ? <ErrorVideos onPress={getAddView}/>  : <LoadingVideo />}
               
            </View>
        </SafeAreaView>
    )
}
export {Likes}
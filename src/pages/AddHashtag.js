import React, { useContext, useState } from 'react'
import {SafeAreaView,View,Text, Pressable,PermissionsAndroid, Image,StatusBar} from 'react-native'
import ImagePicker from 'react-native-image-picker';
import Context from '../context/store'
import {Header} from '../components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../style/Hashtag/NewHashtagstyle'
import AsyncStorage from '@react-native-community/async-storage';

const AddHashtag =(props)=>{
  const data=["#tiktok" ,"#instagram" ,"#love" ,"#like" ,"#follow" ,"#tiktokmemes" ,"#viral" ,"#memes" ,"#tiktokindia" ,"#musically" ,"#trending" ,"#likeforlikes" ,"#instagood" ,"#music" ,"#funny" ,"#meme" ,"#explorepage" ,"#followforfollowback" ,"#tiktokers" ,"#video" ,"#india" ,"#bollywood" ,"#explore" ,"#likes" ,"#dance" ,"#cute" ,"#comedy" ,"#youtube" ,"#k" ,"#bhfyp" ,"#photography" ,"#tiktokgirls" ,"#funnymemes" ,"#tiktokindonesia" ,"#foryou" ,"#fashion" ,"#tiktokhot" ,"#model" ,"#m" ,"#l" ,"#tiktokdance" ,"#insta" ,"#followme" ,"#fun" ,"#tiktokboys" ,"#f" ,"#team" ,"#funnyvideos" ,"#tamil" ,"#likeforfollow" ,"#edits" ,"#r" ,"#style" ,"#lol" ,"#memesdaily" ,"#lfl" ,"#edit" ,"#rkiye" ,"#bhfyp" ,"#a" ,"#tiktok" ,"#tiktoks" ,"#tiktokapp" ,"#tiktokvideos" ,"#tiktokers" ,"#tiktokduet" ,"#tiktokmemes" ,"#tiktokfunny" ,"#tiktokdance" ,"#tiktokchina" ,"#tiktokjapan" ,"#tiktokvideo" ,"#tiktokkorea" ,"#tiktokviral" ,"#tiktokseleb" ,"#tiktokindia" ,"#tiktoklover" ,"#tiktokhot" ,"#tiktokfever" ,"#tiktokmoments" ,"#tiktokflops" ,"#tiktokindo" ,"#tiktokkid" ,"#tiktokpeople" ,"#tiktokhits" ,"#tiktokbox" ,"#tiktokrepost" ,"#tiktokfun" ,"#tiktokfamous" ,"#tiktokerszone"]
    const {state,dispatch}=useContext(Context)
    const [img,setImg]=useState(null)
   async function goPage(){
        if (state.coins >= 10){
            ImagePicker.showImagePicker((response) => {
                       console.log('Response = ', response);
                      
                       if (response.didCancel) {
                         console.log('User cancelled image picker')
                       } else if (response.error) {
                         console.log('ImagePicker Error: ', response.error)
                       } else if (response.customButton) {
                         console.log('User tapped custom button: ', response.customButton)
                       } else {
                         const source = response.uri 
                           setImg(source)
                       }})

        }else {
            props.navigation.navigate("stores" , {title : "Insufficient Balance"})
        }
    } 
   const showHashtag=()=>{
      dispatch({type : "COIN" , coin : 10})
      AsyncStorage.setItem("@COIN" , (state.coins).toString() )
      const random =Math.floor(Math.random() * 101)-10
      alert(data[random])
   }
    return(
        <SafeAreaView style={{flex : 1,backgroundColor :"#1B262C"}}>
             <StatusBar backgroundColor ="#1B262C"/>
            <View style={styles.container}>
                <Header show={true} title="Smart Tags" onPress={()=>props.navigation.goBack()}/>
            { img  != null ?
                <View>
                <Image style={styles.imageCont} source={{uri : img}}/>
                    <Pressable style={styles.buttons} onPress={showHashtag}>
                        <Text style={styles.buttonText}>Take Hashtag</Text>
                    </Pressable>
                </View>
            :  
            <View>

                    <View style={styles.imageCont}>
                            <Icon name="image" color="white" size={60}/>
                            <Text style={[styles.buttonText,{marginBottom : 15}]}>Upload Photo</Text>
                            <Text style={styles.info}>TikUp + analyzes your uploaded photo</Text>
                            <Text style={styles.info}>and creates the most appropriate tags to send.</Text>
                        </View>
                    

                        <Pressable style={styles.buttons} onPress={()=>goPage()}>
                            <Text style={styles.buttonText}>Upload Photo (10 coins)</Text>
                        </Pressable>
                </View>
               }
            </View>
        </SafeAreaView>
    )
}
export {AddHashtag}
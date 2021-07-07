import React,{useState,useEffect,useContext} from 'react'
import {SafeAreaView,View,Text, Pressable,StatusBar} from 'react-native'
import Context from '../context/store'
import  AsyncStorage from '@react-native-community/async-storage'
import { RewardedAd, RewardedAdEventType, TestIds } from '@react-native-firebase/admob';
import Icon from 'react-native-vector-icons/FontAwesome5'
import {OrangeButton} from '../components'
import styles from '../style/Home/FreeCoinStyle'

const Home =(props)=>{
    const {state,dispatch}=useContext(Context)
    const [loaded, setLoaded] = useState(false);
    const adUnitId ="ca-app-pub-8276039700430962/8789018955";

    const rewarded = RewardedAd.createForAdRequest(adUnitId, {
    requestNonPersonalizedAdsOnly: true,
  });
    
        useEffect(() => {
            const eventListener = rewarded.onAdEvent((type, error, reward) => {
              console.log("asd")
              if (type === RewardedAdEventType.LOADED) {
                setLoaded(true);
                
              }else {
                setLoaded(false)
              }
        
              if (type === RewardedAdEventType.EARNED_REWARD) {
                console.log('User earned reward of ', reward);
              }
            });
           
            // Start loading the rewarded ad straight away
            rewarded.load();
        
            // Unsubscribe from events on unmount
            return () => {
              eventListener();
            };
          }, []);
   
                                
    function show(){
        console.log("sdfsds")
        try {
          rewarded.show().then(res=>{
            console.log(res)
          }).catch(err=>{
            alert("Not Yet")
          })
          dispatch({typ : "COIN_ADD" , add : 1})
        } catch (error) {
            alert("Not Yet")
        }
      }
      
    useEffect(() => {
        AsyncStorage.getItem("@FIRST").then(res=>{
            console.log("async",res)
            if(res === null){
                props.navigation.navigate("stores" , {title : "Buy Coin"})
            }else if (res === "true"){
                console.log('else')
            }
        })
    }, [])
    
    
    
    return(
        <SafeAreaView style={{flex :1}}>
               <StatusBar backgroundColor ="#1B262C"/>
            <View style={styles.container}>
                <View style={styles.admobCont}>
                    <Icon name="play-circle" size={60} color="gray"/>
                </View>
                <OrangeButton style={{width : 242 ,height : 45 }} title="watch and win +1" onPress={()=>show()}/>
               
            </View>
        </SafeAreaView>
    )
}
export {Home}
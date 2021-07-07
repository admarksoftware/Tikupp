import React from 'react'
import {SafeAreaView,View,Text,Pressable, Image,StatusBar,Linking} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-community/async-storage';
import {ProfileHeader,ProfileButton,Header} from '../components'
import styles from '../style/Home/ProfileStyle'

const ProfileScreen =(props)=>{


    const Logout=()=>{
        AsyncStorage.clear((err)=>{
            console.log(err)
        })
        props.navigation.navigate("Login")
    }
    return(
        <SafeAreaView style={{flex : 1,backgroundColor :"#1B262C"}}>
               <StatusBar backgroundColor ="#1B262C" barStyle="light-content"/>
            <Header title="Profile" color="#1B262C" />
            <View style={styles.container}>
                <ProfileHeader/>
                <View>
                    <ProfileButton title="My Orders" show={false} onPress={()=>{props.navigation.navigate('orders')}}/>
                    <ProfileButton title="Privacy Policy" show={false} onPress={()=>Linking.openURL("https://sites.google.com/view/tikex-app/privacy-policy")}/>
                    <ProfileButton title="Support" show={false} onPress={()=>Linking.openURL('mailto:tikupplus@gmail.com')}/>
                    <ProfileButton title="Logout" show={false} onPress={Logout}/>
                  
                </View>
                <Pressable style={styles.buttonCont} onPress={()=>props.navigation.navigate('store')}>
                    <Image style={{width : 30 , height : 30}} source={require('../assets/star.png')}/>
                    <Text style={styles.buttonTitle}>Buy Coin</Text>
                    <Icon name="chevron-right" size={14} color="white"/>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
export {ProfileScreen}
import React,{useState,useEffect,useContext} from 'react'
import {SafeAreaView,View,Text,Image,FlatList,StatusBar} from 'react-native'
import  {buyfollowers} from '../data/request'
import Context from '../context/store'
import follower from '../data/coin.json'
import {FollowerButton} from '../components'
import styles from '../style/Home/FollowersStyle'
import Icon from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-community/async-storage';


const Followers =(props)=>{
    const {state,dispatch}=useContext(Context)
    const [followers,setFollowers]=useState()
    useEffect(() => {
        setFollowers(state.user.stats.followerCount)
    }, [])

    function buyMin (x,c){
        console.log(state.coins , c)

       if(state.coins > c){
            buyfollowers(x , state.user.user.uniqueId)  
            dispatch({type : "COIN" , coin  : c})
            AsyncStorage.setItem("@COIN" , (state.coins).toString())
       }else {
        props.navigation.navigate("stores" , {title : "Insufficient Balance"})
    }
       
    }
    const renderList=({item})=>{
        
        return(
            <FollowerButton true={true} data={item} onPress={()=>buyMin(item.followers , item.coin)}/>
        )
    }
    return(
        <SafeAreaView style={{flex : 1}}>
               <StatusBar backgroundColor ="#1B262C"/>
            <View style={styles.container}>
                <View style={styles.refreshCont}>
                    <Icon name="refresh-outline" color = "white" size={25}/>
                </View>
                <View style={styles.imageCont}>
                    <Image style={{width  : 110 , height : 110 , resizeMode  :'contain'}} source={{uri : state.user.user.avatarThumb}}/>
                </View>
                    <Text style={styles.followerText}>{followers} Follower</Text>
                   <FlatList 
                        keyExtractor={(_,index)=>index.toString()}
                        data={follower}
                        renderItem={renderList}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                     
                    />
            </View>
        </SafeAreaView>
    )
}
export {Followers}
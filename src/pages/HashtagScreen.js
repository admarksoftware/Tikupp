import React from 'react'
import {SafeAreaView,View,Text,FlatList,StatusBar} from 'react-native'
import {HashtagItem,Header} from '../components'
import Hashtag from '../data/menuHashtag.json'
import styles from '../style/Hashtag/HashtagMain'


const HashtagScreen =(props)=>{
 

    function goDetail(item){
        console.log(item)
        props.navigation.navigate('HashtagDetail' ,  {item : item} )
    }

    const render =({item ,index})=>{
        return (
            <HashtagItem title={item.title} info={item.info} index={index} onPress={()=>goDetail(item)}/>
        )
    }
    return(
        <SafeAreaView style={{flex : 1,backgroundColor : '#1B262C'}} >
               <StatusBar backgroundColor ="#1B262C"/>
            <Header show={false} title="Hashtags" onPress={()=>props.navigation.navigate("AddNewHashtag")} color="white"/>
            <View style={styles.container}>
               <FlatList 
                    data={Hashtag}
                    keyExtractor={(_,index)=>index.toString()}
                    renderItem={render}
               />
            </View>
        </SafeAreaView>
    )
}
export {HashtagScreen}
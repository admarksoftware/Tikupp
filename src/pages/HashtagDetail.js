import React,{useEffect,useState} from 'react'
import {SafeAreaView,View,Text,StatusBar, FlatList,Dimensions, Image} from 'react-native'
import {HashtagDetailItem,Header} from '../components'
import styles from '../style/Hashtag/HashtagDetailStyle'
import Icon from 'react-native-vector-icons/FontAwesome5';



const HashtagDetail =(props)=>{
    useEffect(() => {
        const item = props.navigation.state.params.item
     
    }, [])
   
    
    return(
        <SafeAreaView style={{flex : 1,backgroundColor : "#1B262C"}}>
            <StatusBar backgroundColor ="#1B262C"/>
            <Header show ={true} title={props.navigation.state.params.item.title} onPress={()=>props.navigation.goBack()}/>
            <View style={styles.container}>
        
                    <View style={styles.tags}>
                        <View style={{flexDirection : 'row' , alignItems : 'center',marginLeft : 10}}>
                            <Icon name="hashtag" color="orange" size={30} />
                            <Text style={styles.info}>{props.navigation.state.params.item.info.length}</Text>
                        </View>
                    
                        <Text style={styles.info}>
                    {props.navigation.state.params.item.info.map((info) => {
                    return info;
                    })}
                </Text>
                    </View>
      
             
            </View>
        </SafeAreaView>
    )
}
export {HashtagDetail}
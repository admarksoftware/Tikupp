import React,{useContext} from 'react'
import Context from '../context/store'
import {SafeAreaView,View,FlatList,Pressable,StyleSheet,Dimensions,Text,Image} from 'react-native'
import {FollowerButton} from '../components'

const width = Dimensions.get('window').width


const LikesChoose =(props)=>{
    const {state,dispatch}=useContext(Context)
    const data=[   {"followers" : "100" , "coin" : 200 },
    {"followers" : "200" , "coin" : 400 },
    {"followers" : "300" , "coin" : 600 } ,
    {"followers" : "400" , "coin" : 800 },
    {"followers" : "500" , "coin" : 1000 },
    {"followers" : "1000" , "coin" : 2000 },
    {"followers" : "5000" , "coin" : 10000 }]
    const getAddView=(item)=>{
        if(state.coins >= item.coin){
            props.navigation.navigate("likeHome" , {param : item})

        }else {
            props.navigation.navigate("stores" , {title : "Insufficient Balance"})

        }
}
    const renderList =({item})=>{
        return(
            <FollowerButton  true={false} data={item} onPress={()=>getAddView(item)}/>
        
        )
    }
    return(
        <SafeAreaView style={{flex : 1,alignItems : 'center',backgroundColor : "#1B262C" , paddingTop : 15}}>
                <FlatList 
                
                    data={data}
                    keyExtractor={(_,index)=>index.toString()}
                    renderItem={renderList}
                />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container : {
        width : width * 0.9,
        height : 47,
        flexDirection : 'row',
        backgroundColor : '#2D3B44',
        justifyContent : 'space-between',
        alignItems :'center',
        paddingHorizontal : 23,
        borderRadius :  10,
        marginBottom : 15
        
    },
    title : {
        color : '#FFFFFF',
        fontSize : 15,
        fontWeight : '600',
        marginLeft : 10
    },
   coinCont : {
       flexDirection : 'row',
       alignItems : 'center'
   },
   coinText : {
       color :  '#FFFFFF',
       fontSize : 16,
       opacity : 0.4,
       marginRight : 10
   }
    
})
export {LikesChoose}
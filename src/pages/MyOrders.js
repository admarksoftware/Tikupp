import React,{useContext,useEffect,useState} from 'react'
import {SafeAreaView,View,Text,Pressable,Image,StatusBar} from 'react-native'
import Axios from 'axios'
import {ProfileHeader,Header} from '../components'
import API from '../data/api'
import Context from '../context/store'
import Icon from 'react-native-vector-icons/FontAwesome5'
import styles from '../style/Profile/orderstyle'


const MyOrders =(props)=>{
    const {state,dispatch}=useContext(Context)
    const [statu , setOrder]=useState({})
    useEffect(() => {
        if(state.orderID.length >= 0){
            getOrderStatu()
        }
     }, [])
    const getOrderStatu =async()=>{
        
            const res = await Axios.post(API.TIKTOK_API , {
                key : API.TIKTOK_APIKEY,
                "action" : API.ORDER_STATUS,
                "service" : API.BUY_LIKES_ID,
                "order" : state.orderID[0],
            })
            setOrder(res.data)
            console.log(res.data)
        
       
    }
    return(
        <SafeAreaView style={{flex : 1,backgroundColor:"#1B262C"}}>
               <StatusBar backgroundColor ="#1B262C"/>
            <Header show={true} title="My Orders" onPress ={()=>props.navigation.goBack()}/>
            <View style={styles.container}>
                <View style={{marginTop : 15}}>
                    {console.log(state.orderID.length)}
                    <ProfileHeader userNick="Selin" follower="10 Takipçi"/>
                   {state.orderID.length  <= 0 ? <View style={styles.ordersDanger}>
                        <Icon name="times" size={50} color="white" />
                        <View style={{marginBottom :15,alignItems :'center'}}>
                            <Text style={styles.dangerTxt}>Your active order is</Text>
                            <Text style={styles.dangerTxt}> not available</Text>
                        </View>
                      
                        <Text style={styles.followText}>You can follow the status of </Text>
                        <Text style={styles.followText}>your order here.</Text>
                    </View>
                    :
                        <View style={styles.statu}>
                            <Text style={styles.statuText}>{statu.status}</Text>
                            <Icon name="check" size={20} color="#76ff03"/>
                        </View>

                    }
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
export {MyOrders}
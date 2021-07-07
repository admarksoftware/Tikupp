import React,{useContext,useState,useEffect} from 'react'
import {Dimensions, SafeAreaView,StyleSheet,View,Text,StatusBar, Image , ActivityIndicator} from 'react-native'
import {Likes,Followers,Home,LikesChoose} from './index'
import {AddLinks} from '../components'
import Context from '../context/store'
import {createStackNavigator} from '@react-navigation/stack';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createCompatNavigatorFactory} from '@react-navigation/compat'
import Icon from 'react-native-vector-icons/Ionicons';

const Top = createMaterialTopTabNavigator();
const LikeStack = createCompatNavigatorFactory(createStackNavigator)({
    choose : {screen : LikesChoose },
    likeHome : {screen : Likes},
    addLink  : {screen : AddLinks}
  },{initialRouteName : "choose" , headerMode : "none" })
  
function TopView() {
    const {state,dispatch}=useContext(Context)
    const [user,setUser]=useState(null);
    useEffect(() => {
        setTimeout(() => {
            setUser(state.user.user.uniqueId)

        }, 3000);
}, [])


   
    return (
        <SafeAreaView style={{flex : 1,backgroundColor : "#1B262C"}}>

        {
            user === null? <ActivityIndicator/> :
            <View style={{flex : 1}}>
    
               <StatusBar backgroundColor="#1B262C"/>
                <View style={styles.header}>
                    <Text style={styles.nickText}>{user}</Text>
                    <View style={styles.iconCont}>
                        <Text style={[styles.nickText,{marginRight : 10}]}>{state.coins}</Text>
                        <Image style={{width : 24,height : 24}} source={require('../assets/star.png')}/>
                    </View>
                    
                </View>
           
                    <Top.Navigator
                        initialRouteName="FreeCoin"
                        tabBarOptions={{
                            style: {backgroundColor: '#1B262C' },
                            labelStyle: {color: 'white', fontSize: 13},
                            showIcon: true,
                            activeTintColor: '#FF6C00',
                            pressColor: 'none',
                            indicatorStyle : {backgroundColor  : '#FF6C00' , opacity : 0.5},
                        }}
                        
                        >
                        <Top.Screen
                            component={LikeStack}
                            name="Likes"
                            options={{
                            tabBarLabel: 'Get Likes',
                            tabBarIcon: () => <Icon name="heart" size={20} color="white" />,
                            }}
                        />
                        <Top.Screen
                            component={Home}
                            name="FreeCoin"
                            options={{
                            tabBarLabel: 'Free Coin',
                            tabBarIcon: () => <Icon name="star" size={20} color="white" />,
                            
                            }}
                        />
                        <Top.Screen
                            component={Followers}
                            name="Followers"
                            options={{
                            tabBarLabel: 'GetFollowers',
                            tabBarIcon: () => <Icon name="person" color="white" size={20} />,
                            }}
                        />
                        </Top.Navigator>
             
              </View> 
        }
                     </SafeAreaView>

    
    );
  }
  const styles = StyleSheet.create({
      header : {
        width : Dimensions.get('window').width , 
        height : 30,
        backgroundColor : "#1B262C",
        alignItems :'center',
        justifyContent :'center'
      },
      nickText : {
          color :'white',
          fontSize : 18
      },
      iconCont : {
          position : 'absolute',
          right : 10,
          flexDirection : 'row'
      }
    
  })
  export default TopView
import React,{useState} from 'react'
import {Pressable,Text,StyleSheet,Dimensions,Image, View} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const ProfileButton =(props)=>{
    const [show,setShow]=useState(props.show)
    return(
        <Pressable onPress={props.onPress}>
            <View style={styles.container}>
                    <Text style={styles.title}>{props.title}</Text>
                {  show ?
                <View style={{flexDirection : 'row',marginRight : 20}}>
                    <Text style={{color : 'white' }}>+5 Coin</Text>
                    <Image style={{width :16 ,height : 16,marginLeft : 10}} source={require('../assets/star.png')}/>
                </View>
                :
                null
                }
            </View>
          
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#2D3B44',
        width : width * 0.95,
        height : 47,
        borderRadius: 30,
        paddingLeft : 27,
        marginBottom : 24,
        justifyContent : 'space-between',
        flexDirection :'row',
        alignItems : 'center'
        
    },
    title : {
        color : '#FFFFFF',
        fontSize : 15,
        
    }
})
export {ProfileButton}
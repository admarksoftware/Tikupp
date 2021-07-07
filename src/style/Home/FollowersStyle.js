import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#1B262C',
        alignItems : 'center',
        justifyContent : 'space-between',
        paddingTop: 10,
    },
    imageCont : {
        width : 110,
        height : 110,
        borderRadius : 10,
        borderWidth : 2,
        borderColor : '#FF6C00',
        alignSelf : 'center',
       overflow : 'hidden',
     
    },
    followerText : {
        color : '#D9D9DA',
        fontSize : 18
    },
    refreshCont : {
        alignSelf : 'flex-end' , 
        position : 'absolute' , 
        top : 10,
        right : 10,
      
    }
})
export default styles
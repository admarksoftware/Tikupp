import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#1B262C',
        flex : 1,
        alignItems  :'center'
    },
    buttons : {
        backgroundColor : '#FF6C00',
        width : Dimensions.get('window').width * 0.9,
        height : 45,
        alignItems : 'center',
        justifyContent :'center',
        borderRadius : 15
    },
    buttonText : {
        color : 'white',
        fontSize : 18,
        fontWeight : "700"
    },
    imageCont  : {
        width : Dimensions.get('window').width * 0.9,
        height : 450,
        backgroundColor :'#617887',
        marginTop : 10,
        marginBottom : 15,
        borderRadius :  15,
        alignItems : 'center',
        paddingTop : 50,
        opacity : 0.3
        
    },
     info : {
         color :"#D9D9DA",
         fontSize : 16,
       
     }
})
export default styles
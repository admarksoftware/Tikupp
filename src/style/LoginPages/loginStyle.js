import {StyleSheet} from 'react-native'


 const styles = StyleSheet.create({
    container : {
        backgroundColor : "#1B262C" , 
        flex : 1
    },
    containerPage : {
        backgroundColor : "#1B262C" , 
        flex : 1,
        alignItems : 'center',
        justifyContent :'center'
    },
    iconStyle : {
        width : 200 ,
        height : 82,
        marginBottom : 60
    },
    loginButton : {
        width : 182,
        height :33,
        borderColor : "#3282B8",
        borderWidth : 1,
        borderRadius : 15,
        alignItems : 'center',
        justifyContent :'center',
        marginTop : 30
    },
    loginText : {
        color : "#617887",
        fontSize : 14,
        fontWeight : '600'
    },
    text : {
        color : '#617887',
        fontSize : 14,
        fontWeight : '600',
        marginTop : 21
    }
})
export default styles
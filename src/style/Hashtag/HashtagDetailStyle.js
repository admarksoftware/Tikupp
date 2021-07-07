import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#1B262C',
        flex : 1,
        alignItems  :'center',
        paddingTop : 20
    },
    tags : {
        width : Dimensions.get('window').width * 0.9 , 
        backgroundColor :"#617887" ,
        borderRadius : 10,
    },
    info : {
        color : 'white',
        padding : 10,
        fontSize : 18
    }
})
export default styles
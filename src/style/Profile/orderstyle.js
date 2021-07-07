import {Dimensions, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems : 'center',
        flex : 1 ,
        backgroundColor : '#1B262C',
        justifyContent :"space-between"
    },
    ordersDanger : {
        width : Dimensions.get('window').width * 0.95,
        height : 223,
        backgroundColor : '#617887',
        alignItems : 'center',
        justifyContent :'center',
        borderRadius : 10,
        marginTop : 10
    },
    dangerTxt : {
        color  :"white",
        fontSize : 20,
        fontWeight :'700',
      
    },
    followText: {
        color  :"white",
        fontSize : 17,
        fontWeight :'500',
      
    },
    buttonCont : {
        width : Dimensions.get('window').width * 0.95,
        backgroundColor : '#FF6C00',
        height :61,
        justifyContent : 'space-between',
        flexDirection  : 'row',
        paddingHorizontal : 20,
        alignItems : 'center',
        borderRadius : 10,
        marginBottom : 25
    },
    buttonTitle: {
        color : 'white',
        fontSize : 20
    },
    statu : {
        width : Dimensions.get('window').width * 0.95,
        paddingVertical: 20,
        backgroundColor : "#617887",
        alignItems : 'center',
        justifyContent : 'space-between',
        flexDirection : 'row',
        paddingHorizontal : 20,
        borderRadius : 15,
        marginTop : 10
    },
    statuText : {
        color : 'white',
        fontSize : 15,
        fontWeight : '700'
    }
})
export default styles
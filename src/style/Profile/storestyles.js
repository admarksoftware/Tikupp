import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#1B262C',
        alignItems : 'center',

    },
    buyText : {
        color : 'white',
        fontSize : 20 ,
        fontWeight : '700',
        marginVertical : 17
    },
    infoText : {
        color : "#D9D9DA",
        fontWeight: "600",
        fontSize: 16,
        
    },
    listStyle : {
        alignItems : 'center',
        justifyContent :'center',
        marginTop : 20

    },
    headerCont :  {
        width : Dimensions.get('window').width,
        height : 50,
        backgroundColor : "#1B262C",
        borderBottomWidth : 1,
        borderBottomColor : "#2D3B44",
        flexDirection : 'row',
        alignItems : 'center',
       paddingHorizontal : 15,
       justifyContent :'center',
       marginBottom : 15
    },
    closeCont : {
        position : 'absolute',
        right : 20
    }
})
export default styles
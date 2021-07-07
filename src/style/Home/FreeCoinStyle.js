import {StyleSheet,Dimensions} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex : 1,
        backgroundColor : '#1B262C',
        alignItems : 'center',
        paddingTop : 15,
        justifyContent : 'space-evenly'
    },
    admobCont : {
        width : Dimensions.get("window").width * 0.9,
        height : Dimensions.get("window").width * 0.9,
        backgroundColor  : "rgba(97, 120, 135, 0.14)",
        alignItems : 'center',
        justifyContent :'center',
        borderRadius : 10
    }
})
export default styles
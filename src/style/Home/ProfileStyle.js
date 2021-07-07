import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const styles = StyleSheet.create({
    container : {
        backgroundColor : '#1B262C',
        alignItems  : 'center',
        flex : 1,
        justifyContent :'space-evenly'
        
    },
    buttonCont : {
        width : width * 0.95,
        backgroundColor : '#FF6C00',
        height :61,
        justifyContent : 'space-between',
        flexDirection  : 'row',
        paddingHorizontal : 20,
        alignItems : 'center',
        borderRadius : 10
    },
    buttonTitle: {
        color : 'white',
        fontSize : 20
    }
})
export default styles
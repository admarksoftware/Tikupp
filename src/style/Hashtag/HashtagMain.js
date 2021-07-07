import {StyleSheet,Dimensions} from 'react-native'

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#1B262C',
        alignItems : 'center',
        paddingTop : 18
    }
})
export default styles
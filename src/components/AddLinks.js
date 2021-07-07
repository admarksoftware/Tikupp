import React,{useContext, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Pressable,
  SafeAreaView,
  TextInput,
  StatusBar
} from 'react-native';
import Context from '../context/store'
import {buyLikes} from '../data/request'
import Icons from 'react-native-vector-icons/FontAwesome5';

const AddLinks = (props) => {
  const likes=props.navigation.state.params.item.param
  const [link,setLink]=useState(null)
  const {state,dispatch}=useContext(Context)
  function linkRequest(){
    if(state.coins >= likes.coin){
    if(link != null){
      buyLikes(link,likes.follwers)
      dispatch({type : "COIN" , coin : likes.coin})
      alert("Succesfull")
    }else {
      console.log("asdas")
    }
  }else {
    alert("Not Enough Coin")
  }
  }
  
  return (
    <View style={styles.areaView}>
         <StatusBar backgroundColor ="#1B262C"/>
         {console.log(props.navigation.state.params.item.param.followers)}
      <View style={styles.container}>
        <Icons name="link" size={50} color="white" style={{marginBottom: 10}} />
        <Text style={styles.text}>Add Link</Text>
        <Text style={styles.info}>You can copy the link from the</Text>
        <Text style={styles.info}>
          three dot icon at the bottom right of the videos.
        </Text>
        <View style={styles.line}></View>
        <View style={styles.containerInput}>
            <Icons name="link" size={20} color="white"/>
            <TextInput 
                placeholder ="paste to Link"
                multiline ={false}
                style={styles.inputStyle}
                placeholderTextColor="#D9D9DA"
                onChangeText={(text)=>setLink(text)}
            />
        </View>
        <Pressable style={styles.buttons} onPress={()=>linkRequest()}>
            <Text style={styles.addlinks}>ADD</Text>
        </Pressable>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: '#1B262C',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: Dimensions.get('window').width * 0.9,
    height: 472,
    backgroundColor: '#617887',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
   
    paddingTop: 10,
  },
  text: {
    color: 'white',
    fontWeight: '700',
    fontSize: 20,
    marginBottom: 15,
  },
  info: {
    color: '#D9D9DA',
    fontSize: 16,
    fontWeight: '600',
  },
  line: {
    borderColor: '#BBBEC0',
    borderTopWidth: 2,
    width: Dimensions.get('window').width * 0.9,
    marginVertical: 15,
    opacity: 0.2,
  },
  addlinks: {
    color: '#D9D9DA',
    fontSize: 15,
    fontWeight: '700',
    marginRight: 10,
  },
  addCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInput : {
    backgroundColor : '#CECECE',
    opacity : 0.5,
    width : 298,
    height : 55,
    borderRadius : 15,
    alignItems : 'center',
    justifyContent :'center',
    flexDirection : 'row'
},
inputStyle : {
    width : 250,
    color : '#BAE4FF',
    fontWeight : '600',
    fontSize : 18,
    alignItems : 'center',
    justifyContent : 'center',
    marginLeft : 10
},
buttons : {
    width : 199,
    height : 34,
    borderColor : "#2D3B44",
    borderWidth : 1,
    borderRadius : 10,
    alignItems : 'center',
    justifyContent : "center",
    marginTop : 10
}
});
export {AddLinks};

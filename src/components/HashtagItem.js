import React,{useState} from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;

const HashtagItem = (props) => {
  return (
    <Pressable onPress={props.onPress} style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Icon name="hashtag" color="orange" size={30} />
        </View>
            {/* Sadece Title görünecek */}
        <View style={{marginLeft: 10 , justifyContent : 'center'}}>
          <Text style={styles.title}>{props.title}</Text>
          
              <Text style={{color : 'white' , opacity : 0.6}}>{props.info.length}</Text>
            {/* <Text style={styles.info}>
            {props.info.map((info) => {
              return info;
            })}
          </Text> */}
        </View>
      </View>

      <View>
        <Icon name="chevron-right" size={25} color="white" />
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width * 0.9,
    flexDirection: 'row',
    backgroundColor: '#2D3B44',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 23,
    borderRadius: 13,
    marginBottom: 15,
    paddingVertical : 10
  },
  title: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  info: {
    color: '#BBBEC0',
    fontSize: 15,
    fontWeight: '600',
    width: width * 0.7,
  },
  textCont: {
    marginLeft: 10,
  },
});
export {HashtagItem};

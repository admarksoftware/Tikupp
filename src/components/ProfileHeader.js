import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Dimensions, Pressable} from 'react-native';
import API from '../data/api';
import Axios from 'axios';
import Context from '../context/store';
import Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProfileHeader = (props) => {
  const {state, dispatch} = useContext(Context);
  const [nickName, setNickName] = useState('');
  const [refresh, setRefresh] = useState(false);

  const [followers, setFollowers] = useState();
  useEffect(() => {
    console.log('ASDAS');
    setFollowers(state.user.stats.followerCount);
    setNickName(state.user.user.uniqueId);
  }, [refresh]);

  async function refreshData() {
    try {
      let res = await Axios.get(API.GET_USER_TIKTOK + nickName, {
        headers: {
          apikey: API.API_KEY,
        },
      });
      dispatch({type: 'SET_USER', user: res.data});
      setRefresh(!refresh);
    } catch (error) {
      console.log(error);
      alert("Something is wrong");
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userNick}>{nickName}</Text>
        <Text style={styles.follower}>{followers}</Text>
      </View>
      <Pressable onPress={() => refreshData()}>
        <Icon name="redo-alt" size={20} color="white" />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2D3B44',
    width: width * 0.95,
    height: 61,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  userNick: {
    color: '#D9D9DA',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  follower: {
    color: '#BBBEC0',
    fontSize: 13,
    fontWeight: '600',
  },
});
export {ProfileHeader};

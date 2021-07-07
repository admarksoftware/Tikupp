import React, {useState, useEffect} from 'react';
import {
  Pressable,
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const StoreItem = (props) => {
  const [populer, setPopuler] = useState(false);

  useEffect(() => {
    setPopuler(props.populer);
  }, []);
  return (
    <Pressable style={styles} onPress={props.onPress}>
      <View
        style={populer ? [styles.border, styles.container] : styles.container}>
        {populer ? (
          <View style={styles.populerView}>
            <Text style={{color: 'white', fontSize: 13}}>Most Popular</Text>
          </View>
        ) : null}
        <View style={styles.ıconCont}>
          <Image
            style={{width: 52, height: 52}}
            source={require('../assets/buystar.png')}
          />
          <View style={styles.coinCont}>
        <Text style={styles.saleText}>{props.data.coin}</Text>
            <Text style={{color: 'white', fontSize: 15}}>Coin</Text>
          </View>
        </View>
        <View>
          <View style={styles.ıconCont}>
            <View>
              <Text style={styles.newPrice}>${props.data.price}</Text>
              <Text style={styles.saleFirsPrice}>${props.data.first}</Text>
            </View>

            <View style={styles.saleCont}>
            <Text style={styles.saleText}>% {props.data.sale}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    width: Dimensions.get('window').width * 0.9,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2D3B44',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  ıconCont: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  saleCont: {
    backgroundColor: '#FF6C00',
    width: 50,
    height: 50,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  saleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  saleFirsPrice: {
    color: '#E66405',
    fontSize: 15,
    textDecorationLine: 'line-through',
  },
  newPrice: {
    color: '#BBBEC0',
    fontSize: 15,
  },
  coinCont: {
    marginLeft: 10,
  },
  border: {
    borderColor: '#FF6C00',
    borderWidth: 1,
  },
  populerView: {
    width: 110,
    height: 19,
    borderRadius: 15,
    backgroundColor: '#FF6C00',
    position: 'absolute',
    top: -8,
    left: Dimensions.get('window').width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export {StoreItem};

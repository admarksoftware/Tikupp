import React, { useEffect, useState, useContext } from 'react'
import { SafeAreaView, View, Text, Image, Pressable, FlatList, StatusBar } from 'react-native'
import { StoreItem, Header } from '../components'
import AsyncStorage from '@react-native-community/async-storage'
import coinList from '../data/buycoin.json'
import Icon from 'react-native-vector-icons/Ionicons'
import styles from '../style/Profile/storestyles'
import Context from '../context/store'
import RNIap, {
    Product,
    ProductPurchase,
    PurchaseError,
    acknowledgePurchaseAndroid,
    purchaseErrorListener,
    purchaseUpdatedListener,
} from 'react-native-iap';

const itemSkus = Platform.select({
    ios: [
        'coin50', 'coin150', 'coin250', 'coin350', 'coin750', 'coin2000', 'coin4000'
    ],
    android: [
        'coin50', 'coin150', 'coin250', 'coin350', 'coin750', 'coin2000', 'coin4000'
    ]
});
const Store = (props) => {

    const { state, dispatch } = useContext(Context)
    const [product, setProduct] = useState()
    const [history, setHistory] = useState()
    useEffect(() => {

        RNIap.initConnection().then(conn => {
            RNIap.getProducts(itemSkus).then(res => {
                setProduct(res)
            }).catch(err => {
                console.log(err) 
                alert("ERROR")
            })
        }).catch(err => {
            console.log(err) 
            alert("ERROR")
        })

        AsyncStorage.setItem("@FIRST", "true")
        if (props.route != undefined) {
            setHistory(props.route.params.title)
        }

    }, [])

    function buyProduct(id) {
        if (id === 1) {
            try {
                RNIap.requestPurchase('coin50').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 50 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
            }
        } else if (id === 2) {
            try {
                RNIap.requestPurchase('coin150').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 150 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
                console.log(error)
            }
        } else if (id === 3) {
            try {
                RNIap.requestPurchase('coin250').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 250 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
                console.log(error)
            }
        } else if (id === 4) {
            try {
                RNIap.requestPurchase('coin350').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 350 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
                console.log(error)
            }
        } else if (id === 5) {
            try {
                RNIap.requestPurchase('coin750').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 1 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
                console.log(error)
            }
        } else if (id === 6) {
            try {
                RNIap.requestPurchase('coin2000').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 1 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
                console.log(error)
            }
        } else if (id === 5) {
            try {
                RNIap.requestPurchase('coin4000').then(res => {
                    dispatch({ typ: "COIN_ADD", add: 1 })
                    AsyncStorage.setItem("@COIN" , (state.coins).toString())

                }).catch(err => {
                    alert("error")
                })
            } catch (error) {
                console.log(error)
            }
        }

    }

    const renderList = ({ item }) => {
        return (
            <View style={{ paddingTop: 10 }}>
                <StoreItem data={item} onPress={() => buyProduct(item.id)} populer={item.populer} />

            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#1B262C" }}>
            <StatusBar backgroundColor="#1B262C" barStyle="light-content" />
            <View style={styles.container}>
                <View style={styles.headerCont}>
                    <Image style={{ width: 70, height: 28 }} source={require('../assets/TikUp+.png')} />
                    <View style={styles.closeCont}>
                        <Pressable onPress={() => props.navigation.goBack()}>
                            <Icon name="close" size={25} color="white" />
                        </Pressable>
                    </View>
                </View>
                <Image style={{ width: 84, height: 84 }} source={require('../assets/buystar.png')} />
                <Text style={styles.buyText}>{history != undefined ? history : "BUY COIN"}</Text>
                <Text style={styles.infoText}>You can increase your likes and followers</Text>
                <Text style={styles.infoText}>by purchasing coins.</Text>


                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={coinList}
                    renderItem={renderList}

                />



            </View>
        </SafeAreaView>
    )
}
export { Store }
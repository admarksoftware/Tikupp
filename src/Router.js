import React from 'react';
import {
  Loading,
  Login,
  SplashScreen,
  Home,
  HashtagScreen,
  ProfileScreen,
  HashtagDetail,
  MyOrders,
  Store,
  AddHashtag,
  LikesChoose
} from './pages';
import TopView from './pages/TopVİew'
import Provider from './context/Provider'
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useIsFocused} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createCompatNavigatorFactory} from '@react-navigation/compat'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Hashtag = createCompatNavigatorFactory(createStackNavigator)({
  HomeScreen : {screen : HashtagScreen},
  HashtagDetail : {screen : HashtagDetail},
  AddNewHashtag : {screen : AddHashtag}
},{initialRouteName : "HomeScreen" , headerMode : 'none'})

const ProfileStack = createCompatNavigatorFactory(createStackNavigator)({
  profile : {screen : ProfileScreen  } ,
  orders : {screen : MyOrders},
  store : {screen : Store}
},{initialRouteName : "profile" , headerMode : "none"})



const topStack=createCompatNavigatorFactory(createStackNavigator)({
  topView : {screen : TopView} 
},{headerMode : "none"})


function Main() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        tabStyle: { paddingVertical: 5},
        activeTintColor: 'white',
        activeBackgroundColor : "#FF6C00",
        inactiveBackgroundColor : "#1B262C",
        keyboardHidesTabBar : true
      }}
      
      >
      <Tab.Screen
        component={Hashtag}
        name="HashtagScreen"
        options={{
          tabBarLabel: 'Hashtag',
          tabBarIcon: () => <Icons name="hashtag" size={22} color="white" />,
        }}
      />
      <Tab.Screen
        component={topStack}
        name="Home"
        options={{
          tabBarLabel: 'Earn Coin',
          tabBarIcon: () => <Icon name="paper-plane" size={22} color="white" />,
        title : 'Hashtags'}}
        
      />
      <Tab.Screen
        component={ProfileStack}
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => (
            <Icon name="person-circle" size={22} color="white" />
          ),
        }}
        
      />
    </Tab.Navigator>
  );
}
function Rotuer() {
  return (
    <Provider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
         headerStyle : {
             backgroundColor : '#1B262C',
             height :50
             
         },
         headerTintColor : 'white',
         headerTitleAlign : 'center',
         headerLeft : null
        }}
        
        >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown : false}}
        />
         <Stack.Screen
          name="HashtagDetail"
          component={HashtagDetail}
          options={{headerShown : false}}
        />
        <Stack.Screen 
          name="stores"
          component={Store}
          options={{headerShown : false}}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


export default Rotuer;

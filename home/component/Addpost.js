import React, { Component } from 'react';
import Main from './Main'
// import Photo from './Photo'
// import Stat from './component/Stat'
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome';


import { StyleSheet, Text, View, Button } from 'react-native';
export default class App extends Component {
   render() {
       return (
           <View style={styles.con}>
           <View style={styles.container}>
               <View style={styles.header} >
                   {/* <Text style={styles.headerContant}>
           upload image
         </Text> */}
                   {/* <Photo /> */}
               </View>
               <View>
                   {/* <Stat /> */}
               </View>
               <View>
                   <Main />
               </View>
       
           </View>
                   <View style={styles.footer}>
                   <Icon  name="home" size={30} onPress={()=>this.props.navigation.navigate("Home")}/> 
                   <Icon  name="search" size={30} onPress={()=>this.props.navigation.navigate("search")}/> 
                   <Icon2 name="md-add-circle" size={30} onPress={()=>this.props.navigation.navigate("add")}/> 
                   <Icon  name="user" size={30} onPress={()=>this.props.navigation.navigate("profile")}/> 
                   <Icon name="sign-out" size={30} onPress={()=>this.props.navigation.navigate("login")}/>
               </View>
               </View>
       );
   }
}
const styles = StyleSheet.create({
   container: {
       padding: 30,
   },
   header: {
       // padding: 40,
       height: 50,
       width: "100%",
       backgroundColor: "green",
       fontSize: 20,
   },
   headerContant: {
       fontSize: 30,
       paddingLeft: 30,
       alignContent: "center",
   },
   footer: {
    backgroundColor: "gold",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50
  },
  con: {
    flex: 1,
    justifyContent: "center"
  },
});
import React, { Component } from "react";
import { Text, View ,ScrollView,StyleSheet} from "react-native";
import axios from "axios";
 import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';


export default class Postitem extends Component {

booking=(booking,namebook)=>{
    axios
    .put(`http://10.60.236.124:9000/Yasmin/book/${booking}/${namebook}`)
    .then(res => {
    })
    .catch(err => {
      console.log(err);
    });


  }


  render() {
// console.log('oooooooooo ', this.props.namebook )

    return(
    
<ScrollView style={{width:"100%"}}>


{this.props.posts.map((item,key)=> 
    <View key={key}>

 <Card style={styles.card}   >

 <CardTitle 
     title={item.name}
     style={{ marginTop:-17}}

   />
   <CardImage  style={{borderBottomWidth:2,  borderColor:"grey",}}
     source={{uri: (item.img)}} 
      // title={item.category}
      color="black"
   />
   <CardTitle 
     title={item.category}
     style={{ marginTop:-17}}

   />

<CardTitle
     style={{ marginTop:-20}}

     subtitle={item.state}
   />
   <CardContent text={item.description}
    style={{borderBottomWidth:2,  borderColor:"#EDEAE0"}} />
   <CardAction 
     style={{alignSelf:"center"}}
     separator={true} 
     inColumn={false}>

     <CardButton
       onPress={this.booking.bind(this,item._id,this.props.namebook )}
       title="حجز الغرض"
       color="#FEB557"
     />
   
         </CardAction>

 </Card>

 </View>



 
    )
}

</ScrollView>
   ) 
}
}


const styles = StyleSheet.create({
  card: {
    borderColor: "grey",
    borderWidth: 2,
    margin: 15
  }
});
import React, { Component } from 'react';
import Todo from './Todo';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, TouchableOpacity, Picker } from 'react-native';
import Axios from 'axios';
export default class Main extends Component {
   state = {
       textArray: [],
       noteText: '',
       take: "",
       selected: '',
       posted: []
   }
   addNote = () => {
       if (this.state.noteText && this.state.take && this.state.selected) {
           let d = new Date();
           this.state.textArray.push({
               "date": d.getFullYear() +
                   "/" + (d.getMonth() + 1) +
                   "/" + d.getDate() +
                   // "hour" + d.getHours() +
                   // ":" + d.getMinutes() +
                   " -" + this.state.take +
                   "-:" + this.state.selected,
               "notes": this.state.noteText
           });
           let posted =
           {
               // date: this.state.textArray,
               description: this.state.noteText,
               state: this.state.take,
               category: this.state.selected,
           }
           Axios
               .post(`http://10.60.236.124:9000/Tamimi/addpost`, posted)
           this.setState({
               noteText: "",
               take: "",
               selected: "this.state.selected",
           })
       }
   }
   deleteNote(key) {
       this.state.textArray.splice(key, 1);
       this.setState({ textArray: this.state.textArray })
   }
   render() {
       let notes = this.state.textArray.map((val, key) => {
           return <Todo key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
       })
       return (
           <View>
               <View style={styles.inputText}>
                   <View >
                       <Text>المحافظة</Text>
                       <Picker
                           selectedValue={this.state.take}
                           style={{ height: 50, width: 100, padding: 50 }}
                           onValueChange={(itemValue, itemIndex) => {
                               // console.log(itemValue)
                               this.setState({ take: itemValue })
                           }
                           }>
                           <Picker.Item label=" ..." value=" ..." />
                           <Picker.Item label=" اربد" value=" اربد" />
                           <Picker.Item label="البلقاء" value="البلقاء" />
                           <Picker.Item label="جرش" value="جرش" />
                           <Picker.Item label="الزرقاء" value="الزرقاء" />
                           <Picker.Item label="الطفيلة" value="الطفيلة" />
                           <Picker.Item label="عجلون" value="عجلون" />
                           <Picker.Item label=" العقبة" value=" العقبة" />
                           <Picker.Item label=" عمان" value=" عمان" />
                           <Picker.Item label="الكرك" value="الكرك" />
                           <Picker.Item label="مادبا" value="مادبا" />
                           <Picker.Item label="معان" value="معان" />
                           <Picker.Item label="المفرق" value="المفرق" />
                       </Picker>

<Text>
                           الفئة
               </Text>
                       <Picker
                           selectedValue={this.state.selected}
                           style={{ height: 50, width: 100, padding: 50 }}
                           onValueChange={(itemValue, itemIndex) => {
                               this.setState({ selected: itemValue })
                           }
                           }>
                           <Picker.Item label=" ..." value=" ..." />
                           <Picker.Item label="الحيوانات" value="الحيوانات" />
                           <Picker.Item label="الاكترونات" value="الاكترونات" />
                           <Picker.Item label="الاشياء" value="الاشياء" />
                       </Picker>
                   </View>
                   <TextInput onChangeText={(noteText) => this.setState({ noteText })}
                       placeholder="lose thing"
                       value={this.state.noteText}
                   >
                   </TextInput>
                   <Button title="add"
                       onPress={this.addNote.bind(this)}
                   />
               </View>
               <View>
                   {notes}
               </View>
           </View>
       )
   }
}
const styles = StyleSheet.create({
   inputText: {
       borderColor: 'black',
       borderWidth: 1,
   }
})
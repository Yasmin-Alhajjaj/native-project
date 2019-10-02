import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Picker
} from "react-native";
import axios from "axios";
import Postitem from "./Postitem";
import DropdownMenu from "react-native-dropdown-menu";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/FontAwesome";

export default class App extends React.Component {
  state = {
    missingItem: [],
    city: "",
    cityChoose: false,
    type: ""
  };

  getData = cat => {
    var selectedCity = this.state.city ? this.state.city : "amman";
    let missingItem = { cat: cat, city: selectedCity };
    //    console.log('react',missingItem,`http://192.168.43.105:9000/Omaima/FILTER/${missingItem}`)
    axios
      .get(
        `http://192.168.1.24:9000/Omaima/FILTER/${missingItem.cat}/${missingItem.city}`
      )
      .then(res => {
        this.setState({ missingItem: res.data });
        //  console.log("data", this.state.missingItem);
        console.log("yasmin", res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    // var data = [
    //   [
    //     "اختر المحافظة",
    //     "عمان",
    //     "مادبا",
    //     "الزرقاء",
    //     "السلط",
    //     "جرش",
    //     "العقبه",
    //     "الكرك",
    //     "معان",
    //     "الطفيله",
    //     "عجلون",
    //     "اربد"
    //   ]
    // ];
    return (
      <View style={styles.container}>
                {/* <View style={styles.body}> */}

        {/* <DropdownMenu
          style={{ height: 50, color: "white", fontSize: 20 }}
          // style={{marginRight:200,}}
          bgColor={"#888"}
          tintColor={"black"}
          color={"#fff"}
          activityTintColor={"green"}
          fontSize={30}
          handler={(selection, row) => {
            this.setState({ city: data[selection][row] });
            {
              console.log(
                "selection",
                this.state.city,
                "/////",
                selection,
                data[0][0]
              );
            }
          }}
          data={data}
        ></DropdownMenu> */}

<Picker
                  selectedValue={this.state.take}
                  style={{ height:10, width: "100%", padding:20 }}
                  onValueChange={(itemValue, itemIndex) => {
                    // console.log(itemValue)
                    this.setState({ city: itemValue });
                  }}
                >
                  <Picker.Item label=" اختر المحافظة" value=" ..." />
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



        <View style={{ flexDirection: "row", width: "33.3%" }}>
          <React.Fragment>
            <TouchableOpacity
              style={styles.addButton}
              onPress={this.getData.bind(this, "الحيوانات")}
            >
              <Text style={styles.addButtonText}> الحيوانات</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addButton}
              onPress={this.getData.bind(this, "الالكترونيات")}
            >
              <Text> الالكترونيات</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.addButton}
              onPress={this.getData.bind(this, "أشياء شخصية")}
            >
              <Text style={styles.addButtonText}> أشياء شخصية</Text>
            </TouchableOpacity>
          </React.Fragment>
        </View>
          <Postitem
            posts={this.state.missingItem}
            style={styles.PostitemContainer}
          />
        <View style={styles.footer}>
          <Icon
            name="home"
            size={30}
            onPress={() => this.props.navigation.navigate("Home")}
          />
          <Icon
            name="search"
            size={30}
            onPress={() => this.props.navigation.navigate("search")}
          />
          <Icon2
            name="md-add-circle"
            size={30}
            onPress={() => this.props.navigation.navigate("add")}
          />
          <Icon
            name="user"
            size={30}
            onPress={() =>
              this.props.navigation.navigate("Profile", {
                namebook: this.state.namebook
              })
            }
          />
          <Icon
            name="sign-out"
            size={30}
            onPress={() => this.props.navigation.navigate("login")}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // padding:10;
  },
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  header: {
    // padding:100,
    // backgroundColor:'#E91e63',
    alignItems: "flex-end",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  addButton: {
    zIndex: 11,
    // right:30,
    bottom: 10,
    backgroundColor: "#3c1053",
    width: "100%",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  },
  addButtonText: {
    color: "#fff"
    // fontSize:24,
  },
  footer: {
    backgroundColor: "#888",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50
  },
  PostitemContainer: {
    backgroundColor: "green"
  }
});

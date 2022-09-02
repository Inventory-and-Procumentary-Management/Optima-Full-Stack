import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  Image,
  RefreshControl,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS } from "../constans";
const { height, width } = Dimensions.get("window");

const CustomCard = () => {
    const navigation = useNavigation();
  const seeCategory = (title) => {
    console.log(title);
    navigation.navigate("ItemTable", title)
  };
  return (
    // <View style={styles.cardContainer}>
    //   <Image
    //     style={{
    //       flex: 1,
    //     //   height: null,
    //     //   width: null,
    //       resizeMode: "cover",
    //       borderRadius: 5,
    //       borderWidth: 1,
    //       borderColor: "#dddddd",
    //     }}
    //     source={{
    //       uri: "https://res.cloudinary.com/midefulness/image/upload/v1657441706/cld-sample-3.jpg",
    //     }}
    //   />
    //   <Image
    //     style={{
    //       flex: 1,
    //     //   height: null,
    //     //   width: null,
    //       resizeMode: "cover",
    //       borderRadius: 5,
    //       borderWidth: 1,
    //       borderColor: "#dddddd",
    //       marginLeft: 10
    //     }}
    //     source={{
    //       uri: "https://res.cloudinary.com/midefulness/image/upload/v1657441706/cld-sample-3.jpg",
    //     }}
    //   />
    // </View>
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {Array(10)
        .fill()
        .map((_, i) => {
          return (
            <View style={{ width: "50%" }} key={i}>
              <TouchableOpacity
                onPress={() => {
                  seeCategory("Building");
                }}
              >
                <View >
                  <Image
                    style={{
                      flex: 1,
                      height: 200,
                    //   width: "100%",
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd",
                    }}
                    source={{
                      uri: "https://res.cloudinary.com/midefulness/image/upload/v1657441706/cld-sample-3.jpg",
                    }}
                  />
                  <Text
                    style={{
                      marginBottom: 10,
                      fontSize: 16,
                      marginTop: 5,
                      color: "#595085",
                    }}
                  >
                    Building
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    // justifyContent: "space-evenly",
    justifyContent: "space-between",
    // flexWrap: "wrap",
    // paddingHorizontal: 8,
    // marginBottom:20,
  },
});

export default CustomCard;

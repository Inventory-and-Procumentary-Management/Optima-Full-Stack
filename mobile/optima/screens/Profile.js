import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import Header from "../components/Header.component";
import Placeholder from "../components/Placeholder.component";
import { COLORS } from "../constans";
import TextDetail from "../components/TextDetail.component";
import HeaderWithBack from "../components/HeaderWithBack.component";
import { useSelector } from "react-redux";

const Profile = () => {
  const [isLoading, setLoading] = useState(true);
  const [DATA, setDATA] = useState([]);
  const [imageUrl, setImageUrl] = useState();
  const userID = useSelector((state) => state.login.userID);
  const userType = useSelector((state) => state.login.userType);
  const user = useSelector((state) => state.login.currentUser);

  useEffect(()=>{
    if(!user){
      setLoading(true);
    }else{
      createDataSet();
      setLoading(false);
    }
  },[]);

  // let userType;

  const createDataSet = () => {
    let DATA = [
      {
        id: "1",
        title: "Name",
        value: user.name,
      },
      {
        id: "2",
        title: "Email Address",
        value: user.email,
      },
      {
        id: "3",
        title: "Phone Number",
        value: user.mobileNumber,
      },
      {
        id: "4",
        title: "User Type",
        value: userType === "ROLE_WAREHOUSE_MANAGER" ? "Warehouse Manager" : "Site Manager",
      },
    ];
    setDATA(DATA);
  };

  return (
    <SafeAreaView style={[{ backgroundColor: COLORS.backgroundColor }]}>
      <View style={styles.mainContainer}>
        <Header title={"Profile"} />

        <HeaderWithBack
          text={"Profile"}
          iconLeft={"arrow-left"}
          iconRight={"pencil"}
          // textColor={COLORS.primary}
          iconsColor={COLORS.black}
          isEnabled= {"1"}
        />

        <View style={styles.image}>
          {imageUrl == "none" ? (
            <Image
              source={{
                uri: "https://gravatar.com/avatar/50d58429257679a47b1dbf6a6daffc76?s=400&d=robohash&r=x",
              }}
              resizeMode="contain"
              style={{
                width: 130,
                height: 130,
                borderColor: "red",
                borderRadius: 100,
                marginBottom: 30,
                marginTop: 30,
                backgroundColor: "white",
              }}
            />
          ) : (
            <Image
              source={{
                uri: imageUrl,
              }}
              resizeMode="contain"
              style={{
                width: 130,
                height: 130,
                borderColor: "red",
                borderRadius: 100,
                marginBottom: 30,
                marginTop: 30,
                backgroundColor: "white",
              }}
            />
          )}
        </View>

        <View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            <FlatList
              data={DATA}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <TextDetail text={item.title} />
                  <Placeholder text={item.value} />
                </View>
              )}
              keyExtractor={(item) => item.id}
            />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.2,
    elevation: 2,
  },
});

export default Profile;

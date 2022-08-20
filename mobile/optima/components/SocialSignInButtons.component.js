import React, { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import CustomButton from "./CustomButton.component";
import { useNavigation } from "@react-navigation/native";
// import * as WebBrowser from "expo-web-browser";
// import * as Google from "expo-auth-session/providers/google";
import { useSelector, useDispatch } from "react-redux";
import { UserLogin } from "../store/actions";


const URL = "http://192.168.8.187:5000/api/v1/auth/register";

const SocialSignInButtons = () => {
  const [id, setId] = useState();
  const [userType, setUserType] = useState();
  const [privateData, setPrivateData] = useState([]);
  const navigation = useNavigation();

  const [accessToken, setAccessToken] = useState(null);
  const [user, setUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const dispatch = useDispatch();

  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   expoClientId:
  //     "676452566020-jl1og9a2uu69v5uciu69hc2m1oq0quni.apps.googleusercontent.com",
  //   iosClientId:
  //     "676452566020-0sslhmkbndol4483u4lkb4ca3sj5pvv6.apps.googleusercontent.com",
  //   androidClientId:
  //     "676452566020-jl1og9a2uu69v5uciu69hc2m1oq0quni.apps.googleusercontent.com",
  //   webClientId:
  //     "676452566020-vksbbusb1fofklcnek58u2trk4kfuv80.apps.googleusercontent.com",
  // });

  // useEffect(() => {
  //   if (response?.type === "success") {
  //     const { authentication } = response;
  //     setAccessToken(response.authentication.accessToken);
  //     getUserData();
  //   }
  // }, [response]);

  const onSignInFacebook = () => {
    console.warn("onSignInFacebook");
  };
  const onSignInGoogle = () => {
    console.warn("onSignInGoogle");
  };


  return (
    <>
      {/* <Pressable
        onPress={() => {
          promptAsync();
        }}
        disabled={!request}
        style={[
          { backgroundColor: "#FAE9EA", color: "#DD4D44" },
          styles.container,
        ]}
      >
        <Text style={[styles.text, styles.text_PRIMARY, { color: "#DD4D44" }]}>
          Sign In with Google
        </Text>
      </Pressable> */}

      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />

      {/* {googleSubmitting && <ActivityIndicator />} */}

      <CustomButton
        text="Sign In with Facebook"
        onPress={onSignInFacebook}
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",

    padding: 15,
    marginVertical: 5,

    alignItems: "center",
    borderRadius: 5,

    backgroundColor: "#FAE9EA",
    color: "#DD4D44",
  },

  text: {
    fontWeight: "bold",
    color: "#DD4D44",
  },
});

export default SocialSignInButtons;

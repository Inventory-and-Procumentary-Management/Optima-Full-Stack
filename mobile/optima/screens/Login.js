import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import CustomInput from "../components/CustomInput.component";
import CustomButton from "../components/CustomButton.component";
import SocialSignInButtons from "../components/SocialSignInButtons.component";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { UserLogin } from "../store/actions";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["new NativeEventEmitter"]); // Ignore log notification by message
LogBox.ignoreAllLogs();

const URL = "http://192.168.8.187:8080/api/login";
const URL1 = "http://192.168.8.187:8080/api/users";

const Login = () => {
  const [role, setRole] = useState("");
  const { height } = useWindowDimensions();
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSignInPressed = async (data) => {
    try {
      let response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      let result = await response.json();

    //   console.log(result);

      const privateData = {
        token: result.access_token.toString(),
      };

      dispatch(UserLogin(privateData));

      getUserData(result.access_token.toString(),data.username);

      reset();
    } catch (err) {
      console.log("Something Worng");
      alert("Username or Password is incorrect!");
    }
  };

  const getUserData = async (token,username) => {
    console.log("JSON token "+token);
    try {
      let response = await fetch(`http://192.168.8.187:8080/api/user/${username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      let result = await response.json();
      console.log(result);
      result.roles.map((item) => {
        // console.log(item);
        // navigation.navigate("Tabs");
        if (
          item.name.toString() == "ROLE_WAREHOUSE_MANAGER" ||
          item.name.toString() == "ROLE_SITE_MANAGER"
        ) {
          navigation.navigate("Tabs");
        } else {
          alert("User role incorrect!");
        }
      });
    } catch (error) {
      console.log("User error");
      //   console.log(error);
    }
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate("ForgetPassword");
  };

  const onSignUpPress = () => {
    navigation.navigate("Register");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.root}>
        <Image
          source={{
            uri: "https://res.cloudinary.com/midefulness/image/upload/v1660936251/OPTIMA/logo/optima_3_frznip.png",
          }}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />

        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{ required: "Username is required" }}
        />

        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Password should be minimum 3 characters long",
            },
          }}
        />

        <CustomButton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        {/* <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        {Platform.OS === "android" ? <SocialSignInButtons /> : null}

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPress}
          type="TERTIARY"
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     backgroundColor: "black",
  //   },
  root: {
    // display: 'flex',
    // flexDirection: 'column',
    alignItems: "center",
    // justifyContent: "center",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20,
    // flex:1,
    // textAlignVertical: 'center',
    // backgroundColor:'red',
  },
  logo: {
    // width: "70%",
    width: 200,
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default Login;

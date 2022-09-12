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
} from "react-native";
import CustomCard from "../components/CustomCard.component";
import Header from "../components/Header.component";
import { COLORS, FONTS } from "../constans";
const { height, width } = Dimensions.get("window");

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Categories = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={[{ backgroundColor: COLORS.backgroundColor }]}>
      <View style={styles.mainContainer}>
        <Header title={"Inventory"} />

        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 20,
              color: "black",
              // fontFamily: "Roboto-Regular",
              // color: "#595085",
            }}
          >
            Categories
          </Text>
        </View>

        <ScrollView
          scrollEventThrottle={16}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={{ marginTop: 20, paddingHorizontal: 20, marginBottom: 260 }}>
            <CustomCard />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
  },
});

export default Categories;

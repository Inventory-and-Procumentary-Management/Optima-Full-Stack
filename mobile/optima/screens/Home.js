import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import Header from "../components/Header.component";
import ImageView from "../components/ImageView.component";
import HorizontalScroll from "../components/HorizontalScroll.component";
import { icons, COLORS, SIZES } from "../constans";
import SearchComponent from "../components/Search.component";
import { useSelector } from "react-redux";
const { height, width } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/core";
import categories from "../constans/categories";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  // const [count, setCount] = useState(0);
  const authToken = useSelector((state) => state.login.authToken);
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [categoryData, setCategoryData] = useState(categories);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundColor }}>
      <Header title={"OPTIMA"} />

      <View style={{ marginTop: 20 }}>
        <SearchComponent />
      </View>

      <ScrollView
        scrollEventThrottle={16}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ flex: 1, paddingTop: 20 }}>
          {categoryLoading ? (
            <ActivityIndicator />
          ) : (
            <HorizontalScroll title={"CATEGORY"} data={categoryData} />
          )}
          <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
            <ImageView />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

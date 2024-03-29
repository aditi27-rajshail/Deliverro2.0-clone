import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SafeViewAndroid from "../styles";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import sanityClient from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredCategory, setFeaturedCategory] = useState([]);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "featured"]{
...,
  restaurants[]->{
    ...,
    dish[]->
  }
}`
      )
      .then((data) => {
        setFeaturedCategory(data);
      });
  }, []);
  return (
    <SafeAreaView style={SafeViewAndroid.AndroidSafeArea} className="p-1">
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-400 rounded-full"
        />

        <View className="flex-1">
          {/* Everything is flex-coloumned in React-Native */}
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <AntDesign name="down" size={20} color="#00CCBB" />
          </Text>
        </View>

        <FontAwesome5 name="user" size={30} color="#00CCBB" />
      </View>
      {/* Search */}
      <View className="flex-row items-center space-x-2 pb-2 mx-2 px-2">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <Ionicons name="md-search-sharp" size={24} color="black" />
          <TextInput
            placeholder="Restaraunts and Cuisines"
            keyboardType="default"
          />
        </View>
        <AntDesign name="bars" size={24} color="#00CCBB" />
      </View>
      <ScrollView>
        {/* Categories */}
        <Categories />
        {/*  Featured Rows */}
        {featuredCategory?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

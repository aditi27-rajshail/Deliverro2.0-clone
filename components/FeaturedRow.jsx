import { View, Text, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import RestaurantsCard from "./RestaurantsCard";

const FeaturedRow = ({ title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <AntDesign name="arrowright" color="#00CCBB" size={20} />
      </View>
      <Text className="px-4 text-xs text-gray-500">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/*  RestaurantsCard */}
        <RestaurantsCard
          id="123"
          imageUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating="4.5"
          genre="Japanese"
          address="123 Main"
          short_descripion="Testingdgcjd"
          dishes={[]}
          long={20}
          lat={0}
        />
        <RestaurantsCard
          id="123"
          imageUrl="https://links.papareact.com/gn7"
          title="Sushi"
          rating="4.5"
          genre="Japanese"
          address="123 Main"
          short_descripion="Testingdgcjd"
          dishes={[]}
          long={20}
          lat={0}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

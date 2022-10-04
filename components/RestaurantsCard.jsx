import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { urlFor } from "../sanity";

const RestaurantsCard = ({
  id,
  imageUrl,
  title,
  rating,
  genre,
  address,
  short_descripion,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow">
      <Image
        source={{
          uri: urlFor(imageUrl).url(),
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
          <FontAwesome name="star" size={20} color="green" />
          <Text className="text-gray-500 text-xs">
            <Text className="text-green-500">{rating}</Text> . {genre}
          </Text>
        </View>
        <View className="flex-row items-center space-x-1">
          <SimpleLineIcons name="location-pin" size={20} color="gray" />
          <Text className="text-gray-500 text-xs">Nearby . {genre}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantsCard;

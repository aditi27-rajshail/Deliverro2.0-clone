import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { urlFor } from "../sanity";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import DishRow from "../components/DishRow";
import Basketicon from "../components/Basketicon";

const RestaurantScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
      id,
      imageUrl,
      title,
      rating,
      genre,
      address,
      short_descripion,
      dish,
      long,
      lat,
    },
  } = useRoute();
  return (
    <>
      <Basketicon />
      <ScrollView>
        <View className="relative">
          <Image
            source={{
              uri: urlFor(imageUrl).url(),
            }}
            className="h-56 w-full bg-gray-300 p-4"
          />
          <TouchableOpacity
            onPress={navigation.goBack}
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
          >
            <AntDesign name="arrowleft" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-2xl font-bold">{title}</Text>
            <View className="flex-row space-x-2 my-1">
              <View className="flex-row items-center space-x-1">
                <FontAwesome name="star" size={20} color="green" />
                <Text className="text-gray-500 text-xs">
                  <Text className="text-green-500">{rating}</Text> . {genre}
                </Text>
              </View>
              <View className="flex-row items-center space-x-1">
                <SimpleLineIcons name="location-pin" size={20} color="gray" />
                <Text className="text-gray-500 text-xs">
                  Nearby . {address}
                </Text>
              </View>
            </View>
            <Text className="text-gray-500 mt-2 pb-4">{short_descripion}</Text>
          </View>
          <TouchableOpacity className="p-4 flex-row itmes-center space-x-2 border-y border-gray-300">
            <Octicons name="question" size={20} color="grey" />
            <Text className="pl-2 flex-1 text-md-font-bold">
              Have a Food Allergy?
            </Text>
            <Entypo name="chevron-right" size={20} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="pb-36">
          <Text className="px-4 font-bold text-xl pt-2">Menue</Text>
          {dish?.map((singledish) => (
            <DishRow
              key={singledish._id}
              id={singledish._id}
              name={singledish.name}
              descr={singledish.short_description}
              price={singledish.price}
              image={singledish.image}
            />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default RestaurantScreen;

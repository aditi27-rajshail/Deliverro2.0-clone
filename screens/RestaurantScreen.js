import { View, Text } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

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
      dishes,
      long,
      lat,
    },
  } = useRoute();
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default RestaurantScreen;

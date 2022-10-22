import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../featured/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "react-native-format-currency";
import SafeViewAndroid from "../styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectRestaurant } from "../featured/restaurantSlice";
import { Entypo } from "@expo/vector-icons";
import { urlFor } from "../sanity";

const BasketScreen = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});
    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  const ItemPriceFormat = (price) => {
    const [valueFormattedWithSymbol] = formatCurrency({
      amount: Number(price),
      code: "INR",
    });
    return valueFormattedWithSymbol;
  };

  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="flex-1 bg-white"
    >
      <View className="flex-1 bg-gray-100">
        <View className="border-b p-5 border-[#00CCBB] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className="rouded-full bg-ray-100 absolute top-3 right-5"
          >
            <Entypo name="circle-with-cross" size={30} color="#00CCBB" />
          </TouchableOpacity>
        </View>
        <View className="flex-row pb-3 items-center px-4 py-3 my-5 bg-white space-x-4">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-400 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-70mins</Text>
          <Text className="text-[#00CCBB]">Change</Text>
        </View>
        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, item]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 py-2 px-5 bg-white"
            >
              <Text className="text-[#00CCBB]">{item.length} X</Text>
              <Image
                source={{
                  uri: urlFor(item[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{item[0]?.name}</Text>
              {/* <Text className="text-gray-600">{item[0]?.price}</Text> */}
              <Text className="text-gray-600">
                {ItemPriceFormat(item[0]?.price)}
              </Text>
              <TouchableOpacity>
                <Text
                  className="text-[#00CCBB]"
                  onPress={() => dispatch(removeFromBasket({ id: key }))}
                >
                  Remove
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              {ItemPriceFormat(basketTotal)}
            </Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">{ItemPriceFormat(40)}</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              {ItemPriceFormat(basketTotal + 40)}
            </Text>
          </View>
          <TouchableOpacity className="bg-[#00CCBB] rounded-lg p-4">
            <Text className="text-white text-l font-bold text-center">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

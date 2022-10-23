import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { selectBasketItems, selectBasketTotal } from "../featured/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { formatCurrency } from "react-native-format-currency";

const Basketicon = () => {
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  const [valueFormattedWithSymbol] = formatCurrency({
    amount: Number(basketTotal),
    code: "INR",
  });

  if (items.length == 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        onPress={() => navigation.navigate("Basket")}
        className="bg-[#00CCBB] p-4 rounded-lg flex-row space-x-1 items-center mx-5"
      >
        <Text className="text-white text-lg font-extrabold py-1 px-2 bg-[#01A296]">
          {items.length}
        </Text>
        <Text className="text-white flex-1 font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-white text-lg font-extrabold">
          {valueFormattedWithSymbol}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basketicon;

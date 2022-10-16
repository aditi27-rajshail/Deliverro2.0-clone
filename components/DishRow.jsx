import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import { formatCurrency } from "react-native-format-currency";
import { AntDesign } from "@expo/vector-icons";
import { addToBasket, selectBasketItems } from "../featured/basketSlice";
import { useDispatch, useSelector } from "react-redux";

const DishRow = ({ id, name, descr, price, image }) => {
  const [valueFormattedWithSymbol] = formatCurrency({
    amount: Number(price),
    code: "INR",
  });
  const items = useSelector(selectBasketItems);
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);
  const addItemsTobasket = () => {
    dispatch(addToBasket({ id, name, descr, price, image }));
  };
  return (
    <>
      <TouchableOpacity
        onPress={() => setIsPressed(!isPressed)}
        className={`bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
      >
        <View className="flex-row">
          <View className="flex-1 pr-2">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{descr}</Text>
            <Text className="text-gray-400 mt-2">
              {valueFormattedWithSymbol}
            </Text>
          </View>

          <View>
            <Image
              style={{
                borderWidth: 1,
                borderColor: "#F3F3F4",
              }}
              source={{
                uri: urlFor(image).url(),
              }}
              className="h-20 w-20 bg-gray-300 p-4"
            />
          </View>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="bg-white px-4">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity>
              <AntDesign name="minuscircle" size={25} color="#00CCBB" />
            </TouchableOpacity>
            <Text>{items.length}</Text>
            <TouchableOpacity onPress={addItemsTobasket}>
              <AntDesign name="pluscircle" size={25} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

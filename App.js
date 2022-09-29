import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-red">
      <Text className="font-bold italic text-red-600">
        Native wind on Expo Template
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import SafeViewAndroid from "../styles";
import * as Animatable from "react-native-animatable";
// import * as Progress from "react-native-progress";
import { useNavigation } from "@react-navigation/native";

const PreparingOrderScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Basket");
    }, 5000);
  }, []);

  return (
    <SafeAreaView
      style={SafeViewAndroid.AndroidSafeArea}
      className="p-1 bg-[#00CCBB] justify-center items-center"
    >
      <Animatable.Image
        source={require("../assets/processing.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-lg my-10 text-white font-bold text-center"
      >
        Waiting for Restaurant to accept yur order
      </Animatable.Text>
      {/* <Progress.Circle size={30} indeterminate={true} /> */}
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;

import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";
const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 2" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 3" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Card 3" />
    </ScrollView>
  );
};

export default Categories;

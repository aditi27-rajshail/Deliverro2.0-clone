import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

const Categories = () => {
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "category"]
      `
      )
      .then((data) => {
        setcategories(data);
      });
  }, []);
  console.log("Categories", categories);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((categorie) => (
        <CategoryCard
          key={categorie._id}
          imgUrl={categorie.image}
          title={categorie.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

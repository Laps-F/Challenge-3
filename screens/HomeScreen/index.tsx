import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";

import stylesProductList from "./style";
import Card from "../../components/Cards/Card";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const HomeScreen: React.FC = () => {
  const [productData, setProductData] = useState<Product[]>([]);

  useEffect(() => {
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async () => {
    try {
      const response = await axios.get<Product[]>("https://fakestoreapi.com/products/");
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardPress = (product: Product) => {
    console.log("Card pressed:", product);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    <View key={item.id} style={stylesProductList.productContainer}>
      <Card
        title={item.title}
        image={item.image}
        price={item.price}
        onPress={() => handleCardPress(item)}
      />
    </View>
  );

  return (
    <View style={stylesProductList.container}>
      <View style={stylesProductList.userWelcome}>
        <Text style={stylesProductList.welcome}>Welcome</Text>
        <Text style={stylesProductList.userName}>Compass</Text>
      </View>
      <View style={stylesProductList.scrollViewContainer}>
        <FlatList
          data={productData}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View style={stylesProductList.tabBar}>
        <Text>icons home and cart</Text>
      </View>
    </View>
  );
};

export default HomeScreen;


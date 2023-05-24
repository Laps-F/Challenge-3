import React, { useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import axios from "axios";

import stylesProductList from "./style";


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

 return (
  <View style={stylesProductList.container}>
    <View style={stylesProductList.userWelcome}>
      <Text style={stylesProductList.welcome}>Welcome</Text>
      <Text style={stylesProductList.userName}>Compass</Text>
    </View>
    <View style={stylesProductList.scrollViewContainer}>
    <ScrollView >
          {productData.map((product) => (
            <View key={product.id} style={stylesProductList.productContainer}>
              <View style={stylesProductList.cardProduct}>
                <Text>{product.title}</Text>
                <Image source={{uri: product.image}} style={stylesProductList.productImage} />
                <Text>{product.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>     
        <View style={stylesProductList.tabBar}>
        <Text>icons home and cart</Text>
      </View>
      </View>
    );
  };


export default HomeScreen;

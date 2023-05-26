import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";


import stylesProductList from "./style";
import Card from "../../components/Cards/Card";
import ProductInterface from "../../types/ProductInterface";

const HomeScreen: React.FC = () => {
  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const navigation = useNavigation();


  useEffect(() => {
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async () => {
    try {
      const response = await axios.get<ProductInterface[]>("https://fakestoreapi.com/products/");
      setProductData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardPress = (product: ProductInterface) => {
  navigation.navigate("DetailProductScreen", { 
    product, 
    description: product.description,
    isFavoritePressed: product.isFavorite,
  });
};

  const renderProduct = ({ item }: { item: ProductInterface }) => (
    <View key={item.id} style={stylesProductList.productContainer}>
      <Card
        product={item}
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


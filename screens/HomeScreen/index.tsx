import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import axios from "axios";
import Ionicons from '@expo/vector-icons/Ionicons';

import { AuthenticatedStackParams } from "../../types/Navigation";
import stylesProductList from "./style";
import { NewColors } from "../../constants/styles";
import Card from "../../components/Cards/Card";
import ProductInterface from "../../types/ProductInterface";

type Props = AuthenticatedStackParams<"HomeScreen">;

function HomeScreen({navigation}: Props): JSX.Element {
  const [productData, setProductData] = useState<ProductInterface[]>([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  
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

  function cartHandler () {
    navigation.navigate("ShoppingCartScreen", []);
  }

  const handleCardPress = (product: ProductInterface) => {
  navigation.navigate("DetailProductScreen", product );
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
      <View style={stylesProductList.header}>
        <Text style={stylesProductList.welcome}>Welcome</Text>
        <Text style={stylesProductList.userName}>Compass</Text>
        <Pressable style={stylesProductList.shopButton} onPress={cartHandler}>
          <Ionicons name="cart-outline" size={40} color={NewColors.primary} />
          {cartItemsCount >= 0 && (
            <View style={stylesProductList.cartItemCountContainer}>
              <Text style={stylesProductList.cartItemCountText}>{cartItemsCount}</Text>
            </View>
          )}
        </Pressable>
      </View>
      <View style={stylesProductList.scrollViewContainer}>
        <FlatList
          data={productData}
          renderItem={renderProduct}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>      
    </View>
  );
};

export default HomeScreen;


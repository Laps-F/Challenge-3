import React, { useState, useContext }from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import { MyFavoritesContext } from "../../../store/context/FavoriteProducts";

import styles from "./style";
import ProductInterface from "../../../types/ProductInterface";

interface CardProps {
  product: ProductInterface;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ product, onPress }) => {
  const favoriteProductsCtx = useContext(MyFavoritesContext);
  
  const productIsFavorited = favoriteProductsCtx.ids.includes(product.id);

  const handleFavoritePress = () => {
    if(productIsFavorited)
      favoriteProductsCtx.removeFavorite(product.id);
    else
      favoriteProductsCtx.addFavorite(product.id);
  };
  
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View style={styles.cardProduct}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={{ uri: product.image }} style={styles.productImage} resizeMode="contain"/>
        <View style={styles.priceField}>
          <Text style={styles.price}>{product.price}</Text>
        </View>
        <View style={styles.favoriteIcon}>
      <TouchableOpacity onPress={handleFavoritePress}>
          <Icon
            name={productIsFavorited ? "heart" : "heart-outline"}
            size={24}
            // color={isFavoritePressed ? "black" : "black"}
            style={styles.favoriteIcon}
          />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
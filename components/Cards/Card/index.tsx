import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import styles from "./style";

interface CardProps {
  title: string;
  image: string;
  price: number;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, price, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardProduct}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={styles.productImage} resizeMode="contain"/>
        <Text style={styles.price}>{price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
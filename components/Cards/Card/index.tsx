import React, { useState }from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";


import styles from "./style";

interface CardProps {
  title: string;
  image: string;
  price: number;
  isFavorite: boolean;
  onPress?: () => void;
}

const Card: React.FC<CardProps> = ({ title, image, price, isFavorite, onPress }) => {
  const [isFavoritePressed, setIsFavoritePressed] = useState(false);
  
  const handleFavoritePress = () => {
    setIsFavoritePressed(!isFavoritePressed);
  };
  
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.cardProduct}>
        <Text style={styles.title}>{title}</Text>
        <Image source={{ uri: image }} style={styles.productImage} resizeMode="contain"/>
        <Text style={styles.price}>{price}</Text>
        <View style={styles.favoriteIconContainer}>
      <TouchableOpacity onPress={handleFavoritePress}>
          <Icon
            name={isFavoritePressed ? "heart" : "heart-outline"}
            size={24}
            color={isFavoritePressed ? "black" : "black"}
            style={styles.favoriteIcon}
          />
          </TouchableOpacity>
          </View>
        
      </View>
    </TouchableOpacity>
  );
};

export default Card;
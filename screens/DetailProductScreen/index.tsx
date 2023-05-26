import { useState } from "react";
import { Text, View, Image, ImageSourcePropType, Alert, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import MyButton from "../../components/MyButton";
import PlusButton from "../../components/PlusButton";
import Rating from "../../components/Rating";

import { NewColors } from "../../constants/styles";
import { styles } from "./style";
import { AuthenticatedStackParams } from "../../types/Navigation";

type Props = AuthenticatedStackParams<"DetailProductScreen">;

function DetailProductScreen({route, navigation}: Props): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [numItems, setNumItems] = useState<number>(0);
    const [favorite, setFavorite] = useState<boolean>(false);

    const {product}= route.params!;

    function addToCartHandler(){
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            Alert.alert("Good!", "Product added to cart.");
        }, 3000);

    }

    function test(){

    }

    function cartHandler(){
        navigation.navigate("ShoppingCartScreen");
    }

    function favoriteHandler() {
        if(favorite)
            setFavorite(false);
        else
            setFavorite(true);
    }

    function AddItems(){
        setNumItems((currentNumItems) => currentNumItems + 1);
    }

    function SubItems(){
        if(numItems > 0)
            setNumItems((currentNumItems) => currentNumItems - 1);
    }

    return (
        <View style={styles.root}>
            <Pressable style={styles.shopButton} onPress={cartHandler}>
                <Ionicons name="cart-outline" size={40} color={NewColors.primary} />
            </Pressable>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <View style={styles.head}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{product.title}</Text>
                        </View>
                        <Pressable style={styles.favorite} onPress={favoriteHandler}>
                            <Ionicons name={favorite ? "heart" : "heart-outline"} size={40} color={NewColors.background} />
                        </Pressable>
                    </View>
                    <View style={styles.imageContainer}>
                        <Image source={{uri: product.image}} style={styles.image}/>
                        <Rating />  
                        <View style={styles.priceAndCount}>
                            <MyButton 
                                title= {"R$ " + product.price + ",00"}
                                onPress={test}
                                style={styles.buttonPrice} 
                                color={NewColors.background}
                            />
                            <View style={[styles.priceAndCount, {marginLeft: 10, marginRight: -5}]}>
                                <PlusButton icon="-" onPress={SubItems}/>
                                <Text style={styles.count}>{numItems}</Text>
                                <PlusButton icon="+" onPress={AddItems}/>
                            </View>
                        </View>    
                    </View>
                </View>
                
                <View style={styles.description}>
                    <Text>{product.description}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <MyButton 
                        title="ADD TO CART" 
                        onPress={addToCartHandler} 
                        style={styles.buttonAdd} 
                        color={NewColors.buttonBuy_Add}
                        load={isLoading} 
                    />
                </View>
            </View>
        </View>
    );
}

export default DetailProductScreen;
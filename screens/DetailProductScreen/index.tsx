import { useState, useEffect } from "react";
import { Text, View, Image, Alert, Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import MyButton from "../../components/MyButton";
import PlusButton from "../../components/PlusButton";
import StarRating from "../../components/Rating";

import { NewColors } from "../../constants/styles";
import { styles } from "./style";
import { AuthenticatedStackParams } from "../../types/Navigation";
import ProductInterface from "../../types/ProductInterface";

type Props = AuthenticatedStackParams<"DetailProductScreen">;

function DetailProductScreen({route, navigation}: Props): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [numItems, setNumItems] = useState<number>(0);
    const [favorite, setFavorite] = useState<boolean>(false);
    const [listOfProducts, setListOfProducts] = useState<ProductInterface[]>([]);

    const product = route.params!;

    useEffect(() => {
        if(listOfProducts.length !== 0)
            navigation.navigate("ShoppingCartScreen", listOfProducts);
        
    }, [listOfProducts]);

    async function listOfProductsHandler(){
        const newListOfProducts: ProductInterface | any = Array(numItems).fill(product)
        setListOfProducts(newListOfProducts);
    }

    async function addToCartHandler(){
        await listOfProductsHandler();
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            
            Alert.alert("Good!", "Product added to cart.");
        }, 3000);

    }

    

    function cartHandler(){
        navigation.navigate("ShoppingCartScreen", []);
    }

    function favoriteHandler() {
        if(favorite)
            setFavorite(false);
        else
            setFavorite(true);
    }

    function AddItems(){
        console.log(product);
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
                        <StarRating rate={1.4}/>  
                        <View style={styles.priceAndCount}>
                            <View style={styles.buttonPrice} >
                                <Text style={styles.price}>R$ {product.price}</Text>
                            </View>
                            <View style={[styles.priceAndCount, {marginLeft: 10, marginRight: -5, marginBottom: 40}]}>
                                <PlusButton icon="-" onPress={SubItems}/>
                                <Text style={styles.count}>{numItems}</Text>
                                <PlusButton icon="+" onPress={AddItems}/>
                            </View>
                        </View>    
                    </View>
                </View>
                
                <View style={styles.description}>
                    <Text style={{fontSize: 11}}>{product.description}</Text>
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

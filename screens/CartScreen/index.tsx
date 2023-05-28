import { Text, View, Image, Alert, FlatList, TouchableNativeFeedback } from "react-native";
import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { CartState } from "../../redux/reducers";
import { AuthenticatedStackParams } from "../../types/Navigation";
import { styles } from "./style";
import { removeFromCart } from "../../redux/reducers";
import React, { useEffect, useState } from "react";



type Props = AuthenticatedStackParams<"ShoppingCartScreen">;

function ShoppingCartScreen({ navigation, route }: Props) {

    const cartItems = useSelector((state: { cart: CartState }) => state.cart.cartItems);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    function Test() {
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);

            Alert.alert("Good!", "Product successfully purchased.");
        }, 2000);
    }

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, [cartItems]);

    const calculateTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.price;
        });
        setTotalPrice(total);
    };

    const handleRemoveItem = (index: number) => {
        dispatch(removeFromCart(index));
    };

    // const renderSeparator = () => (
    //     <View style={styles.separator} />
    // );


    return (
        <View style={styles.root}>

            <View>
                <View style={styles.totalPriceContainer}>
                    <Text style={styles.totalText}>TOTAL</Text>
                    <Text style={styles.totalValue}>R$ {totalPrice.toFixed(2)}</Text>
                </View>
                <View style={styles.productsContainer}>
                    {cartItems.length === 0 ? (
                        <View style={styles.emptyMessageContainer}>
                            <Text style={styles.emptyText}>Ops, Empty Cart :(</Text>
                            <Text style={styles.addProductText}>Add a product</Text>
                        </View>
                    ) : (
                        <View style={styles.listContainer}>
                            <FlatList
                                data={cartItems}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <View style={styles.productsContainer}>
                                        <View style={styles.cardContainer}>
                                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                                            <View style={styles.cardInfoContainer}>
                                                <Text style={styles.cardTitle}>{item.title}</Text>
                                                <View style={styles.cardPriceContainer}>
                                                    <Text style={styles.cardPrice}>R$ {item.price}</Text>
                                                </View>
                                                <TouchableNativeFeedback onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
                                                    <View style={styles.removeButtonInner}>
                                                        <View style={styles.rectangle} />
                                                    </View>
                                                </TouchableNativeFeedback>
                                            </View>
                                        </View>
                                        <View style={styles.separator} />
                                    </View> 
                                )}
                            />
                        </View>
                    )}
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <MyButton
                    title="BUY"
                    onPress={Test}
                    style={styles.button}
                    color={NewColors.buttonBuy_Add}
                    load={isLoading}
                    disabled={cartItems.length === 0}
                />
            </View>
        </View>
    );
}

export default ShoppingCartScreen;
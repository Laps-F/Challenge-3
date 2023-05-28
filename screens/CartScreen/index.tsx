import { Text, View, Image, TouchableOpacity, ScrollView, FlatList } from "react-native";

import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers";
import { CartState } from "../../redux/reducers";

import { AuthenticatedStackParams } from "../../types/Navigation";


import { styles } from "./style";

type Props = AuthenticatedStackParams<"ShoppingCartScreen">;

function ShoppingCartScreen({ navigation, route }: Props) {

    const cartItems = useSelector((state: { cart: CartState }) => state.cart.cartItems);

    function Test() {
        console.log(cartItems);
    }


    return (
        <View style={styles.root}>

            <View>
                <View style={styles.totalPriceContainer}>
                    <Text style={styles.totalText}>TOTAL</Text>
                    <Text style={styles.totalValue}>R$ 00,00</Text>
                </View>
                <View style={styles.productsContainer}>
                    {cartItems.length === 0 ? (
                        <Text style={styles.totalText}>Ops, Empty Cart :( Add a product</Text>
                    ) : (
                        <View style={styles.listContainer}>
                            <FlatList
                                data={cartItems}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.productsContainer}>
                                        <View style={styles.cardContainer}>
                                            <Image source={{ uri: item.image }} style={styles.cardImage} />
                                            <View style={styles.cardInfoContainer}>
                                                <Text style={styles.cardTitle}>{item.title}</Text>
                                                <View style={styles.cardPriceContainer}>
                                                    <Text style={styles.cardPrice}>R$ {item.price}</Text>
                                                </View>
                                            </View>
                                        </View>
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
                />
            </View>
        </View>
    );
}

export default ShoppingCartScreen;
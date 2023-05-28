import { Text, View, Image, TouchableOpacity } from "react-native";

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
                <View>
                    <View>
                        {cartItems.length === 0 ? (
                            <Text style={styles.totalText}>Ops, Empty Cart :( Add a product</Text>
                        ) : (
                            cartItems.map((product, index) => (
                                <TouchableOpacity key={index} style={styles.cardContainer}>
                                    <Image source={{ uri: product.image }} style={styles.cardImage} />
                                    <Text style={styles.cardTitle}>{product.title}</Text>
                                    <Text style={styles.cardPrice}>R$ {product.price}</Text>
                                </TouchableOpacity>
                            ))
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
        </View>
    );
}

export default ShoppingCartScreen;
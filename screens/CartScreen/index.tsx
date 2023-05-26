import { Text, View } from "react-native";
import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/reducers";
import { CartState } from "../../redux/reducers";


import { styles } from "./style";

function ShoppingCartScreen() {

    const cartItems = useSelector((state: CartState) => state.cartItems);

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
                <View style={styles.buttonContainer}>
                    <MyButton title="BUY" onPress={Test} style={styles.button} color={NewColors.buttonBuy_Add} />
                </View>
            </View>
        </View>
    );
}

export default ShoppingCartScreen;
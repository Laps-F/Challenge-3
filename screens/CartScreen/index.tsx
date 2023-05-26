import { Text, View } from "react-native";

import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";
import { AuthenticatedStackParams } from "../../types/Navigation";

import { styles } from "./style";

type Props = AuthenticatedStackParams<"ShoppingCartScreen">;

function ShoppingCartScreen({navigation, route}: Props) {

    function Test() {

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
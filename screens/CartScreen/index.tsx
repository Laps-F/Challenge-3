import { Text, View } from "react-native";
import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";

import { styles } from "./style";

function ShoppingCartScreen() {

    function Test(){

    }

    return (
        <View style={styles.root}>
            <View>
                <View style={styles.buttonContainer}>
                    <MyButton title="BUY" onPress={Test} style={styles.button} color={NewColors.buttonBuy_Add}/>
                </View>
            </View>
        </View>
    );
}

export default ShoppingCartScreen;
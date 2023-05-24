import { Text, View } from "react-native";
import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";

import { styles } from "./style";

function DetailProductScreen() {

    function Test(){

    }

    return (
        <View style={styles.root}>
            <View style={styles.card}>

                <View style={styles.buttonContainer}>
                    <MyButton title="ADD TO CART" onPress={Test} style={styles.button} color={NewColors.buttonBuy_Add}/>
                </View>
            </View>
        </View>
    );
}

export default DetailProductScreen;
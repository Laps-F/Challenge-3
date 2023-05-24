import { Text, View } from "react-native";
import MyButton from "../../components/MyButton";

import { styles } from "./style";

function ShoppingCartScreen() {

    function Test(){

    }

    return (
        <View style={styles.root}>
            <View>
                <View>
                    <MyButton title="BUY" onPress={Test}/>
                </View>
            </View>
        </View>
    );
}

export default ShoppingCartScreen;
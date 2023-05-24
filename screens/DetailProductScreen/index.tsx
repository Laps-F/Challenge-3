import { useState } from "react";
import { Text, View, ActivityIndicator } from "react-native";
import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";

import { styles } from "./style";

function DetailProductScreen() {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function addToCartHandler(){
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }

    return (
        <View style={styles.root}>
            <View style={styles.card}>

                <View style={styles.buttonContainer}>
                    <MyButton 
                        title="ADD TO CART" 
                        onPress={addToCartHandler} 
                        style={styles.button} 
                        color={NewColors.buttonBuy_Add}
                        load={isLoading} 
                    />
                </View>
            </View>
        </View>
    );
}

export default DetailProductScreen;
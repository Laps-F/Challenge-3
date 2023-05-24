import { useState } from "react";
import { Text, View, Image } from "react-native";
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

    function test(){

    }

    return (
        <View style={styles.root}>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.title}>Title of the product</Text>
                    <View style={styles.imageContainer}>
                        <Image source={require('../../assets/icon.png')} style={styles.image}/>
                        <Text style={styles.rating}>Rating</Text>
                        <View style={styles.priceAndCount}>
                            <MyButton 
                                title="R$ 300,00" 
                                onPress={test}
                                style={styles.buttonPrice} 
                                color={NewColors.background}
                            />
                            <MyButton 
                                title="R$ 300,00" 
                                onPress={test}
                                style={styles.buttonPrice} 
                                color={NewColors.background}
                            />

                        </View>
                        
                    </View>
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
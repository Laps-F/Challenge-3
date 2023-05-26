import { Text, View } from "react-native";
import MyButton from "../../components/MyButton";
import { NewColors } from "../../constants/styles";
import { Route } from "@react-navigation/native";


import { styles } from "./style";
import ProductInterface from "../../types/ProductInterface";


type DetailProductScreenProps = {
    route: {
        params: {
            product: ProductInterface & { description: string};
        };
    };
};

function DetailProductScreen({ route }: DetailProductScreenProps) {
    const { product } = route.params;

    function Test(){

    }

    return (
        <View style={styles.root}>
          <View style={styles.card}>
            <Text>{product.title}</Text>
            <Text>{product.image}</Text>
            <Text>{product.price}</Text>  
            <Text>{product.description}</Text>   
            <View style={styles.buttonContainer}>
              <MyButton
                title="ADD TO CART"
                onPress={Test}
                style={styles.button}
                color={NewColors.buttonBuy_Add}
              />
            </View>
          </View>
        </View>
      );
    }
    
    export default DetailProductScreen;   









/*
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

export default DetailProductScreen; */

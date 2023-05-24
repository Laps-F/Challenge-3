import { useState } from "react";
import { Text, View, Image, ImageSourcePropType } from "react-native";

import MyButton from "../../components/MyButton";
import PlusButton from "../../components/PlusButton";
import Rating from "../../components/Rating";

import { NewColors } from "../../constants/styles";
import { styles } from "./style";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    image: ImageSourcePropType;
    rating: {
        rate: number;
        count: number;
    };
}

function DetailProductScreen(): JSX.Element {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const prod: Product = {
        id: 1,
        title: "Teste",
        price: 300,
        description: "Just a ramdom text jnd ad vsdv sdkvs odvaa oamkdv odssdmv odosmdv sdvosmv osdomsdv osdomsdv osdvs",
        image: require("../../assets/icon.png"),
        rating: {
            rate: 4,
            count: 2,
        }
    };

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
                    <Text style={styles.title}>{prod.title}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={prod.image} style={styles.image}/>
                        <Rating />  
                        <View style={styles.priceAndCount}>
                            <MyButton 
                                title= {"R$ " + prod.price.toString() + ",00"}
                                onPress={test}
                                style={styles.buttonPrice} 
                                color={NewColors.background}
                            />
                            <View style={[styles.priceAndCount, {marginLeft: 10, marginRight: -5}]}>
                                <PlusButton icon="-"/>
                                <Text style={styles.count}>{prod.rating.count}</Text>
                                <PlusButton icon="+"/>
                            </View>
                        </View>    
                    </View>
                </View>
                
                <View style={styles.description}>
                    <Text>{prod.description}</Text>
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
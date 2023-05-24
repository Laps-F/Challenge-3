import { Image, Text, View } from "react-native";
import { styles } from "./style";

function Rating() {

    const FullStar = require("../../assets/FullStar.png");
    const HalfStar = require("../../assets/HalfStar.png");
    return (
        <View style={styles.root}>
            <Image source={FullStar}/>
            <Image source={FullStar}/>
            <Image source={FullStar}/>
            <Image source={FullStar}/>
            <Image source={HalfStar}/>
        </View>
    )
}

export default Rating;
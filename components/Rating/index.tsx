import { Image, Text, View } from "react-native";
import { styles } from "./style";

import { Rating } from "react-native-ratings";
import { StarRatingProps } from "../../types/Props";

function StarRating({rate} : StarRatingProps) {

    return (
        <View style={styles.root}>
            <Rating
                type='star'
                startingValue={rate}
                imageSize={20}
                readonly
                fractions={10}
            />
        </View>
    )
}

export default StarRating;
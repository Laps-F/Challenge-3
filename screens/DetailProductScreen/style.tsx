import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: NewColors.background,
    },

    cardContainer: {
        flex: 1,
        margin: 35,
        width: "80%",
        height: "80%",
        backgroundColor: NewColors.cardProduct,
        borderRadius: 8,
        overflow: 'hidden',
        elevation: 4,
    },

    buttonContainer: {
        top: HEIGHT - 200,
        width: "100%",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonAdd: {
        flex: 1,
        width: "50%",
        borderRadius: 10,        
        backgroundColor: NewColors.buttonBuy_Add,
    },

    buttonPrice: {
        width: "45%",
        height: "65%",
        borderRadius: 10,     
        backgroundColor: NewColors.background,
        alignItems: "center",
        marginHorizontal: 0,
        marginLeft: 'auto'
    },

    card: {
        flex: 1,
        marginVertical: 20,
        marginHorizontal: 15,
    },

    title: {
        fontWeight: "bold",
    },

    head: {
        flexDirection: "row",
    },

    imageContainer: {
        flex: 1,
        alignItems: 'center',
    },

    image: {
        margin: 15,
        width: "100%",
        height: "40%",
    },

    priceAndCount: {
        flexDirection: 'row',
        alignSelf: "flex-start",
    }
});

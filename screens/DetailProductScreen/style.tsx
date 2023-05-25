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
        alignItems: 'center',
    },

    image: {
        margin: 15,
        width: "100%",
        height: "55%",
    },

    priceAndCount: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        marginVertical: 10,
    },

    count: {
        fontWeight: "bold",
        fontSize: 40,
        color: NewColors.primary,
    },

    description: {
        marginTop: -100,
        marginHorizontal: 20,
    },

    shopButton: {
        alignSelf: "flex-end",
        marginHorizontal: 40,
        marginBottom: -25,
        marginTop: 0,
    }
});

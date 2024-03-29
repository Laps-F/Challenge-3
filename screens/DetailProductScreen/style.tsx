import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;


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
        top: HEIGHT - 180,
        width: "100%",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonAdd: {
        width: "70%",
        borderRadius: 10,        
        backgroundColor: NewColors.buttonBuy_Add,
    },

    buttonPrice: {
        width: "45%",
        height: "45%",
        borderRadius: 15,     
        backgroundColor: NewColors.background,
        alignItems: "center",
        marginHorizontal: 0,
        marginTop: 10,
        marginLeft: 'auto',
        elevation: 10,
        shadowColor: "black",
    },

    price: {
        fontWeight: "bold",
        fontSize: 17,
        color: NewColors.primary,
        marginVertical: 10,
        alignItems: "center",
        alignSelf: "center",
        textAlign: "center",
    },

    card: {
        marginVertical: 10,
        marginHorizontal: 15,
    },

    titleContainer: {
        marginRight: 65,
    },

    title: {
        fontWeight: "bold",
    },

    head: {
        flexDirection: "row",
    },

    imageContainer: {
        alignItems: 'center',
        width: "100%",
        height: "70%",
    },

    image: {
        margin: 15, 
        flex: 1,
        width: "80%",
        height: 1,
        resizeMode: 'contain'
    },

    priceAndCount: {
        flexDirection: 'row',
        alignSelf: "flex-start",
        marginVertical: 10,
        marginBottom: -10,
    },

    count: {
        fontWeight: "bold",
        fontSize: 40,
        color: NewColors.primary,
    },

    description: {
        marginTop: -100,
        marginHorizontal: 20,
        maxHeight: "20%"
    },

    shopButton: {
        alignSelf: "flex-end",
        marginHorizontal: 40,
        marginBottom: -25,
        marginTop: 0,
    },

    favorite: {
        marginLeft: WIDTH - 140,
        position: "absolute",
    },

    containerNumProduct: {
        zIndex:10,
        borderRadius: 10,
        marginBottom: -20,
        alignSelf: "flex-end",
        width: 15,
        height: 15,
        backgroundColor: NewColors.buttonBuy_Add,
    },

    numProduct: {
        fontSize: 15,
        fontWeight: "bold",
        marginTop: -3,
        alignSelf: "center",
        color: "white",
    },
});

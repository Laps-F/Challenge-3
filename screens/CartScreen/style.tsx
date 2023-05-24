import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: NewColors.background,
    },
    totalPriceContainer: {
        height: 60,
        alignItems: "flex-start",
        left: "10%",
        top: "20%",
        //backgroundColor: NewColors.primary,
    },
    totalText: {
        color: "white",
        fontSize: 20,
    },
    totalValue: {
        color: NewColors.primary,
        fontSize: 32,
    },
    buttonContainer: {
        top: HEIGHT - 200,
        width: "100%",
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        width: "50%",
        borderRadius: 10,
        backgroundColor: NewColors.buttonBuy_Add,
    },
});
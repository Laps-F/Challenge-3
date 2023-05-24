import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: NewColors.background,
    },

    card: {
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

    button: {
        flex: 1,
        width: "50%",
        borderRadius: 10,        
        backgroundColor: NewColors.buttonBuy_Add,
    }
});

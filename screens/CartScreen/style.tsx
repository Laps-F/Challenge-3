import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: NewColors.background,
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
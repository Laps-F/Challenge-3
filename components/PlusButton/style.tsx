import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    root: {
    },

    button: {
        marginHorizontal: 5,
        backgroundColor: NewColors.background,
        borderRadius: 90,
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        elevation: 10,
        shadowColor: "black",
    },

    text: {
        position: "absolute",
        top: HEIGHT - 714,
        fontWeight: "bold",
        color: NewColors.primary,
        fontSize: 50,
    }
});
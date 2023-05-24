import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

export const styles = StyleSheet.create({
    root: {
        backgroundColor: NewColors.background,
        borderRadius: 10,
        width: "100%",
    },

    text: {
        fontWeight: "bold",
        color: NewColors.primary,
        fontSize: 40,
    }
});
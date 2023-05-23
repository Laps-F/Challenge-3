import { StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

export const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        backgroundColor: Colors.input,
        borderWidth: 1,
        borderRadius: 150 / 2,
        overflow: "hidden",
        marginHorizontal: 10,
        marginTop: 10,
    },

    image: {
        marginTop: 10,
        marginHorizontal: 10,
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },

    input: {
        flex: 1,
        backgroundColor: Colors.input,
        marginTop: 10,
    },
});
import { StyleSheet, Dimensions } from "react-native";

import { Colors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    titleContainer: {
        marginTop: 150,
        marginBottom: 100,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: Colors.primary,
    },

    footerContainer: {
        position: 'absolute',
        top: HEIGHT - 30, 
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.primary,
        flex: 1,
        flexDirection: 'row',
    },

    footerText: {
        marginVertical: 20,
        color: "white",
    },

    footerLink: {
        color: Colors.primary,
        fontWeight: 'bold',
    },

    errorContainer: {
        justifyContent: 'flex-start',
    },

    error: {
        marginHorizontal: 20,
        color: Colors.warning,
        fontSize: 10,
    }
});
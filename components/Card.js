import { Text, View, Pressable, Image, StyleSheet } from "react-native";

function Card() {
    return (
        <View style={styles.container}>
            <Pressable>
            </Pressable>
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    container: {
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        width: 155,
        height: 180,
    },

});

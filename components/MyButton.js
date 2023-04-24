import { Button } from "react-native";
import { View, StyleSheet } from "react-native";

function MyButton({title}) {

    return (
        <View style={styles.buttonContainer}>
            <Button 
                color="#D78F3C"
                title={title}
            />
        </View>
        
    );
}

export default MyButton;

const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
        backgroundColor: "#D78F3C",
        borderRadius: 150 / 2,
        overflow: "hidden",
    },

    button: {
        
    }
});
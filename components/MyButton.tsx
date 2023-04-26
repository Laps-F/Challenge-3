import { Button } from "react-native";
import { View, StyleSheet } from "react-native";

type ButtonProps = {
    title: string,
    onPress(): void,
}

function MyButton({title, onPress}: ButtonProps): JSX.Element {

    return (
        <View style={styles.buttonContainer}>
            <Button 
                color="#D78F3C"
                title={title}
                onPress={onPress}
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
});
import { View, StyleSheet, Button } from "react-native";

import { Colors } from "../constants/styles";
import { ButtonProps } from "../types/Props";

function MyButton({title, onPress}: ButtonProps): JSX.Element {

    return (
        <View style={styles.buttonContainer}>
            <Button 
                color= {Colors.primary}
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
        backgroundColor: Colors.primary,
        borderRadius: 150 / 2,
        overflow: "hidden",
    },
});
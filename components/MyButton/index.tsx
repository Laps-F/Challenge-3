import { View, Button, ActivityIndicator } from "react-native";

import { ButtonProps } from "../../types/Props";
import { styles } from "./style";

function MyButton({title, onPress, style, color, load, disabled}: ButtonProps): JSX.Element {

    return (
        <View style={[styles.buttonContainer, style]}>
            {
                load? <ActivityIndicator size="large" color="white"/> :
                <Button 
                    color={color}
                    title={title}
                    onPress={onPress}
                    disabled={disabled}
                />
            }
        </View>
        
    );
}

export default MyButton;


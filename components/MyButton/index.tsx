import { View, Button } from "react-native";

import { ButtonProps } from "../../types/Props";
import { styles } from "./style";

function MyButton({title, onPress, style, color}: ButtonProps): JSX.Element {

    return (
        <View style={[styles.buttonContainer, style]}>
            <Button 
                color={color}
                title={title}
                onPress={onPress}
            />
        </View>
        
    );
}

export default MyButton;


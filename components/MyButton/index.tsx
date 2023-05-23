import { View, Button } from "react-native";

import { Colors } from "../../constants/styles";
import { ButtonProps } from "../../types/Props";
import { styles } from "./style";

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


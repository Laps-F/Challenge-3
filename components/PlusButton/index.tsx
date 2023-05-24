import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

function PlusButton() {
    return (
        <TouchableOpacity>
            <View style={styles.root}>
                <Text style={styles.text}>+</Text>
            </View>
        </TouchableOpacity>
        
    );
}

export default PlusButton;
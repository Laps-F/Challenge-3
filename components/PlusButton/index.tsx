import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

function PlusButton({icon, onPress} : any): JSX.Element {
    return (
        <TouchableOpacity style={styles.root} onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.text}>{icon}</Text>
            </View>
        </TouchableOpacity>
        
    );
}

export default PlusButton;
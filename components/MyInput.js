import { TextInput } from "react-native";
import { View, Image, StyleSheet } from "react-native";

function MyInput({label, keyboardType, value, image}) {

    var icon;

    if(image === 'mail')
        icon = require('../assets/icon_mail.png');
    if(image === 'lock')
        icon = require('../assets/icon_lock.png');
    if(image === 'user')
        icon = require('../assets/icon_user.png');

    return (
        <View style={styles.inputContainer}>
            <Image 
                style={styles.image}
                source={icon}
            />

            <TextInput 
                style={styles.input}
                placeholder={label}
                placeholderTextColor="#A8A8A8"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType={keyboardType}
                value={value}
            />
        </View>
    );
}

export default MyInput;

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        paddingBottom: 10,
        backgroundColor: "#656262",
        borderRadius: 150 / 2,
        overflow: "hidden",
        margin: 10,
    },

    image: {
        marginTop: 10,
        aspectRatio: 3.0, 
        resizeMode: 'contain',
    },

    input: {
        flex: 1,
        backgroundColor: '#656262',
        marginTop: 10,
    },
});
import { View, Image, StyleSheet, TextInput } from "react-native";

import { Colors } from "../constants/styles";
import { InputProps } from "../types/Props";

function MyInput({label, keyboardType, value, image, secureTextEntry, onUpdateValue, error}: InputProps): JSX.Element {

    var icon;

    if(image === 'mail')
        icon = require('../assets/icon_mail.png');
    if(image === 'lock')
        icon = require('../assets/icon_lock.png');
    if(image === 'user')
        icon = require('../assets/icon_user.png');

    return (
        <View style={[styles.inputContainer, {borderColor: error? Colors.warning : Colors.input}]}>
            <Image 
                style={styles.image}
                source={icon}
            />

            <TextInput 
                style={styles.input}
                placeholder={label}
                placeholderTextColor= {Colors.inputPlaceholder}
                autoCorrect={false}
                autoCapitalize="none"
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onChangeText={onUpdateValue}
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
        backgroundColor: Colors.input,
        borderWidth: 1,
        borderRadius: 150 / 2,
        overflow: "hidden",
        marginHorizontal: 10,
        marginTop: 10,
    },

    image: {
        marginTop: 10,
        marginHorizontal: 10,
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },

    input: {
        flex: 1,
        backgroundColor: Colors.input,
        marginTop: 10,
    },
});
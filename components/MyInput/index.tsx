import { View, Image, TextInput } from "react-native";

import { Colors } from "../../constants/styles";
import { InputProps } from "../../types/Props";
import { styles } from "./style";

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


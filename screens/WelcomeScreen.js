import { useState } from "react";
import { Pressable, Text } from "react-native";
import { View, StyleSheet } from "react-native";

import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

function WelcomeScreen({navigation}) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function updateEmailHandler(email) {
        setEnteredEmail(email);
    }

    function updatePasswordHandler(password) {
        setEnteredPassword(password);
    }

    function loginHandler() {
        if(enteredEmail && enteredPassword)
            navigation.navigate("HomeScreen");
    }

    function signUpHandler() {
        navigation.navigate("SignUpScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>WELCOME</Text>
            </View>
            <MyInput 
                label="Your Email"
                keyboardType="email-address"
                image="mail"
                value={enteredEmail}
                onUpdateValue={updateEmailHandler}
            />
            <MyInput 
                label="Your Password"
                keyboardType="default"
                image="lock"
                value={enteredPassword}
                onUpdateValue={updatePasswordHandler}
            />
            <MyButton title="LOGIN" onPress={loginHandler}/>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Don't have an account?
                </Text>
                <Pressable onPress={signUpHandler}>
                    <Text style={styles.footerLink}> Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2D2D2D",
        
    },

    titleContainer: {
        marginTop: 150,
        marginBottom: 100,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: "#D78F3C",
    },

    footerContainer: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#D78F3C",
        flex: 1,
        flexDirection: 'row',
    },

    footerText: {
        color: "white",
    },

    footerLink: {
        color: "#D78F3C",
        fontWeight: 'bold',
    }
});
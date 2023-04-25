import { useState } from "react";
import { Pressable, Text, View, StyleSheet, Dimensions } from "react-native";

import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

function WelcomeScreen({navigation}) {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [mailError, setMailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    function updateEmailHandler(email) {
        setEnteredEmail(email);
        setMailError(false);
    }

    function updatePasswordHandler(password) {
        setEnteredPassword(password);
        setPasswordError(false);
    }

    function loginHandler() {
        if(enteredEmail.length === 0)
            setMailError(true);
        
        if(enteredPassword.length === 0)
            setPasswordError(true);

        if(enteredEmail.length !== 0 && enteredPassword.length !== 0){
            navigation.navigate("HomeScreen");
        }
    }

    function signUpHandler() {
        navigation.navigate("SignUpScreen");
    }

    let error1;
    if(mailError){
        error1 =  (
            <View style={styles.errorContainer}>
                <Text style={styles.error}>Please enter a valid email address</Text>
            </View>
        );
    }

    let error2;
    if(passwordError){
        error2 = <Text style={styles.error}>Please enter a valid password</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>WELCOME</Text>
            </View>
            <MyInput 
                error={mailError}
                label="Your Email"
                keyboardType="email-address"
                image="mail"
                value={enteredEmail}
                onUpdateValue={updateEmailHandler}
            />
            {error1}
            <MyInput 
                error={passwordError}
                label="Your Password"
                keyboardType="default"
                image="lock"
                value={enteredPassword}
                onUpdateValue={updatePasswordHandler}
            />
            {error2}
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
        position: 'absolute',
        top: HEIGHT - 30, 
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: "#D78F3C",
        flex: 1,
        flexDirection: 'row',
    },

    footerText: {
        marginVertical: 20,
        color: "white",
    },

    footerLink: {
        color: "#D78F3C",
        fontWeight: 'bold',
    },

    errorContainer: {
        justifyContent: 'flex-start',
    },

    error: {
        marginHorizontal: 20,
        color: 'red',
        fontSize: 10,
    }
});
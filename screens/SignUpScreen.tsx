import { useState } from "react";
import { View, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';

import { UnauthenticatedStackParams } from "../App";
import { Colors } from "../constants/styles";

type Props = NativeStackScreenProps<UnauthenticatedStackParams, 'SignUpScreen'>;

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

function SignUpScreen({navigation}: Props): JSX.Element {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredUser, setEnteredUser] = useState('');
    const [checkValue, setCheckValue] = useState(false);
    const [mailError, setMailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userError, setUserError] = useState(false);
    const [checkError, setCheckError] = useState(false);
    
    function updateEmailHandler(email: string) {
        setEnteredEmail(email);
        setMailError(false);
    }

    function updatePasswordHandler(password: string) {
        setEnteredPassword(password);
        setPasswordError(false);
    }

    function updateUserHandler(user: string){
        setEnteredUser(user);
        setUserError(false);
    }

    function updateCheckValueHandler(){
        if(checkValue === false){
            setCheckValue(true);
            setCheckError(false);
        }
        else
            setCheckValue(false);
    }

    function loginHandler() {
        if(enteredEmail.length === 0)
            setMailError(true);
        
        if(enteredPassword.length === 0)
            setPasswordError(true);

        if(enteredUser.length === 0)
            setUserError(true);

        if(!checkValue){
            setCheckError(true);
        }
        
        if(enteredEmail.length !== 0 && enteredPassword.length !== 0 && enteredUser.length !== 0)
            navigation.navigate("HomeScreen");

    }

    function signInHandler() {
        navigation.navigate("WelcomeScreen");
    }

    let error1;
    if(mailError){
        error1 = <Text style={styles.error}>Please enter a valid mail</Text>;
    }

    let error2;
    if(userError){
        error2 = <Text style={styles.error}>Please enter a valid username</Text>;
    }

    let error3;
    if(passwordError){
        error3 = <Text style={styles.error}>Please enter a valid password</Text>;
    }

    let error4;
    if(checkError){
        error4 = <Text style={styles.error}>Please accept the terms</Text>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>SIGN UP</Text>
            </View>
            <MyInput 
                label="Your Email"
                error={mailError}
                keyboardType="email-address"
                image="mail"
                secureTextEntry={false}
                value={enteredEmail}
                onUpdateValue={updateEmailHandler}
            />
            {error1}

            <MyInput 
                label="username"
                error={userError}
                keyboardType="default"
                image="user"
                secureTextEntry={false}
                value={enteredUser}
                onUpdateValue={updateUserHandler}
            />
            {error2}

            <MyInput 
                label="Your Password"
                error={passwordError}
                keyboardType="default"
                image="lock"
                secureTextEntry={true}
                value={enteredPassword}
                onUpdateValue={updatePasswordHandler}
            />
            {error3}

            <View style={styles.checkBoxContainer}>
                <Checkbox
                    value={checkValue}
                    onValueChange={updateCheckValueHandler}
                    style={styles.checkBox}
                    color={checkValue ? Colors.primary : checkError ? Colors.warning : 'white'}
                />
                <View style={styles.checkBoxContainerText}>
                    <Text style={{color: 'white'}}>Agree to </Text>
                    <Pressable>
                        <Text style={styles.checkBoxTextLink}>Terms And Condiditions</Text>
                    </Pressable>
                </View>
            </View>
            {error4}

            <MyButton title="CREATE ACCOUNT" onPress={loginHandler}/>
            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    Don't have an account?
                </Text>
                <Pressable onPress={signInHandler}>
                    <Text style={styles.footerLink}> Sign In</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    titleContainer: {
        marginTop: 50,
        marginBottom: 100,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: Colors.primary,
    },

    footerContainer: {
        position: 'absolute',
        top: HEIGHT - 110, 
        width: WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: Colors.primary,
        flex: 1,
        flexDirection: 'row',
    },

    footerText: {
        marginVertical: 20,
        color: "white",
    },

    footerLink: {
        color: Colors.primary,
        fontWeight: 'bold',
    },

    checkBoxContainer: {
        margin: 20,
        flexDirection: 'row'
    },

    checkBox: {
        borderRadius: 5,
        overflow: "hidden",
    },

    checkBoxContainerText: {
        marginHorizontal: 8,
        flexDirection: 'row',
    },
    
    checkBoxTextLink: {
        color: "white",
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    error: {
        marginHorizontal: 20,
        color: Colors.warning,
        fontSize: 10,
    }
});
import { useState } from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import Checkbox from 'expo-checkbox';

export type RootStackParamList = {
    HomeScreen: undefined;
    WelcomeScreen: undefined;
    SignUpScreen: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

import MyButton from '../components/MyButton';
import MyInput from '../components/MyInput';

function SignUpScreen({navigation}: Props): JSX.Element {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredUser, setEnteredUser] = useState('');
    const [checkValue, setCheckValue] = useState(false);


    function updateEmailHandler(email: string) {
        setEnteredEmail(email);
    }

    function updatePasswordHandler(password: string) {
        setEnteredPassword(password);
    }

    function updateUserHandler(user: string){
        setEnteredUser(user);
    }

    function updateCheckValueHandler(){
        if(checkValue === false)
            setCheckValue(true);
        else
            setCheckValue(false);
    }

    function loginHandler() {
        if(enteredEmail && enteredPassword && enteredUser && checkValue)
            navigation.navigate("HomeScreen");
    }

    function signInHandler() {
        navigation.navigate("WelcomeScreen");
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>SIGN UP</Text>
            </View>
            <MyInput 
                label="Your Email"
                keyboardType="email-address"
                image="mail"
                value={enteredEmail}
                onUpdateValue={updateEmailHandler}
            />
            <MyInput 
                label="username"
                keyboardType="default"
                image="user"
                value={enteredUser}
                onUpdateValue={updateUserHandler}
            />
            <MyInput 
                label="Your Password"
                keyboardType="default"
                image="lock"
                value={enteredPassword}
                onUpdateValue={updatePasswordHandler}
            />
            <View style={styles.checkBoxContainer}>
                <Checkbox
                    value={checkValue}
                    onValueChange={updateCheckValueHandler}
                    style={styles.checkBox}
                    color={checkValue ? '#D78F3C' : 'white'}
                />
                <View style={styles.checkBoxContainerText}>
                    <Text style={{color: 'white'}}>Agree to </Text>
                    <Pressable>
                        <Text style={styles.checkBoxTextLink}>Terms And Condiditions</Text>
                    </Pressable>
                </View>
            
            </View>
            <MyButton title="LOGIN" onPress={loginHandler}/>
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
        backgroundColor: "#2D2D2D",
    },

    titleContainer: {
        marginTop: 100,
        marginBottom: 100,
        alignItems: 'center',
    },

    title: {
        fontSize: 24,
        color: "#D78F3C",
    },

    footerContainer: {
        marginTop: 50,
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
    }


});
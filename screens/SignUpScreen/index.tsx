import { useState } from "react";
import { View, Pressable, Text } from "react-native";
import Checkbox from 'expo-checkbox';

import { AuthenticatedStackParams } from "../../types/Navigation";
import { Colors } from "../../constants/styles";
import { styles } from "./style";

type Props = AuthenticatedStackParams<"SignUpScreen">;

import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';

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
        
        if(enteredEmail.length !== 0 && enteredPassword.length !== 0 && enteredUser.length !== 0 && checkValue)
            navigation.navigate("HomeScreen");

    }

    function signInHandler() {
        navigation.navigate("WelcomeScreen");
    }

    let error1 = '';
    if(mailError){
        error1 = 'Please enter a valid mail';
    }

    let error2 = '';
    if(userError){
        error2 = 'Please enter a valid username';
    }

    let error3 = '';
    if(passwordError){
        error3 = 'Please enter a valid password';
    }

    let error4 = '';
    if(checkError){
        error4 = 'Please accept the terms';
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
            <Text style={styles.error}>{error1}</Text>

            <MyInput 
                label="username"
                error={userError}
                keyboardType="default"
                image="user"
                secureTextEntry={false}
                value={enteredUser}
                onUpdateValue={updateUserHandler}
            />
            <Text style={styles.error}>{error2}</Text>

            <MyInput 
                label="Your Password"
                error={passwordError}
                keyboardType="default"
                image="lock"
                secureTextEntry={true}
                value={enteredPassword}
                onUpdateValue={updatePasswordHandler}
            />
            <Text style={styles.error}>{error3}</Text>

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
            <Text style={styles.error}>{error4}</Text>

            <MyButton title="CREATE ACCOUNT" onPress={loginHandler} color={Colors.primary}/>
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

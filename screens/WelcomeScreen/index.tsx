import { useState } from "react";
import { Pressable, Text, View, Dimensions } from "react-native";

import MyButton from '../../components/MyButton';
import MyInput from '../../components/MyInput';

import { styles } from "./style";
import { AuthenticatedStackParams } from "../../types/Navigation";

type Props = AuthenticatedStackParams<"WelcomeScreen">;

function WelcomeScreen({navigation}: Props): JSX.Element {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [mailError, setMailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    
    function updateEmailHandler(email: string) {
        setEnteredEmail(email);
        setMailError(false);
    }

    function updatePasswordHandler(password: string) {
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

    let error1 = '';
    if(mailError){
        error1 = 'Please enter a valid email address';
    }

    let error2 = '';
    if(passwordError){
        error2 = 'Please enter a valid password';
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
                secureTextEntry={false}
                value={enteredEmail}
                onUpdateValue={updateEmailHandler}
            />
            <Text style={styles.error}>{error1}</Text>

            <MyInput 
                error={passwordError}
                label="Your Password"
                keyboardType="default"
                image="lock"
                secureTextEntry={true}
                value={enteredPassword}
                onUpdateValue={updatePasswordHandler}
            />
            <Text style={styles.error}>{error2}</Text>

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

import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type UnauthenticatedStackParams = {
    WelcomeScreen: undefined;
    SignUpScreen: undefined;
    HomeScreen: undefined;
}

export type AuthenticatedStackParams<str1 extends keyof UnauthenticatedStackParams> = NativeStackScreenProps<UnauthenticatedStackParams, str1>;

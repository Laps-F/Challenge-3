import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import ProductInterface from "./ProductInterface";

export type UnauthenticatedStackParams = {
    WelcomeScreen: undefined;
    SignUpScreen: undefined;
    HomeScreen: undefined;
    DetailProductScreen: undefined;
    ShoppingCartScreen: ProductInterface[];
}

export type AuthenticatedStackParams<str1 extends keyof UnauthenticatedStackParams> = NativeStackScreenProps<UnauthenticatedStackParams, str1>;

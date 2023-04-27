import { KeyboardTypeOptions } from "react-native";

export type InputProps = {
    label: string,
    keyboardType: KeyboardTypeOptions | undefined,
    value: any,
    image: string,
    error: boolean,
    secureTextEntry: boolean,
    onUpdateValue(arg: string): void,
}

export type ButtonProps = {
    title: string,
    onPress(): void,
}
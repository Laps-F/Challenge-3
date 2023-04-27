import { View, StyleSheet } from "react-native";

import CardList from "../components/Cards/CardsList";
import { Colors } from "../constants/styles";

const DATA = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    },
    {
        id: 5
    },
    {
        id: 6
    },
    {
        id: 7
    },
    {
        id: 8
    },
]

function HomeScreen() {
    return (
        <View style={styles.container}>
            <CardList cards={DATA}/>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.background,
    }
});
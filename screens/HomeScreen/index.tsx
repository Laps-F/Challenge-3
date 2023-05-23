import { View } from "react-native";

import CardList from "../../components/Cards/CardsList";
import { styles } from "./style";

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

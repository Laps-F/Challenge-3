import { View, StyleSheet, FlatList } from "react-native";

import Card from "./Card";

function CardList({cards}) {


    function renderCard(card){
        return <Card/>;
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={cards}
                numColumns={2}
                keyExtractor={(item) => item.id} 
                renderItem={renderCard}
            />
        </View>
    );
}

export default CardList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        alignItems: 'center',
    },  
});


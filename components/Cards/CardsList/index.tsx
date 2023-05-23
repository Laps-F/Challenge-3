import { View, FlatList } from "react-native";

import Card from "../Card";
import { styles } from "./style";

function CardList({cards}: any): JSX.Element {

    function renderCard(){
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
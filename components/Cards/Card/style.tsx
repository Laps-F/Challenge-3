import { StyleSheet, Dimensions } from "react-native";


const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardProduct: {
    width: cardWidth,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    alignItems: "center",
    position: "relative"
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productImage: {
    width: cardWidth - 32,
    height: cardWidth - 32,
    marginBottom: 8,
  },
  price: {
    fontSize: 14,
    fontWeight: "bold",
  },

  favoriteIcon: {
    //position: "absolute",
    //bottom: 50,
    //right: -100,
    width: 24, // Defina a largura desejada
    height: 24, // Defina a altura desejada
  },

  description: {
    position: "absolute",
    width: 325,
    height: 86,
    left: 59,
    top: 622,
  },
  
});

export default styles;
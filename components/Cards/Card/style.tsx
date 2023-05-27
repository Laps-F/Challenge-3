import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/styles";


const { width } = Dimensions.get("window");
const cardWidth = width * 0.9;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardProduct: {
    padding: 12,
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

  priceField: {
    position: "absolute",
    backgroundColor: Colors.background,
    borderRadius: 8,
    alignItems: "flex-start",
    textAlign: "left"
  },
  
  price: {
    position: "absolute",
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: "3.76%",
    marginRight: "37.63%",
    marginTop: "105%",
    marginBottom: "3.98%",
    color: Colors.primary,
  },

  favoriteIcon: {
    position: "relative",
    width: 24,
    height: 24,
    marginLeft: 74,
    marginRight: -80,
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
import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "../../../constants/styles";


const { width, height } = Dimensions.get("window");

const cardWidth = width * 0.45;
const cardHeight = height * 0.3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  cardProduct: {
    width: cardWidth,
    height: cardHeight,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 10,
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productImage: {
    width: cardWidth - 30,
    height: cardHeight - 100,
    marginBottom: 8,
  },
  footerCard: {
    marginTop: 205,
    position: "absolute",
    flexDirection: "row",
  },
  priceField: {
    width: cardWidth - 100,
    backgroundColor: Colors.background,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
   // marginLeft: "3.76%",
    marginRight: 70
  },
  price: {
  fontSize: 14,
  fontWeight: "bold",
  color: Colors.primary,
  },
  favoriteIcon: {
  },
});

export default styles;
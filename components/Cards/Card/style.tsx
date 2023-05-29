import { StyleSheet, Dimensions } from "react-native";
import { Colors, NewColors } from "../../../constants/styles";


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
    padding: 6,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginBottom: 16,
    marginHorizontal: 10,
    alignItems: "center",
    position: "relative",
  },
  title: {
    fontSize: 10,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productImage: {
    width: cardWidth - 30,
    height: cardHeight - 100,
    marginBottom: 8,
  },
  footerCard: {
    flexDirection: "row",
  },
  priceField: {
    width: cardWidth - 80,
    backgroundColor: NewColors.background,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
    price: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primary,
  },
  favoriteIcon: {
    alignSelf: "flex-start",
  },
});

export default styles;
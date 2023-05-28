import { StyleSheet, Dimensions } from "react-native";
import { NewColors } from "../../constants/styles";

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: NewColors.background,
  },
  totalPriceContainer: {
    display: "flex",
    left: "10%",
  },
  totalText: {
    color: "white",
    fontSize: 20,
  },
  totalValue: {
    color: NewColors.primary,
    fontSize: 32,
  },
  productsContainer: {
    top: 10,
    flexDirection: "row",
    justifyContent: 'center',
    //backgroundColor: NewColors.primary,
  },
  cardContainer: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 129,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    marginBottom: 15,
  },
  cardImage: {
    width: 90,
    height: 90,
    marginRight: 10,
    marginLeft: 10,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    marginRight: 5,
  },
  cardPrice: {
    fontSize: 16,
    color: NewColors.primary,
    fontWeight: '600',
    //backgroundColor: NewColors.primary,
  },

  cardInfoContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: "100%",
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    width: "50%",
    borderRadius: 10,
    backgroundColor: NewColors.buttonBuy_Add,
  },
  listContainer: {
    height: HEIGHT * 0.60,
    width: '85%',
  },


});
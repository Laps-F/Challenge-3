import { StyleSheet } from "react-native";
import { Colors, NewColors } from "../../constants/styles";
import { getModeForUsageLocation } from "typescript";

const stylesProductList = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      flex: 1,
      textAlign: "left",
      justifyContent: "center",
    },
  
    header: {
      display: "flex",
    },
  
    welcome: {
      color: Colors.inputPlaceholder
    },
  
    userName: {
      textDecorationLine: "underline",
      color: Colors.primary
    },

    shopButton: {
      position: "relative",
      alignSelf: "flex-end",
      marginRight: 25
    },
  
    scrollViewContainer: {
      flex: 4,
      justifyContent: "space-between",
      
    },
  
    productContainer: {
      //width: "100%",
      //paddingHorizontal: 10,
      //marginBottom: 10,
      //flexWrap: "wrap"
    },
    cardProduct: {
      width: "48%",
      height: 150,
      backgroundColor: "#eee",
      borderRadius: 5,
      marginBottom: 10,
    },
    cartItemCountContainer: {
      position: "absolute",
      backgroundColor: NewColors.buttonBuy_Add,
      width: 20, 
      height: 20, 
      borderRadius: 10,
      marginLeft: 30,
      alignItems: "center"
    },
    cartItemCountText: {
      color: "#F5F5F5",  
    },
  });

  export default stylesProductList;
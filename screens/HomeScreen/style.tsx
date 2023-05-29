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
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      alignItems: "center",
      marginBottom: 30      
    },  
    welcome: {
      color: Colors.inputPlaceholder,
      fontSize: 14,
      marginLeft: 10
    },  
    userName: {
      color: Colors.primary,
      fontSize: 20,
      marginTop: 10,
      marginLeft: 10,
      borderBottomColor: "white",
      borderBottomWidth: 2
    },
    shopButton: {
      position: "absolute",
      alignSelf: "auto",
      marginLeft: 357
    },  
    scrollViewContainer: {
      flex: 4,
      justifyContent: "space-between",  
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
    productContainer: {
    },
  });

  export default stylesProductList;
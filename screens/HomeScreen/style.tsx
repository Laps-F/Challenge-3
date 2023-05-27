import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

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
  
  });

  export default stylesProductList;
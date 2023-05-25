import { StyleSheet } from "react-native";
import { Colors } from "../../constants/styles";

const stylesProductList = StyleSheet.create({
    container: {
      backgroundColor: Colors.background,
      flex: 1,
      textAlign: "left",
      justifyContent: "center",
    },
  
    userWelcome: {
      height: 60,
      alignItems: "flex-start",
    },
  
    welcome: {
      color: "white"
    },
  
    userName: {
      textDecorationLine: "underline",
      color: Colors.primary
    },
  
    scrollViewContainer: {
      flex: 2,
    },
  
    productContainer: {
      width: "100%",
      paddingHorizontal: 10,
      marginBottom: 10,
      flexWrap: "wrap"
    },
    cardProduct: {
      width: "48%",
      height: 150,
      backgroundColor: "#eee",
      borderRadius: 5,
      marginBottom: 10,
    },
    
    
    tabBar: {
      height: 60,
    },
  });

  export default stylesProductList;
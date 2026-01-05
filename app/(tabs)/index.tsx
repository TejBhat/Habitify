import { Text, View, StyleSheet } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View style={styles.view}>
      <Text>My App</Text>
      
    </View>
  );
}
//create a style sheet object and put it in style object called view and navButton
const styles=StyleSheet.create({
  view:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      navButton:{
        width:100,
        height:30,
        backgroundColor:"green",
        borderRadius:10,
        textAlign:"center",
        color:"white",
      }
})

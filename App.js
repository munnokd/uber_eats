import 'react-native-gesture-handler';
import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import Home from "./screen/Home";
import RestaurantDetails from './screen/RestaurantDetails'
import RootNavigation from './Navigation';


export default function App() {
  return (
      <RootNavigation/>
  );
}

// const styles=StyleSheet.create({
//   app:{
//     backgroundColor:'white',
//     flex: 1,
//   }
// })

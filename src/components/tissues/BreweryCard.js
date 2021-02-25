import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import IconsMolecule from "../molecules/IconsMolecule.js";

const BreweryCard = (props) => {
  const size1 = parseInt(props.size);

  const styles = StyleSheet.create({
    normal: {
      fontSize: size1,
    },

    tinyLogo: {
      width: 100,
      height: 150,
    },
  });

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <IconsMolecule></IconsMolecule>
    </View>
  );
};

export default BreweryCard;

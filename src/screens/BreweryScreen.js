import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import TextAtom from "../components/atoms/TextAtom";
import IconAtom from "../components/atoms/IconAtom.js";
import IconsMolecule from "../components/molecules/IconsMolecule";
import CardTest from "../components/tissues/TestCard";
import SwipeCard from "../components/tissues/SwipeCard";

const BreweryScreen = () => {
  return (
    <View>
      <CardTest></CardTest>
      <SwipeCard></SwipeCard>
    </View>
  );
};

const styles = StyleSheet.create({});

export default BreweryScreen;

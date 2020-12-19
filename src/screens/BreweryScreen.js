import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import TextAtom from '../components/atoms/TextAtom'

const BreweryScreen = () => {
    return (
        <View>
            <Text>We're on the brewery page!</Text>
            <TextAtom size='50' text='hello'></TextAtom>
            <TextAtom size='100' text='Hi!'></TextAtom>
        </View>

    )
}

const styles = StyleSheet.create({});

export default BreweryScreen;
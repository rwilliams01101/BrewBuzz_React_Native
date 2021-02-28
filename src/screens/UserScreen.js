import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const UserScreen = ({ navigation }) => {
    return (
        <View>
            <Text>This is the User Screen</Text>
            <Button
                onPress={() => navigation.navigate("Brewery")}
                title="Go to Breweries Page"
            />
        </View>
    )
}

const styles = StyleSheet.create({});

export default UserScreen;
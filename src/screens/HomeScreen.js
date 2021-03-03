import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text>If it's beer, it's here.</Text>
            <Button
                onPress={() => navigation.navigate("Brewery")}
                title="Go to Breweries Page"
            />
            <Button
                onPress={() => navigation.navigate("User")}
                title="Go to User Page"
            />    
            <Button
                onPress={() => navigation.navigate("Search")}
                title="Go to Search Page"
            />  
            <Button
                onPress={() => navigation.navigate("Nearby")}
                title="Go to Nearby Page"
            /> 
            <Button
                onPress={() => navigation.navigate("SignUp")}
                title="Go to SignUp Page"
            />   
            <Button
                onPress={() => navigation.navigate("ResetPassword")}
                title="Go to ResetPassword Page"
            />   
            <Button
                onPress={() => navigation.navigate("ForgotPassword")}
                title="Go to ForgotPassword Page"
            />                            
        </View>
    )
}

const styles = StyleSheet.create({});

export default HomeScreen;
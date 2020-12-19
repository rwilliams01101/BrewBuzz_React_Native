import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const TextAtom = (props) => {
    const size1 = parseInt(props.size)
    console.log(size1)
    
    //const [Tize, setSize] = useSize('')
    const styles = StyleSheet.create({

        normal:{
            fontSize: size1
            
        }
    
    
    });

    return (
        <View>
            <Text style={styles.normal}>{props.text}</Text>
        </View>
    )
    
}



export default TextAtom;
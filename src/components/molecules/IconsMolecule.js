import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import IconAtom from '../atoms/IconAtom.js'

const IconsMolecule = (props) => {
    const size1 = parseInt(props.size)
    console.log(size1)
    
    //const [Tize, setSize] = useSize('')
    const styles = StyleSheet.create({

        normal:{
            fontSize: size1
            
        },

        tinyLogo:{
            width: 100,
            height: 150,
        }
    
    
    });

    return (
        <View style={{flex:1, flexDirection:"row"}}>
            <IconAtom iconType = 'directionicon'></IconAtom>
            <IconAtom iconType = 'Phone'></IconAtom>
            <IconAtom iconType = 'shareicon'></IconAtom>
            <IconAtom iconType = 'webicon'></IconAtom>

        </View>
    )
    
}



export default IconsMolecule;
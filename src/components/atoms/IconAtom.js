import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";


const IconAtom = (props) => {
    const size1 = parseInt(props.size)
    console.log(size1)
    
    //const [Tize, setSize] = useSize('')
    const styles = StyleSheet.create({


        tinyLogo:{
            width: 100,
            height: 150,
        }
    
    
    });

    return (
        <View><a href="#">
           
            <Image
            // onPress={() =>{
            //     console.log("icon test")
            // }
            // }     
        style={styles.tinyLogo}
        source={require('../../assets/images/'+props.iconType+'.png')}
      />
</a>
        </View>
    )
    
}



export default IconAtom;
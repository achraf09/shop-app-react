import React from "react";
import {View, Text, StyleSheet,Button, TouchableOpacity } from "react-native";
import {Ionicons} from '@expo/vector-icons';


const CartItem = props =>{
    return <View style={styles.cardItem}>
        <Text>
            <Text>{props.quantity}</Text> <Text>{props.title}</Text>
        </Text>

        <View style={styles.rightSide}>
            <Text>{props.price}</Text>
            {props.deletable && <TouchableOpacity style={{marginLeft: 20}} onPress={props.deleteFromCart}>
                <Ionicons name="md-trash" size={23} color="red"/>
            </TouchableOpacity>}
        </View>
    </View>
};

const styles = StyleSheet.create({

    cardItem:{
        padding:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderColor: '#b4b3b3',
        justifyContent: 'space-between',
        borderWidth: 1,
        margin:5,
        borderRadius: 5,
    },
    rightSide:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

});

export default CartItem;

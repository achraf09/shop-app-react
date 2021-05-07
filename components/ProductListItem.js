import React from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Image, Text} from "react-native";

const ProductListItem = props => {
    return <View style={styles.listItem}>
        <TouchableOpacity>
            <Image />
        </TouchableOpacity>
        <View style={styles.bottomCard}>
            <Button title="Details"/>
            <Text>Price</Text>
            <Button title="To Cart"/>

        </View>
    </View>

};

const styles=StyleSheet.create({
    listItem:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bottomCard:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

export default ProductListItem;

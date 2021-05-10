import React from 'react';
import {View, Button, StyleSheet, Image, Text} from "react-native";
import {PRODUCTS} from "../data/dummy-data";

const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const productItem = PRODUCTS.find(product => product.id === productId);
    return <View style={styles.screen}>
        <Image style={styles.productImage} source={{uri:productItem.imageUrl}} />
        <Text>{productItem.price}€</Text>
        <Text>{productItem.description}</Text>
        <Button title="Add to Cart"/>
    </View>
};

const styles = StyleSheet.create({
    screen:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    productImage:{
        width:'98%',
        height: 280,
        overflow:'hidden'
    }
});

ProductDetailScreen.navigationOptions = navData =>{
    const productId = navData.navigation.getParam('productId');
    const productItem = PRODUCTS.find(product => product.id === productId);
    return{
        headerTitle: productItem.title
    }
}

export default ProductDetailScreen;

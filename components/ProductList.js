import React, {useState} from 'react';
import {View,  FlatList, StyleSheet} from "react-native";
import ProductItem from "./ProductItem";
import {PRODUCTS} from "../data/dummy-data";


const ProductList = props => {
    const [cart,setCart] = useState([]);
    const addItemToCart = item =>{
        setCart(prevState => [...prevState,item]);
    }
    const renderGridItem = itemData => {
        return <ProductItem
            imageSource={itemData.item.imageUrl}
            price={itemData.item.price}
            onSelectProduct={()=>{
                props.navigation.navigate({
                    routeName: 'ProductDetail', params:{
                        productId: itemData.item.id
                    }
                });
            }}
        />
    };

    return (
        <View style={styles.list}>
            <FlatList data={props.listData} renderItem={renderGridItem} />
        </View>
    )
};
const styles= StyleSheet.create({
    list:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductList;

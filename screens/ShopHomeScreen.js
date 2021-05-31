import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ProductList from "../components/ProductList";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../components/ProductItem";
import * as cartActions from '../store/actions/cart';

const ShopHomeScreen = props =>{
    const products = useSelector(state => state.products.availableProducts);
    const dispatch = useDispatch();
    const renderGridItem = itemData => {
        return <ProductItem
            imageSource={itemData.item.imageUrl}
            price={itemData.item.price}
            onSelectProduct={()=>{
                props.navigation.navigate({
                    routeName: 'ProductDetail', params:{
                        productId: itemData.item.id,
                        productTitle: itemData.item.title
                    }
                });
            }}
            onCartAdd={()=>{
                dispatch(cartActions.addToCart(itemData.item));
            }}
        />
    };

    return (
        <View style={styles.list}>
            <FlatList data={products} renderItem={renderGridItem} />
        </View>
    )

}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    list:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

ShopHomeScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Shop',
        headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>,
        headerRight: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Cart" iconName="ios-cart" onPress={() => {
                navData.navigation.navigate({routeName:'Cart'});
            }}/>

        </HeaderButtons>
    };
};

export default ShopHomeScreen;

import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import {PRODUCTS} from "../data/dummy-data";

const ShopHomeScreen = props =>{

    return <ProductList listData={PRODUCTS} navigation={props.navigation} />

}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
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

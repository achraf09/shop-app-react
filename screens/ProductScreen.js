import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import ProductList from "../components/ProductList";
import {PRODUCTS} from "../data/dummy-data";
import ProductEditableList from "../components/ProductEditableList";

const ProductScreen = props =>{

    return <ProductEditableList listData={PRODUCTS} navigation={props.navigation} />
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

ProductScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Your Products',
        headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>,
        headerRight: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-add" onPress={() => {
                navData.navigation.navigate({routeName:'EditProducts'});
            }}/>

        </HeaderButtons>
    };
};

export default ProductScreen;

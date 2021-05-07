import React from 'react';
import {StyleSheet, View, Text} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/HeaderButton";


const ProductsScreen = props => {
    return <View style={styles.screen}>
        <Text>Products screen</Text>
    </View>
};

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

ProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="save" iconName="ios-add" onPress={() => {
                navData.navigation.navigate({routeName:'EditProductScreen'});
            }}/>
        </HeaderButtons>
    };
};

export default ProductsScreen;

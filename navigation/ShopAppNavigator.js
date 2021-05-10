import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import {createDrawerNavigator} from "react-navigation-drawer";


import ShopHomeScreen from "../screens/ShopHomeScreen";
import ProductScreen from "../screens/ProductScreen";
import CartScreen from "../screens/CartScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ManageProductsScreen from "../screens/ManageProductsScreen";
import EditProductsScreen from "../screens/EditProductsScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";


const ShopStackNavigator = createStackNavigator({
    Shop:{
        screen: ShopHomeScreen,
        navigationOption:{
            title: 'Shop'
        },
    },
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
});
const ProductsStackNavigator = createStackNavigator({
    Products:{
        screen: ProductScreen,
        navigationOptions:{
            title: 'Your Products'
        },
    },
    EditProducts:{
        screen: EditProductsScreen,
        navigationOptions:{
            title:'Edit Product'
        }
    }
});
const OrderStackNavigator = createStackNavigator({
    Orders:{
        screen: OrdersScreen,
        navigationOptions:{
            title: 'Orders'
        }
    }
})
const shopDrawNavigator = createDrawerNavigator({
    Shop: ShopStackNavigator,
    Orders: OrderStackNavigator,
    ManageProducts:ProductsStackNavigator
});

export default createAppContainer(shopDrawNavigator);




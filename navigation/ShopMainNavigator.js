import React from "react";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";
import {createAppContainer} from "react-navigation";
import ProductDetailScreen from "../screens/ProductDetailScreen";
import CartScreen from "../screens/CartScreen";
import ProductsScreen from "../screens/ProductsScreen";
import EditProductScreen from "../screens/EditProductScreen";
import OrdersScreen from "../screens/OrdersScreen";
import ShopHomeScreen from "../screens/ShopHomeScreen";

const ShopHomeStackNavigator = createStackNavigator({
    ShopHome:{
        screen: ShopHomeScreen,
        navigationOptions:{
            title:'Shop'
        }
    },
    ProductDetailsScreen: {
        screen: ProductDetailScreen
    },
    Cart: CartScreen
});
const ManageProduct = createStackNavigator({
    ProductsScreen: {
        screen: ProductsScreen,
        navigationOptions:{
            title: 'Your Products'
        }
    },
    EditProductScreen: {
        screen: EditProductScreen,
        navigationOptions:{
            title: 'Edit Product'
        }
    }
});
const OrdersStackNavigator =createStackNavigator({
    OrdersScreen: {
        screen: OrdersScreen,
        navigationOptions:{
            title:'Orders'
        }
    }
})
const MainDrawerNavigator = createDrawerNavigator({
    Shop: ShopHomeStackNavigator,
    productManager:{
        screen: ManageProduct,
        navigationOptions:{
            title:'Manage Products'
        }
    },
    Orders: OrdersStackNavigator

});

export default createAppContainer(MainDrawerNavigator);


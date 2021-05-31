import React from 'react';
import {View, Button, Text, StyleSheet, FlatList} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {useSelector} from "react-redux";
import OrderItem from "../components/OrderItem";

const OrdersScreen = props =>{
    const orders = useSelector(state => state.orders.orders);
    return <FlatList data={orders} keyExtractor={item => item.id} renderItem={itemData => <OrderItem amount={itemData.item.amount} date={itemData.item.readableDate} items={itemData.item.items}/>} />
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
OrdersScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Orders',
        headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>
    };
};
export default OrdersScreen;

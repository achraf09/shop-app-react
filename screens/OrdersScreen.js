import React from 'react';
import {View, Button, Text, StyleSheet} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";

const OrdersScreen = props =>{
    return <View style={styles.screen}>
        <Text>Orders Screen</Text>
    </View>
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

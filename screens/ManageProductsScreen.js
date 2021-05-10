import React from 'react';
import {View, Button, Text, StyleSheet} from "react-native";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {HeaderButtons, Item} from "react-navigation-header-buttons";

const ManageProductsScreen = props =>{
    return <View style={styles.screen}>
        <Text>Manage Products Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

ManageProductsScreen.navigationOptions = (navData) => {
    return {
        headerLeft: ()=> <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }}/>

        </HeaderButtons>
    };
};

export default ManageProductsScreen;

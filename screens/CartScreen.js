import React from "react";
import {View, Text, StyleSheet, Button, FlatList} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import CartItem from "../components/CartItem";
import * as cartActions from "../store/actions/cart";
import * as orderActions from "../store/actions/orders";
import orders from "../store/reducers/orders";
const CartScreen = props =>{
    const cartProducts = useSelector(state => {
        const transformedCartItems = [];
        for (const key in state.cart.items){
            transformedCartItems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum
            });
        }
        return transformedCartItems;
    });
    const dispatch = useDispatch();
    const cartSum = useSelector(state => state.cart.totalSum);
    const renderCartItems = itemData =>{
        return <CartItem
            deletable
        quantity={itemData.item.quantity}
        title={itemData.item.productTitle}
        price={itemData.item.productPrice}
        deleteFromCart={()=>{
            dispatch(cartActions.deleteFromCart(itemData.item.productId));
        }}
        />
    }
    return <View style={styles.screen}>
        <View style={styles.topScreen}>
            <Text>Total Sum: {cartSum}$</Text>
            <Button color={'#00bf03'} title="Order" disabled={cartProducts.length ===0 }
            onPress={()=>{
                dispatch(orderActions.addToOrders(cartProducts, cartSum));
            }}
            />

        </View>
        <FlatList data={cartProducts} keyExtractor={item => item.productId} renderItem={renderCartItems} />

    </View>
}

const styles = StyleSheet.create({
    topScreen:{
        flexDirection:'row',
        margin: 20,
        borderColor: '#ccc',
        borderWidth:1,
        padding:10,
        borderRadius:10,
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        overflow:'hidden'
    },
    buttonOrder:{
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CartScreen;


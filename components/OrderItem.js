import React, {useState} from "react";
import {Text, View, StyleSheet, Button} from "react-native";

import CartItem from "./CartItem";
import cart from "../store/reducers/cart";

const OrderItem = props => {
    const [showDetails,setShowDetails] = useState(false);

    return (
        <View style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button color="blue" title={showDetails ? "Hide Details" : "Show Details"} onPress={()=>{
                setShowDetails(prevState => !prevState);
            }}
            />
            {showDetails && <View>
                {props.items.map((cartItem,idx) => <CartItem key={idx} quantity={cartItem.quantity} price={cartItem.sum} title={cartItem.productTitle} />)}
            </View>}
        </View>
    );
};

const styles=StyleSheet.create({
    orderItem:{
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset:{ width: 0, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        margin: 20,
        padding: 10,
        alignItems: 'center'

    },
    summary:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    totalAmount:{
        fontSize: 16
    },
    date:{
        fontSize: 16
    }
})

export default OrderItem;


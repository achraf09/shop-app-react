import {ADD_TO_ORDERS} from "../actions/orders";
import Order from "../../models/order";


const initialState = {
    orders : []
};

export default (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_ORDERS:
            const newOrder = new Order(
                new Date().toString(),
                new Date(),
                action.orderData.amount,
                action.orderData.items
            );
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };

    }
    return state;
}

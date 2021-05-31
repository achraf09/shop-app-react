import {ADD_TO_CART, DELETE_FROM_CART} from "../actions/cart";
import CartItem from "../../models/cart-item";
import {ADD_TO_ORDERS} from "../actions/orders";
import {DELETE_PRODUCT} from "../actions/products";

const initialState = {
    items: {},
    totalSum: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;
            let updatedOrNewCartItem;
            if (state.items[addedProduct.id]) {
                //already have item in cart
                updatedOrNewCartItem = new CartItem(
                    state.items[addedProduct.id].quantity + 1,
                    prodPrice,
                    prodTitle,
                    state.items[addedProduct.id].sum + prodPrice
                );

            } else {
                updatedOrNewCartItem = new CartItem(1, prodPrice, prodTitle, prodPrice);

            }
            return {
                ...state,
                items: {...state.items, [addedProduct.id]: updatedOrNewCartItem},
                totalSum: state.totalSum + prodPrice
            }
        case DELETE_FROM_CART:
            const selectedCartItem = state.items[action.pid];
            const currentQTY = selectedCartItem.quantity;
            let updatedCartItems;
            if (currentQTY > 1) {
                const updatedCartItem = new CartItem(
                    selectedCartItem.quantity - 1,
                    selectedCartItem.productPrice,
                    selectedCartItem.productTitle,
                    selectedCartItem.sum - selectedCartItem.productPrice
                );
                updatedCartItems = {...state.items, [action.pid]: updatedCartItem}
            } else {
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.pid];
            }

            return {
                ...state,
                items: updatedCartItems,
                totalSum: state.totalSum - selectedCartItem.productPrice
            }
        case ADD_TO_ORDERS:
            return initialState;
        case DELETE_PRODUCT:
            if (!state.items[action.pid]) {
                return state;
            }
            const updatedItems = {...state.items};
            const itemTotal = state.items[action.pid].sum;
            delete updatedItems[action.pid];
            return {
                ...state,
                items: updatedItems,
                totalSum: state.totalSum - itemTotal
            }

    }
    return state;
}

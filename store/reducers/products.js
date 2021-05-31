import PRODUCTS from '../../data/dummy-data';
import {CREATE_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from "../actions/products";
import Product from "../../models/product";

const initialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerID === 1)
};
export default (state = initialState, action) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(
                    product => product.id !== action.pid
                ),
                availableProducts: state.availableProducts.filter(
                    product => product.id !== action.pid
                )
            }
        case CREATE_PRODUCT:
            const newProduct = new Product(
                new Date().toString(),
                1,
                action.productData.title,
                action.productData.description,
                action.productData.price,
                action.productData.imageUrl);
            return {
                ...state,
                availableProducts: state.availableProducts.concat(newProduct),
                userProducts: state.userProducts.concat(newProduct),

            }
        case UPDATE_PRODUCT:
            const productIndex = state.userProducts.findIndex(prod => prod.id === action.pid);
            const updatedProduct = new Product(
                action.pid,
                state.userProducts[productIndex].ownerID,
                action.productData.title,
                action.productData.description,
                action.userProducts[productIndex].price,
                action.productData.imageUrl
            );
            const updatedUserProducts = [...state.userProducts];
            updatedUserProducts[productIndex] = updatedProduct;
            const availableProductIndex = state.availableProducts.findIndex(prod => prod.id === action.pid);
            const updatedAvailableProducts = [...state.availableProducts];
            updatedAvailableProducts[availableProductIndex] = updatedProduct;
            return {
                ...state,
                availableProducts: updatedAvailableProducts,
                userProducts: updatedUserProducts
            };

    }
    return state;

};

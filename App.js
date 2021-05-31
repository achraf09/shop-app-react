import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ShopAppNavigator from "./navigation/ShopAppNavigator";
import { createStore, combineReducers } from 'redux';
import { Provider } from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import cartReducer from "./store/reducers/cart";
import ordersReducer from './store/reducers/orders';
import productsReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productsReducer,
    cart: cartReducer,
  orders: ordersReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
  return (
      <Provider store={store}>
        <ShopAppNavigator />
      </Provider>

);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

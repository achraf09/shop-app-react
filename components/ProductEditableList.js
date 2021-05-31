import React from 'react';
import {View, FlatList, StyleSheet, Alert} from "react-native";
import ProductEditableItem from "./ProductEditableItem";
import {useDispatch} from "react-redux";

import * as actionsProduct from '../store/actions/products';

const ProductEditableList = props => {
    const deleteHandler = (id)=>{
        Alert.alert('Are you sure?','Do you really want to delete this item?',[
            {text:'No', style:'default'},
            {text:'Yes', style:'destructive', onPress: ()=> {
                        dispatch(actionsProduct.deleteProduct(id));

                }}
        ])
    }
    const dispatch = useDispatch();
    const renderGridItem = itemData => {
        return <ProductEditableItem
            imageSource={itemData.item.imageUrl}
            price={itemData.item.price}
            onSelectProduct={()=>{
                props.navigation.navigate({
                    routeName: 'EditProducts', params:{
                        productId: itemData.item.id
                    }
                });
            }}
            onDeleteProduct={deleteHandler.bind(this, itemData.item.id)}
        />
    };

    return (
        <View style={styles.list}>
            <FlatList data={props.listData} renderItem={renderGridItem} />
        </View>
    )
};
const styles= StyleSheet.create({
    list:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ProductEditableList;

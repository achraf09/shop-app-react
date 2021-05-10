import React from 'react';
import {View,  FlatList, StyleSheet} from "react-native";
import ProductEditableItem from "./ProductEditableItem";


const ProductEditableList = props => {
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
            onDeleteProduct={()=>{
                console.log('Clicked on delete item');
            }
            }
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

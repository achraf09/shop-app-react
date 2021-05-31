import React, {useState, useEffect, useCallback} from "react";
import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {PRODUCTS} from "../data/dummy-data";
import {useDispatch, useSelector} from "react-redux";

import * as productActions from '../store/actions/products';

const EditProductsScreen = props => {
    const productId = props.navigation.getParam('productId');
    const product = useSelector(state => state.products.userProducts.find(product => product.id === productId));
    const dispatch = useDispatch();
    const [title, setTitle] = useState(product ? product.title : '');
    const [price, setPrice] = useState(product ? product.price : '');
    const [description, setDescription] = useState(product ? product.description : '');
    const [imageUrl, setImageUrl] = useState(product ? product.imageUrl : '');

    const submitHandler = useCallback(()=>{
        if (product){
            dispatch(productActions.updateProduct(productId,title,description,imageUrl));
        } else{
            dispatch(productActions.createProduct(title,description,imageUrl,+price));
        }
        props.navigation.goBack();
    },[dispatch, productId, title,imageUrl,description,price]);

    useEffect(()=>{
        props.navigation.setParams({submit: submitHandler});
    }, [submitHandler])

    return <View>
        <View style={styles.formRow}>
            <Text>Title: </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Title"
                    value={title}
                    style={styles.input}
                    onChangeText={text => setTitle(text)}
                    autoCapitalize='sentences'

                />
            </View>
        </View>
        {product ? null : <View style={styles.formRow}>
            <Text>Price: </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Price"
                    value={price}
                    style={styles.input}
                    onChangeText={text => setPrice(text)}
                    keyboardType='decimal-pad'
                />
            </View>
        </View>}
        <View style={styles.formRow}>
            <Text>Description: </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Description"
                    value={description}
                    style={styles.input}
                    multiline
                    numberOfLines={4}
                    onChangeText={text => setDescription(text)}
                />
            </View>
        </View>
        <View style={styles.formRow}>
            <Text>Image Url: </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Image URL"
                    value={imageUrl}
                    style={styles.input}
                    onChangeText={text => setImageUrl(text)}
                />
            </View>
        </View>
    </View>
}

EditProductsScreen.navigationOptions = (navData) => {
    const submitFct = navData.navigation.getParam('submit');
    return {
        headerTitle: 'Edit Product',
        headerRight: () => <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Cart" iconName="checkmark-circle-outline" onPress={submitFct}/>

        </HeaderButtons>
    };
};
const styles = StyleSheet.create({
    screen: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    formRow: {
        marginVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginHorizontal: 15
    },
    input: {},
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#848484'
    }
});



export default EditProductsScreen;

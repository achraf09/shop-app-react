import React from "react";
import {View, Text, StyleSheet, Button, TextInput} from "react-native";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import {PRODUCTS} from "../data/dummy-data";

const EditProductsScreen = props => {
    let product = {};
    if (props.navigation.getParam('productId')) {
        product = PRODUCTS.find(prod => prod.id === props.navigation.getParam('productId'));
    }
    return <View>
        <View style={styles.formRow}>
            <Text>Title: </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Title" value={product.title} style={styles.input}/>
            </View>
        </View>
        <View style={styles.formRow}>
            <Text>Price: </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Price" value={product.price} style={styles.input}/>
            </View>
        </View>
        <View style={styles.formRow}>
            <Text>Description: </Text>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Description"
                    value={product.description}
                    style={styles.input}
                    multiline
                    numberOfLines={4}
                />
            </View>
        </View>
        <View style={styles.formRow}>
            <Text>Image Url: </Text>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Image URL" value={product.imageUrl} style={styles.input}/>
            </View>
        </View>
    </View>
}

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

EditProductsScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Edit Product',
        headerRight: ()=><HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
            <Item title="Cart" iconName="checkmark-circle-outline" onPress={() => {
                console.log('save edited or new product');
            }}/>

        </HeaderButtons>
    };
};

export default EditProductsScreen;

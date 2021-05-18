import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    TouchableOpacity,
    Image
} from "react-native";

const ProductEditableItem = props => {
    return <View style={styles.listItem}>
        <TouchableOpacity >
            <Image style={styles.productImage} source={{uri: props.imageSource}} />
        </TouchableOpacity>
        <View style={styles.listItemBottom}>
            <Button title="Edit" onPress={props.onSelectProduct}/>
            <Text>{props.price}€</Text>
            <Button title="Delete" onPress={props.onDeleteProduct}/>
        </View>
    </View>
};
const styles = StyleSheet.create({
    listItem:{
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width:'98%',
        borderColor: '#9f9f9f',
        borderWidth: 1,
        borderRadius:10,
        overflow:'hidden',
        elevation: 10,
        paddingBottom: 10,
        marginVertical:10
    },
    listItemBottom:{
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    productImage:{
        width:300,
        height:200
    }
});

export default ProductEditableItem;


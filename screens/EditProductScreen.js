import React from 'react';
import {StyleSheet, View, Text, TextInput} from "react-native";

const EditProductScreen = props => {
    return <View style={styles.screen}>
        <TextInput placeholder="Title" name="title" label="Title"/>

    </View>
};

const styles= StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default EditProductScreen;

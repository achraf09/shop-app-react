import React from "react";
import {Platform} from 'react-native'
import {Ionicons} from '@expo/vector-icons';
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from 'react-navigation-header-buttons';



const CustomHeaderButton = props => {
    return <HeaderButton {...props}
                         IconComponent={Ionicons}
                         iconSize={23}
                         color={'#626562'}
    />
};

export default CustomHeaderButton;

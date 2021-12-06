import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#025893',
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'white',
        fontSize: 28,
        fontWeight: 700
    }
})

export default Header

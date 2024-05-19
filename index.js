import React from 'react';
import { AppRegistry } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import LoginPage from './LoginPage';

const TennisTot = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tennis-Tot App</Text>
            <LoginPage />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});
AppRegistry.registerComponent('TennisTot', () => TennisTot);

export default TennisTot;
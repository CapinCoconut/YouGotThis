import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/Mind.jpg")}  
        >
            <View style={styles.loginButton}></View>
            <View><Text>YouGotThis</Text></View>
        </ImageBackground>
           
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor : "#eb0915",
    }
})
export default WelcomeScreen;
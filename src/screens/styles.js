import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1a1924"
    },
    bottomContainerStyle: {
        flex:1,
        width: '90%',
        alignSelf: 'center',
        justifyContent:'flex-end',
        marginBottom:50
    },
    buttonContainerStyle: {
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 10
    },
    button2Style: {
        backgroundColor: '#34424a'
    },
    button3Style: {
        backgroundColor: '#6eb1f7'
    },
    button3TextStyle: {
        color: '#fff'
    },
    buttonTextStyle: {
        color: '#6eb1f7'
    },
    buttonSliderContStyle:
    {
        width: '100%',
        height: 50,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 6,
        marginTop: 10,
        borderColor: '#fff',
        borderWidth: .2,
    },
    sliderImageContStyle: {
        backgroundColor: "#6eb1f7",
        height: 50, alignItems: 'center',
        width: 50,
        borderRadius: 6,
        justifyContent: 'center'
    },
    imageSliderStyle: {
        width: 25,
        height: 25,
        margin: 10,
    }
});

export default styles;
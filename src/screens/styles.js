import React from 'react';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#1a1924"
    },
    bottomContainerStyle: {
        flex: 1,
        width: '90%',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginBottom: 50
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
    },
    textInputStyle: {
        height: 40,
        backgroundColor: '#fff',
        marginTop: 60,
        width: '80%'
    },
    slideTextStyle: {
        color: '#6eb1f7'
    },
    welcomeTextStyle: {
        color: '#fff',
        position: 'absolute',
        top: 10,
        right: 50
    }, 
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
    modalView: {
        margin: 10,
        width:'60%',
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});

export default styles;
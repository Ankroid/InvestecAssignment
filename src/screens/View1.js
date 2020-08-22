import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import Slider from '../../component/SlidingButtonComponent';
import styles from './styles';

function navigateToScreen(navigation, text) {
    navigation.navigate('View2', { data: text });
}

const View1 = ({ navigation }) => {
    const [text, setText] = useState('');
    return (
        <View style={styles.containerStyle}>
            <TextInput
                style={{ height: 40, backgroundColor: '#fff', marginTop: 60, width: '80%' }}
                placeholder="Enter Your Name"
                onChangeText={text => setText(text)}
                defaultValue={text} />
            <View style={styles.bottomContainerStyle}>
                <TouchableOpacity style={styles.buttonContainerStyle} onPress={() => navigateToScreen(navigation, text)}>
                    <Text style={styles.buttonTextStyle}>Press me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen(navigation, text)} style={[styles.buttonContainerStyle, styles.button2Style]}>
                    <Text style={styles.buttonTextStyle}>Press me</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen(navigation, text)} style={[styles.buttonContainerStyle, styles.button3Style]}>
                    <Text style={styles.button3TextStyle}>Press me</Text>
                </TouchableOpacity>
                <Slider onEndReached={() => navigateToScreen(navigation, text)}
                    containerStyle={styles.buttonSliderContStyle}
                    sliderElement={
                        <View style={styles.sliderImageContStyle}>
                            <Image style={styles.imageSliderStyle}
                                source={require('../../assets/diamond.png')} />
                        </View>
                    }>
                    <Text style={{ color: '#6eb1f7' }}>{'Slide me to continue'}</Text>
                </Slider>
            </View>
        </View>
    );
};

export default View1;

import React, { useState, } from 'react';
import { View, Text,Image } from 'react-native';
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userReducer/user.actions'
import Slider from '../components/SlidingButtonComponent';
import CustomButtonComponent from '../components/CustomButtonComponent';
import CustomTextInputComponent from '../components/CustomTextInputComponent';
import styles from './styles';
import PropTypes from 'prop-types';

function navigateToScreen(navigation, text, dispatch) {
    dispatch(setUserData(text))
    navigation.navigate('View2');
}

const View1 = ({ navigation }) => {
    const [text, setText] = useState('');
    const dispatch = useDispatch()
    return (
        <View style={styles.containerStyle}>
            <CustomTextInputComponent
                textInputStyle={styles.textInputStyle}
                onChangeText={text => setText(text)}
                defaultValue={text} />
            <View style={styles.bottomContainerStyle}>
                <CustomButtonComponent
                    buttonContainerStyle={[styles.buttonContainerStyle]}
                    buttonTextStyle={styles.buttonTextStyle}
                    callback={() => navigateToScreen(navigation, text, dispatch)} />
                <CustomButtonComponent
                    buttonContainerStyle={[styles.buttonContainerStyle, styles.button2Style]}
                    buttonTextStyle={styles.buttonTextStyle}
                    callback={() => navigateToScreen(navigation, text, dispatch)} />
                <CustomButtonComponent
                    buttonContainerStyle={[styles.buttonContainerStyle, styles.button3Style]}
                    buttonTextStyle={styles.button3TextStyle}
                    callback={() => navigateToScreen(navigation, text, dispatch)} />
                <Slider onEndReached={() => navigateToScreen(navigation, text, dispatch)}
                    containerStyle={styles.buttonSliderContStyle}
                    sliderElement={
                        <View style={styles.sliderImageContStyle}>
                            <Image style={styles.imageSliderStyle}
                                source={require('../../assets/diamond.png')} />
                        </View>
                    }>
                    <Text style={styles.slideTextStyle}>{'Slide me to continue'}</Text>
                </Slider>
            </View>
        </View>
    );
};

View1.propTypes = {
    navigation: PropTypes.object,
};

export default View1;

import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Slider from '../components/SlidingButtonComponent';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const View2 = ({ navigation }) => {
    const userData = useSelector(state => state.user.userData)
    return <View style={styles.containerStyle}>
        <Text style={styles.welcomeTextStyle}>
            Welcome:- {userData}</Text>
        <View style={styles.bottomContainerStyle}>
            <Slider onEndReached={() => navigation.navigate('View3', userData)}
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
};

View2.propTypes = {
    navigation: PropTypes.object,
};


export default View2;

import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';
import Slider from '../../component/SlidingButtonComponent';
const View2 = ({ navigation, route }) => (
    <View style={styles.containerStyle}>
        <Text style={{ color: '#fff', position: 'absolute', top: 10, right: 50 }}>
            Welcome:- {route.params?.data}</Text>
            <View style={styles.bottomContainerStyle}>
        <Slider onEndReached={() => navigation.navigate('View3', { data: route.params?.data })}
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

export default View2;

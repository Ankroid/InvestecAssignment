import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import PropTypes from 'prop-types';

const View3 = () => {
    const userData = useSelector(state => state.user.userData)
   return <View style={styles.containerStyle}>
        <Text style={styles.welcomeTextStyle}>
            Welcome:- {userData}</Text>
    </View>
};

View3.propTypes = {
    navigation: PropTypes.object,
};


export default View3;

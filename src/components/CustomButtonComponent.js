import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

const CustomButtonComponent = ({ callback, buttonContainerStyle, buttonTextStyle }) => (
    <TouchableOpacity style={buttonContainerStyle}
        onPress={callback}>
        <Text style={buttonTextStyle}>Press me</Text>
    </TouchableOpacity>
);

CustomButtonComponent.propTypes = {
    callback: PropTypes.func.isRequired,
    buttonContainerStyle: PropTypes.array,
    buttonTextStyle: PropTypes.object,
};


export default CustomButtonComponent;

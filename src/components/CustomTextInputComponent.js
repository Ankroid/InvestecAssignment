import React from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';

const CustomTextInputComponent = ({ textInputStyle, onChangeText, defaultValue }) => (
    <TextInput
        style={textInputStyle}
        placeholder="Enter Your Name"
        onChangeText={onChangeText}
        defaultValue={defaultValue} />
);

CustomTextInputComponent.propTypes = {
    textInputStyle: PropTypes.object,
    onChangeText: PropTypes.func.isRequired,
    defaultValue: PropTypes.string.isRequired,
};

export default CustomTextInputComponent;

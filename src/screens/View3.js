import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const View2 = ({ navigation, route }) => (
    <View style={styles.containerStyle}>
       <Text style={{ color: '#fff', position: 'absolute', top: 10, right: 50 }}>
            Welcome:- {route.params?.data}</Text>
    </View>
);

export default View2;

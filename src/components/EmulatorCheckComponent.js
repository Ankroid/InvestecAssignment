import React, { useEffect, useState } from 'react';
import { Text, View, NativeModules, Modal } from 'react-native';
import { checkIsEmulator } from '../redux/userReducer/user.actions';
import CustomButtonComponent from '../components/CustomButtonComponent';
import styles from '../screens/styles';
import { useDispatch, useSelector } from 'react-redux';

function checkIfIsEmulator(dispatch) {
    NativeModules.EmulatorCheck.checkIfEmultor(isEmulator => {
        dispatch(checkIsEmulator(isEmulator ? 'Running in Emulator' : 'Running in device'))
    });
}

const EmulatorCheckComponent = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user.isEmulator)
    useEffect(() => {
        checkIfIsEmulator(dispatch)
    }, [])
    return <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>
        <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>{userData}</Text>
                <CustomButtonComponent
                    buttonContainerStyle={[styles.buttonContainerStyle, styles.button3Style]}
                    buttonTextStyle={styles.button3TextStyle}
                    callback={() =>  setModalVisible(!modalVisible)} />
            </View>
        </View>
    </Modal>
};

export default EmulatorCheckComponent;

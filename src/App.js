import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EmulatorCheckComponent from '../component/EmulatorCheckComponent';
import View1 from './screens/View1';
import View2 from './screens/View2';
import View3 from './screens/View3';

EmulatorCheckComponent.checkIfEmultor(isEmulator => {
    alert(isEmulator ? 'Running in Emulator' : 'Running in device')
});


const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    backgroundColor: '#1a1924',
                },
                headerTintColor: '#fff',
            }}>
                <Stack.Screen name="View1" component={View1} />
                <Stack.Screen name="View2" component={View2} />
                <Stack.Screen name="View3" component={View3} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}


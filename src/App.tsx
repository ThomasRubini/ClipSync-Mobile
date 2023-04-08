/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import type { PropsWithChildren } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import ClipViewLocal from './clip/ClipViewLocal';
import ClipViewRemote from './clip/ClipViewRemote';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from './auth/SignUp';
import SignIn from './auth/SignIn';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function Clip() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Local" options={{ title: 'local' }}>
                {(props) => <ClipViewLocal navigation={props.navigation} type={"local"} />}
            </Tab.Screen>
            <Tab.Screen name="Remote" options={{ title: 'remote' }}>
                {(props) => <ClipViewRemote navigation={props.navigation} type={"remote"} />}
            </Tab.Screen>
        </Tab.Navigator>
    );
}

function Auth() {
    return <Tab.Navigator>
        <Tab.Screen component={SignIn} name="Login" options={{ title: 'Sign In' }} />
        <Tab.Screen component={SignUp} name="Register" options={{ title: 'Sign Up' }} />
    </Tab.Navigator>;
}

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*-------------------------------------------*/}
                <Stack.Screen component={Auth} name="Authentification" options={{title: "Authentification"}} />
                {/*-------------------------------------------*/}
                <Stack.Screen component={Clip} name="Clipboards" options={{title: 'Clipboard'}}/>
                {/*-------------------------------------------*/}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});

export default App;

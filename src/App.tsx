/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ClipViewLocal from './clip/ClipViewLocal';
import ClipViewRemote from './clip/ClipViewRemote';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createMaterialBottomTabNavigator();

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Remote" options={{ title: 'remote' }}>
                    {(props) => <ClipViewRemote navigation={props.navigation} type={"remote"} />}
                </Stack.Screen>
                <Stack.Screen name="Local" options={{ title: 'local' }}>
                    {(props) => <ClipViewLocal navigation={props.navigation} type={"local"} />}
                </Stack.Screen>
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

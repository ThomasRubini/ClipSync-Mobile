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
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { Provider } from 'react-redux';
import store from './redux/store';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

class App extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            token: "",
            username: ""
        }
        store.subscribe(() => {
            this.setState({ token: store.getState().userReducer.token });
        });
    }

    Auth() {
        return <Provider store={store}>
            <Tab.Navigator>
                <Tab.Screen children={() => <SignIn store={store} />} name="Login" options={{ title: 'Connexion' }} />
                <Tab.Screen children={() => <SignUp store={store} />} name="Register" options={{ title: 'Créer un compte' }} />
            </Tab.Navigator>
        </Provider>;
    }

    Clip() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="Local" options={{ title: 'local' }}>
                    {(props) => <ClipViewLocal store={store} navigation={props.navigation} type={"local"} />}
                </Tab.Screen>
                <Tab.Screen name="Remote" options={{ title: 'distant' }}>
                    {(props) => <ClipViewRemote store={store} navigation={props.navigation} type={"remote"} />}
                </Tab.Screen>
            </Tab.Navigator>
        );
    }

    render(): React.ReactNode {
        console.log("render app", store.getState());
        console.log("app state", this.state);
        return <NavigationContainer>
            <Tab.Navigator>{
                this.state.token === ""
                    ?
                    ////////////////////////////////////////////////////////////
                    <>
                        <Tab.Screen children={() => <SignIn store={store} />} name="Login" options={{ title: 'Connexion' }} />
                        <Tab.Screen children={() => <SignUp store={store} />} name="Register" options={{ title: 'Créer un compte' }} />
                    </>
                    :
                    ////////////////////////////////////////////////////////////
                    <>
                        <Tab.Screen name="Local" options={{ title: 'local' }}>
                            {(props) => <ClipViewLocal store={store} navigation={props.navigation} type={"local"} />}
                        </Tab.Screen>
                        <Tab.Screen name="Remote" options={{ title: 'distant' }}>
                            {(props) => <ClipViewRemote store={store} navigation={props.navigation} type={"remote"} />}
                        </Tab.Screen>
                    </>
                    ////////////////////////////////////////////////////////////
            }</Tab.Navigator>
        </NavigationContainer>
    };
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

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import type {PropsWithChildren} from 'react';
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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: '',
      username: '',
    };
    store.subscribe(() => {
      this.setState({token: store.getState().persistedUserReducer.token});
    });
  }

  render(): React.ReactNode {
    console.log('render app', store.getState());
    console.log('app state', this.state);
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor} />
        <NavigationContainer>
          <Tab.Navigator>
            {
              this.state.token === '' ? (
                ////////////////////////////////////////////////////////////
                <>
                  <Tab.Screen
                    children={() => <SignIn store={store} />}
                    name="Login"
                    options={{title: 'Connexion'}}
                  />
                  <Tab.Screen
                    children={() => <SignUp store={store} />}
                    name="Register"
                    options={{title: 'Créer un compte'}}
                  />
                </>
              ) : (
                ////////////////////////////////////////////////////////////
                <>
                  <Tab.Screen name="Local" options={{title: 'local'}}>
                    {props => (
                      <ClipViewLocal
                        store={store}
                        navigation={props.navigation}
                        type={'local'}
                      />
                    )}
                  </Tab.Screen>
                  <Tab.Screen name="Remote" options={{title: 'distant'}}>
                    {props => (
                      <ClipViewRemote
                        store={store}
                        navigation={props.navigation}
                        type={'remote'}
                      />
                    )}
                  </Tab.Screen>
                </>
              )
              ////////////////////////////////////////////////////////////
            }
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

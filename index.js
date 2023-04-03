/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

Platform.OS === 'ios' ? AppRegistry.registerComponent(appName, () => App) : AppRegistry.registerComponent('main', () => App);


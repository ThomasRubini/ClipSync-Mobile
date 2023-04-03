/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

Platform.OS === 'ios' ? AppRegistry.registerComponent('main', () => App) : AppRegistry.registerComponent(appName, () => App);
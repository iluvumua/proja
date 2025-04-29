/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App'; // Assuming your main app component is in src/App.tsx
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

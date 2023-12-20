/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
import {Home , StoryDetail} from './screens'
AppRegistry.registerComponent(appName, () => StoryDetail);

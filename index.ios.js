'use strict';

var React = require('react-native');
var {AppRegistry} = React;
var App = require('./dist/containers/app');

AppRegistry.registerComponent('rnReduxSample', () => App);

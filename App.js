

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';
import LoginScreen from './src/LoginScreen';
import HomeScreen from './src/HomeScreen';


export default class App extends Component {
  render() {
    return (
      <AppNavigation/>
    );
  }
}
const AppNavigation = StackNavigator({
  login: { screen: LoginScreen },
  home: { screen: HomeScreen },
});

const styles = StyleSheet.create({
});

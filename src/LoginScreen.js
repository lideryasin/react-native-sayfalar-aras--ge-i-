import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';


export default class LoginScreen extends Component {
  render() {
    return (
      <View>
      <Text>Login Screen</Text>
      <TouchableOpacity style={styles.btn} onPress={() => this.props.navigation.navigate('home')}>
      <Text style={styles.text}>Home Screen Go</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color: 'skyblue',
        textAlign: 'center',
        justifyContent: 'center',
    },
})
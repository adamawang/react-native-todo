import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }
  render() {
    return (
      <Text>Hello!</Text>
    );
  }
}

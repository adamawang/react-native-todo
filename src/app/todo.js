import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  handleChange(text) {
    this.setState({
      newTodo: text
    })
  }

  handlePress() {
    const todos = [...this.state.todos, this.state.newTodo];
    this.setState({
      todos,
      newTodo: '',
    })
  }

  render() {
    return (
      <View style={{marginTop: 20}}>
        <TextInput
          value={this.state.newTodo}
          onChangeText={this.handleChange}
          style={{height: 20}}
          placeholder="Type a todo here"
        />
        <TouchableOpacity onPress={this.handlePress}>
          <Text>Create</Text>
        </TouchableOpacity>
        <View>
          {this.state.todos.map((todo, i) => {
              return (<Text key={i}>{todo}</Text>)
            })}
        </View>
      </View>
    );
  }
}

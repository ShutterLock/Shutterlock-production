import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class ModalScreen extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      </View>
    );
  }
}
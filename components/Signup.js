import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './StyleSheet'

export default class SignupScreen extends Component {
  static navigationOptions = {
    title: 'Signup',
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: 'dodgerblue'
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  signUp = () => {
    const { username, password } = this.state

    fetch('http://192.168.0.126:8080/signup', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => {console.log('fetched response ', response.locals.token);}) 
    .catch(err => console.log('error ', err));
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          placeholder='Choose Username' 
          style={styles.login}
          onChangeText={(username) => this.setState({ username })}
          />
        <TextInput 
          placeholder='Choose Password' 
          style={styles.login}
          onChangeText={(password => {this.setState({ password })})}
          />
        <TouchableOpacity onPress={() => {
          // think about wrapping this section up as an if statement. if the registration is successful, navigate to main page. if not, alert user of invalid credentials. 
          this.signUp() 
          this.props.navigation.navigate('Main')
        }} style={styles.button}>
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
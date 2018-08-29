import React, {Component} from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import styles from './StyleSheet'

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    };
    
  }

  login = async () => {
    const { username, password } = this.state;
    let users;
    try {
      const getData = await fetch('http://192.168.0.126:8080/login')
      users = await getData.json();
    } catch (err) {
      console.log('async err ', err);
    }

    let verified = false;
    console.log(users.user)

    users.user.forEach((obj, i) => {
      if (obj.username === username.toLowerCase().trim() && obj.password === password.toLowerCase().trim()) {
        verified = true;
      } 
    })

    if (verified) {
      this.props.navigation.navigate('Main')
    } else {
      this.props.navigation.navigate('Signup')
    }
  }

  static navigationOptions = {
    header: null
  }

  render () {
    return (
      <View style={styles.container}>
      <Image style={{width: 200, height: 200, marginBottom: 30}} source={{uri: 'https://i.imgur.com/PCVFXZH.png'}}/>

        <TextInput placeholder='Username' style={styles.login} onChangeText={(input) => {
          this.setState({username: input})
        }} value={this.state.username}/>

        <TextInput placeholder='Password' style={styles.login} onChangeText={(input) => {
          this.setState({password: input})
        }} value={this.state.password}/>

        <TouchableOpacity style={styles.button} 
          onPress={() => {
            this.login();
          }}>
          <Text>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {this.props.navigation.navigate('Signup')}}>

          <Text>Signup</Text>
        </TouchableOpacity>

      </View>
    )
  }
}
import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Button, Text} from 'react-native';
import styles from './StyleSheet'

class AlbumsScreen extends Component {
  static navigationOptions = {
      headerTitle: 'Albums',
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
  }

  constructor(props) {
    super(props)
    this.state = {
      'a': 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
      'b': 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
      'c': 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
      'd': 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
      'e': 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
      'f': 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif',
    }
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Album')}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.a}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({b: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.b}}/>
      </TouchableOpacity>
      </View> 
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => {this.setState({c: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.c}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({d: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.d}}/>
      </TouchableOpacity>
      </View> 
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => {this.setState({e: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.e}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({f: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.f}}/>
      </TouchableOpacity>
      </View> 
    </View>
    )
  }
}

export default AlbumsScreen;
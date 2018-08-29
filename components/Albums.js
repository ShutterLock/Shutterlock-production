import React, {Component} from 'react';
import {View, Image, TouchableOpacity, Button, Text} from 'react-native';
import styles from './StyleSheet'

class AlbumsScreen extends Component {
  static navigationOptions = {
    title: 'Albums',
  }

  constructor(props) {
    super(props)
    this.state = {uri: 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif'}
  }

  render() {
    return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => {this.setState({uri: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.uri}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({uri: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.uri}}/>
      </TouchableOpacity>
      </View> 
      <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => {this.setState({uri: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.uri}}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {this.setState({uri: 'http://static.tumblr.com/25feb122e4573b40983612d89be02586/ofay0ex/gPvo2olcz/tumblr_static_4g0teat82t8gs0oss4ksc84g.gif'})}}>
        <Image style={{width: 150, height: 150}} source={{uri: this.state.uri}}/>
      </TouchableOpacity>
      </View> 
      <View style={{flexDirection: 'row'}}>
        <Image style={{width: 150, height: 150}} source={{uri: 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif'}}/>
        <Image style={{width: 150, height: 150}} source={{uri: 'https://i.pinimg.com/originals/6f/ed/be/6fedbea546d7cc530233e535a35cd6e1.gif'}}/>
      </View> 
    </View>
    )
  }
}

export default AlbumsScreen;
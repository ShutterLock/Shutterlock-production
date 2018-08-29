import React, {Component} from 'react';
import {View, Text, Image, TextInput, Button, TouchableOpacity} from 'react-native';
import styles from './StyleSheet';
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Hi'
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: 'http://fc09.deviantart.net/fs71/f/2011/134/6/5/pokemon_pokeball_pichu_by_kevintut-d3gallt.gif'}} style={{width: 180, height: 180}}/>
        <Button onPress={() => {
          this.props.navigation.navigate('Albums')
        }} title='Press'/>
        <TextInput style={styles.input} placeholder='Type here...' onChangeText={(text) => this.setState({text})}/>
        <Text style={styles.text}>
          {this.state.text}
        </Text> 
      </View>
    )
  }
}
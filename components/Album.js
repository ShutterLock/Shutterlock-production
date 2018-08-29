import React, {Component} from 'react';
import {View, Button, ScrollView, TouchableOpacity, Text, FlatList} from 'react-native';
import styles from './StyleSheet'

// const rows = [
//   {id: '1', text: 'Photo 1'},
//   {id: '2', text: 'Photo 2'},
//   {id: '3', text: 'Photo 3'},
//   {id: '4', text: 'Photo 4'},
//   {id: '5', text: 'Photo 5'},
//   {id: '6', text: 'Photo 6'}
// ]

// const extractKey = ({id}) => id

export default class Album extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photos: []
    }
  }

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };
 render() {
  return (
    <View>
      <Button title="Load Images" onPress={this._handleButtonPress} />
      <ScrollView>
        {this.state.photos.map((p, i) => {
        return (
          <Image
            key={i}
            style={{
              width: 300,
              height: 100,
            }}
            source={{ uri: p.node.image.uri }}
          />
        );
      })}
      </ScrollView>
    </View>
  );
 }

  // renderItem = ({item}) => {
  //   return (
  //     <TouchableOpacity style={styles.album}>
  //       <Text>{item.text}</Text>
  //     </TouchableOpacity>
  //   )
  // }

  // render() {
  //   return (
  //     <View>
  //     <FlatList 
  //       data={rows}
  //       renderItem={this.renderItem}
  //       keyExtractor={extractKey}
  //     />
  //   </View>
  //   )
  // }
}
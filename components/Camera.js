import React, {Component} from 'react';
import { Text, Image, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions, FileSystem } from 'expo';

export default class CameraScreen extends Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  onPictureSaved = async photo => {
    await FileSystem.moveAsync({
      from: photo.uri,
      to: `${FileSystem.documentDirectory}photos/${Date.now()}.jpg`,
    });
    this.setState({ newPhotos: true });
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera style={{ flex: 1 }} type={this.state.type}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'column',
              }}>
              <View style={{
                    flex: 1,
                    flexDirection: 'row',
                  }}>
              <TouchableOpacity
                  style={{
                    alignSelf: 'flex-start',
                  }}
                  onPress={() => {
                    this.setState({
                      type: this.state.type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back,
                    });
                  }}>
                  <Image style={{width: 50, height: 50, margin: 20}} source={{uri: 'https://i.imgur.com/rKeNjLN.png'}} />
                </TouchableOpacity>
              </View>
              <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
              <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                  }}
                  onPress={() => {
                    if (this.camera) {
                      this.camera.takePictureAsync({ onPictureSaved: this.onPictureSaved });
                    }
                  }}>
                  <Image source={{uri: 'https://openclipart.org/image/2400px/svg_to_png/256338/whitecircle.png'}}
                    style={{ width: 80, height: 80, marginBottom: 10, justifyContent: 'center'}}/>
                </TouchableOpacity>
              </View>
            </View>
          </Camera>
        </View>
      );
    }
  }
}
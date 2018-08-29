import React from 'react';
import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import {ImageBackground, Button} from 'react-native';
import HomeScreen from './Home';
import AlbumsScreen from './Albums';
import ModalScreen from './Modal';
import LoginScreen from './Login';
import SignupScreen from './Signup';

const ModalStack = createStackNavigator(
  {
    Main: AlbumsScreen,
    Modal: {
      screen: ModalScreen,
    }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({navigation}) => {
        return {
          headerTitle: 'Home',
          headerLeft: (
            <Button
              onPress={() => navigation.navigate('Login')}
              title="Logout"
              color="#fff"
            />
          ),
          headerRight: (
            <ImageBackground
            source={{uri: 'https://www.peace.edu/wp-content/uploads/Camera-icon-White-SMALL.png'}}
            style={{width: 42, height: 30, marginRight: 20}}>
              <Button onPress={() => navigation.navigate('Modal')} title=''/>
            </ImageBackground>
          ) 
        }
      }
    },
    Modal: ModalStack
  },
  {
    initialRouteName: 'Home',
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const AlbumsStack = createStackNavigator(
  {
    Albums: AlbumsScreen
  },
  {
    initialRouteName: 'Albums',
    headerMode: 'screen',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'dodgerblue',
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

const BottomStack = createBottomTabNavigator(
  {
    Home: RootStack,
    Albums: AlbumsStack
  }
)

const LoginStack = createStackNavigator(
  {
    Login: LoginScreen,
    Signup: SignupScreen,
  }
)

const FrontStack = createSwitchNavigator(
  {
    Front: LoginStack,
    Main: BottomStack
  },
  {
    initialRouteName: 'Front',
  }
)

export default FrontStack;

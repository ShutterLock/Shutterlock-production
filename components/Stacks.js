import {createSwitchNavigator, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import ModalScreen from './Modal';
import LoginScreen from './Login';
import SignupScreen from './Signup';

const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
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

const ModalStack = createStackNavigator(
  {
    Main: {
      screen: RootStack,
    },
    Modal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const DetailsStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    initialRouteName: 'Details',
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
    Albums: DetailsStack
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

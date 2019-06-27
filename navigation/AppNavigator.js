import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import MainScreen from '../screens/MainScreen';
import NewCustomerScreen from '../screens/NewCustomerScreen';
import ReturningCustomerScreen from '../screens/ReturningCustomerScreen';

const AppNavigator = createStackNavigator(
  {
    Main: MainScreen,
    NewCustomer: NewCustomerScreen,
    ReturningCustomer: ReturningCustomerScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  }
  
);

export default AppNavigator;
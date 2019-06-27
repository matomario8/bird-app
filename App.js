import React from 'react';
import { StyleSheet, Text, View, StatusBar, ActivityIndicator } from 'react-native';
import Header from './components/MainComponents';
import { Font } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      Lobster: require('./assets/fonts/Lobster.ttf'),
      Karla: require('./assets/fonts/Karla.ttf'),
      Roboto: require('./assets/fonts/Roboto.ttf'),
    });

    this.setState({fontLoaded: true});
  }

  render() {
    return (
      <View>
        <View style={styles.headerSpace}>
          <Header fontLoaded={this.state.fontLoaded}></Header>
        </View>
        <View style={styles.bodySpace}>
          {/* (Whatever screen the user is on currently) goes here */}

          {
            this.state.fontLoaded ?
            <AppContainer /> :
            <View style={styles.container}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          }
          
        </View>
        
        <StatusBar hidden = {true} />
        
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  headerSpace: {
    height: "11%",
  },
  bodySpace: {
    height: "89%",
    padding: 20,
  },
  
});

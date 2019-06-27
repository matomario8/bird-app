import React from 'react';
import { ActivityIndicator, Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class MainScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={styles.buttonPop}
            onPress={() => {this.props.navigation.navigate('NewCustomer')}}>
            <Text style={styles.buttonPopText}>
              New Customer
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBlend}
            onPress={() => {this.props.navigation.navigate('ReturningCustomer')}}>
            <Text style={styles.buttonBlendText}>
              Returning Customer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    ); 
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  buttonBox: {
    flex: 0,
  },
  buttonPop: {
    backgroundColor: '#e9afa3',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: '#3a405a',
    borderWidth: 1,
  },
  buttonPopText: {
    color: '#3a405a',
    fontFamily: 'Karla',
    textAlign: 'center',
  },
  buttonBlend: {
    backgroundColor: '#f9dec9',
    margin: 5,
    padding: 10,
    borderRadius: 10,
    borderColor: '#3a405a',
    borderWidth: 1,
  },
  buttonBlendText: {
    color: '#3a405a',
    fontFamily: 'Karla',
    textAlign: 'center',
  },
});

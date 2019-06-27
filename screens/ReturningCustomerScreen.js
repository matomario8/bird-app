import React from 'react';
import { ActivityIndicator, Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class ReturningCustomerScreen extends React.Component {

  render() {
    return (
    <View style={styles.container}>
        <Text>Hey</Text>
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
});

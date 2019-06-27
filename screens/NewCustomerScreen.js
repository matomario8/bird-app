import React from 'react';
import { ScrollView, Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FancyTextField from '../components/FancyTextField';

export default class NewCustomerScreen extends React.Component {

  render() {
      return (
        <ScrollView contentContainerStyle={styles.container}>
          
          <FancyTextField label="First Name"/>
          <FancyTextField label="Last Name"/>
          <FancyTextField label="Email"/>
          <FancyTextField label="Phone"/>
          <Text style={{fontWeight: 'bold', alignSelf: 'flex-start',}}>Address Information</Text>
          <FancyTextField label="Address"/>
          <FancyTextField label="City"/>
          <FancyTextField label="State"/>
        </ScrollView>
      );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
});

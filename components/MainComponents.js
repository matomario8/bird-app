import React from 'react';
import { View, Image, Text, Button, StyleSheet } from 'react-native';

export default class Header extends React.Component {


  render() {
    let headerBrand = require('../assets/bird-logo2.png');
    if(this.props.fontLoaded) {
      return (
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>
            Bird Saddle Fitting
          </Text>
          <Image 
            source={headerBrand}
            style={styles.logo}>
          </Image>
        </View>
      );
    } 
    return <View style={styles.headerContent}></View>
  }
}

const styles = StyleSheet.create({
    headerContent: {
      height: "100%",
      width: "100%",
      padding: 5,
      backgroundColor: "#ffffff",
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: 0,
      elevation: 2,
      //iOS only
      shadowColor: 'black',
      shadowOffset: {width: 10,  height: 10,},
      shadowOpacity: 1.0,
    },
    headerText: {
      fontFamily: 'Lobster',
      fontSize: 30,
    },
    logo: {
      //resizeMode: "contain",
      height: "100%",
      width: undefined,
      aspectRatio: 1,
      borderRadius: 15,
      borderWidth: 3,
      borderColor: '#473729',
    }
});


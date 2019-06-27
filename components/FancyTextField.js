import React from 'react';
import { Image, Text, TextInput, StyleSheet } from 'react-native';

export default class FancyTextField extends React.Component {

	render() {
		return (
			<TextInput 
				placeholder={this.props.label}
				style={styles.input} 
				onFocus={() => {}}/>
		);
	}
}

const styles = StyleSheet.create({
	input: {
		fontFamily: 'Roboto',
		padding: 5,
		width: '100%',
		maxWidth: 320,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#C2C2C2',
		marginTop: 3,
		marginBottom: 3,
	}
});
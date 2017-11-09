/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// react-native run-ios

import React, { Component } from 'react';
import { Platform, 
		StyleSheet, 
		Text, 
		View, 
		Button, 
		TouchableHighlight, 
		Image, 
		Kaese 
	} from 'react-native';

const instructions = Platform.select({
	ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
	android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component {
	render() {
		let pic = {
			uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
		};
		return (
			<View style={styles.container}>
				<Kaese />
				<Image source={pic} style={{ width: 193, height: 110 }} />
				<TouchableHighlight 
					backgroundColor="#12A4A4" 
					underlayColor="#12A4A4" 
					onPress={() => {}}>  
				</TouchableHighlight>
				<Text style={styles.command}>Click Morty</Text>
			</View>
		);
	}
}
class Kaese extends Component {
	constructor(props) {
		super(props);
		this.state = {count:1};
	}
	onclick(type){
		this.setState(prevState => {
		   return {count: type=='add' ? prevState.count+1: prevState.count-1}
		});
	}
	render() {
		return (
		  <div>
			Count: {this.state.count}
			<br/>
			<div style={{marginTop: '100px'}}/>
			<input type='button' onClick={this.onclick.bind(this, 'add')} value='Inc'/>
			<input type='button' onClick={this.onclick.bind(this, 'sub')} value='Dec'/>
		   </div>
		 )
	   }
	}
	ReactDOM.render(
		<App />,
		document.getElementById('container')
	  );	

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#12A4A4'
	},
	welcome: {
		fontSize: 40,
		textAlign: 'center',
		margin: 10,
		fontWeight: '600',
		fontStyle: 'italic',
		fontFamily: 'Times New Roman'
	},
	command: {
		fontSize: 20,
		textAlign: 'center'
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});

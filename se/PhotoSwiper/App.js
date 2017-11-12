/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// react-native run-ios

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Swiper extends Component {
  render() {
    return (
      <View>
      <Counter/>
      <Button 
        title="Don't touch!" 
        onPress={() => {this.setState({value:10})}
          }
        />
      </View>
    );
  }
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {value:0}
  }
  render() {
    let value = this.state.value; 
    return (
        <Text style={style.valueStyle}>
        {value}
        </Text>
    );
  }
}

const style = StyleSheet.create ({
valueStyle: {
  fontSize: 40,
  textAlign: 'center',
  margin: 10,
  fontWeight: '600',
  fontFamily: 'Times New Roman',
  backgroundColor: '#12A4A4',  
}
}
);

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
      </View>
    );
  }
}

class Counter extends Component {
  constructor(props){
    super(props);
    this.state = {value:0, valueLeft: 0, valueRight: 0}
  }
  render() {
    let value = this.state.value; 
    let valueLeft = this.state.valueLeft;
    let valueRight = this.state.valueRight;
    return (
        <View>
            <Text style={style.valueStyle}> 
          {value}
          </Text>
              <Button 
                title="Meow" 
                onPress={() => {this.setState({value: value+1})}
               }
              />
          <Text style={style.valueStyle}> 
          {valueLeft}
          </Text>
              <Button 
                title="Left" 
                onPress={() => {this.setState({valueLeft: valueLeft+2})}
               }
              />
           <Text style={style.valueStyle}>
          {valueRight}
          </Text>
              <Button 
               title="Right" 
               onPress={() => {this.setState({valueRight: valueRight+3})}
              }
              />
        </View>
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

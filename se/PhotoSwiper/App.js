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
      <View style= {{flex: 1, 
                     flexDirection: 'column'}}>
        <View style= {{flex: 1, 
                       flexDirection: 'row'}}>
            <Text style={style.valueStyle}> 
              {valueLeft}
            </Text>
            <Text style={style.valueStyle}> 
              {value}
            </Text>
            <Text style={style.valueStyle}>
              {valueRight}
            </Text>
        </View>
        <View style= {{flex: 1, 
                       flexDirection: 'row',
                       justifyContent: 'center',
                       alignItems: 'center',
                       marginLeft: 50,
                       marginRight: 50,
                       marginTop: 600}}>
            <Button 
                title="Left" 
                onPress={() => {this.setState({valueLeft: valueLeft+1, value: value+1})}
               }
              />
            <Button 
               title="Right" 
               onPress={() => {this.setState({valueRight: valueRight+1, value: value+1})}
              }
              />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create ({
valueStyle: {
  fontSize: 40,
  textAlign: 'center',
  marginTop: 500,
  marginLeft: 10,
  marginRight: 10,
  fontWeight: '500',
  fontFamily: 'Times New Roman',
  backgroundColor: '#D3FEED', 
  height: 100,
  width: 100,
}
}
);

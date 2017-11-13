/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// react-native run-ios

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';

export default class Swiper extends Component {
  render() {
    const sources=[require('./TestPhotos/Photo01.jpg'), 
                   require('./TestPhotos/Photo02.jpg'), 
                   require('./TestPhotos/Photo03.jpg'), 
                   require('./TestPhotos/Photo04.jpg'), 
                   require('./TestPhotos/Photo05.jpg'), 
                   require('./TestPhotos/Photo06.jpg'),
                   require('./TestPhotos/Photo07.jpg'), 
                   require('./TestPhotos/Photo08.jpg'), 
                   require('./TestPhotos/Photo09.jpg'), 
                   require('./TestPhotos/Photo10.jpg'),
                   require('./TestPhotos/Photo11.jpg'), 
                   require('./TestPhotos/Photo12.jpg'), 
                   require('./TestPhotos/Photo13.jpg'), 
                   require('./TestPhotos/Photo14.jpg'), 
                   require('./TestPhotos/Photo15.jpg'), 
                   require('./TestPhotos/Photo16.jpg'), 
                   require('./TestPhotos/Photo17.jpg'), 
                   require('./TestPhotos/Photo18.jpg'), 
                   require('./TestPhotos/Photo19.jpg'), 
                   require('./TestPhotos/Photo20.jpg'), 
                   require('./TestPhotos/Photo21.jpg'), 
                   require('./TestPhotos/Photo22.jpg'), 
                   require('./TestPhotos/Photo23.jpg'), 
                   require('./TestPhotos/Photo24.jpg'), 
                   require('./TestPhotos/Photo25.jpg'), 
                   require('./TestPhotos/Photo26.jpg'), 
                   require('./TestPhotos/Photo27.jpg'), 
                   require('./TestPhotos/Photo28.jpg'), 
                   require('./TestPhotos/Photo29.jpg'), 
                   require('./TestPhotos/Photo30.jpg'),
                   require('./TestPhotos/Photo31.jpg'),
                   require('./TestPhotos/Photo32.jpg'),
                   require('./TestPhotos/Photo33.jpg'),
                   require('./TestPhotos/Photo34.jpg'),
                   require('./TestPhotos/Photo35.jpg'),
                   require('./TestPhotos/Photo36.jpg'),
                   require('./TestPhotos/Photo37.jpg'),
                   require('./TestPhotos/Photo38.jpg'),
                   require('./TestPhotos/Photo39.jpg'),
                   require('./TestPhotos/Photo40.jpg'),
                   require('./TestPhotos/Photo41.png'),
                   require('./TestPhotos/Photo42.jpg'),
                   require('./TestPhotos/Photo43.png'),
                   require('./TestPhotos/Photo44.jpg'),
                   require('./TestPhotos/Photo45.jpg'),
                   require('./TestPhotos/Photo46.jpg'),
                   require('./TestPhotos/Photo47.jpg'),
                   require('./TestPhotos/Photo48.jpg'),
                   require('./TestPhotos/Photo49.jpg'),
                   require('./TestPhotos/Photo50.jpg')]
    
    return (
      <View>
      <Image source={sources[1]} />
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

/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

// react-native run-ios

import React, { Component } from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class Kimera extends Component {
  constructor(props){
    super(props);
    this.state = {counter:0, 
                  counterLeft: 0, 
                  counterRight: 0,
                  rightFolder: [],
                  leftFolder: [],
                  sources: [
                    require('./TestPhotos/Photo02.jpg'), 
                    require('./TestPhotos/Photo01.jpg'), 
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
                    require('./TestPhotos/Photo50.jpg')],
                  myText:'Swipe me!',
                  gestureName: 'none',
                  backgroundColor: '#F4D03F',
                  index: 0}
  }
  onSwipeLeft(gestureState) {
    this.setState({myText: 'Your picture is in left folder'});
  }
  moveLeft (counter,counterLeft) {
    this.setState({counterLeft: counterLeft+1, counter: counter+1})
    this.setState({leftFolder: this.state.leftFolder.concat(this.state.sources[this.state.index])})
    this.state.sources.splice(this.state.index, 1)    
  }
  onSwipeRight(gestureState) {
    this.setState({myText: 'Your picture is in right folder'});
  }
  moveRight (counter,counterRight) {
    this.setState({counterRight: counterRight+1, counter: counter+1}) 
    this.setState({rightFolder: this.state.rightFolder.concat(this.state.sources[this.state.index])})
    this.state.sources.splice(this.state.index, 1)
  }
  onSwipeDown(gestureState) {
    this.setState({myText: 'Your picture will stay in the original folder'});
  }
  skip (counter) {
    this.setState({counter: counter+1, index: (this.state.index + 1) % this.state.sources.length})
  }

onSwipe(gestureName, gestureState) {
  const {SWIPE_LEFT, SWIPE_RIGHT, SWIPE_DOWN} = swipeDirections;
  this.setState({gestureName: gestureName});
  switch (gestureName) {
    case SWIPE_LEFT:
      this.setState({backgroundColor: '#3FF47B'});
      break;
    case SWIPE_DOWN:
      this.setState({backgroundColor: '#F4523F'});
      break;
    case SWIPE_RIGHT:
      this.setState({backgroundColor: '#703FF4'});
      break;
  }
}

  render() {
    let counter = this.state.counter;  
    let counterLeft = this.state.counterLeft;
    let counterRight = this.state.counterRight;

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
             
    return (
      <View style= {{flex: 1, 
                     flexDirection: 'column'}}>

        <GestureRecognizer
            onSwipe={(direction, state) => this.onSwipe(direction, state)}
            onSwipeLeft={(state) => this.moveLeft(counter,counterLeft)}
            onSwipeDown={(state) => this.skip(counter)}
            onSwipeRight={(state) => this.moveRight(counter,counterRight)}
            config={config}
            style={{
              flex: 1,
              backgroundColor: this.state.backgroundColor
            }}
            >
            <Image source={this.state.sources[this.state.index]} 
                   style={style.photoStyle}
                   resizeMode='contain'/>
            <Text>
              {this.state.myText}
              </Text>
            <Text> 
              onSwipe callback received gesture: {this.state.gestureName}
              </Text>
            <View style= {{flex: 1, 
                           flexDirection: 'row'}}>
            <Text style={style.valueStyle}> 
              {counterLeft}
              </Text>
            <Text style={style.valueStyle}> 
              {counter}
              </Text>
            <Text style={style.valueStyle}>
              {counterRight}
              </Text>
        </View>
        <View style= {{flex: 1, 
                       flexDirection: 'row',
                       justifyContent: 'center',
                       alignItems: 'center',
                       marginLeft: 5,
                       marginRight: 5,
                       marginTop: 10}}>
            <Button 
                title="Left folder" 
                onPress={() => {this.moveLeft(counter,counterLeft)}}      
              />
            <Button 
                title="Skip" 
                onPress={() => {this.skip(counter)}}
              />
            <Button 
                title="Right folder" 
                onPress={() => {this.moveRight(counter,counterRight)}}  
              />
        </View>
        </GestureRecognizer>

   
      </View>
    );
  }
}

const style = StyleSheet.create ({
valueStyle: {
  fontSize: 40,
  textAlign: 'center',
  marginTop: 60,
  marginLeft: 10,
  marginRight: 10,
  fontWeight: '500',
  fontFamily: 'Times New Roman',
  backgroundColor: '#D3FEED', 
  height: 100,
  width: 100,
},
photoStyle: {
  marginTop: 60,
  marginRight: 5,
  width: 400,
  height: 400
},
}
);

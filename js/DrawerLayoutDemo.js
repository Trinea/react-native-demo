/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text, View, DrawerLayoutAndroid, ProgressBarAndroid,
} from 'react-native';

export default class DrawerLayoutDemo extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        renderNavigationView={() =>
          <View>
            <Text>Menu 1</Text>
            <Text>Menu 2</Text>
            <Text>Menu 3</Text>
          </View>}>
         <Text>Swipe Left</Text>
       </DrawerLayoutAndroid>
     );
   }
}

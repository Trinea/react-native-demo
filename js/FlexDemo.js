/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component, } from 'react';
import {
  StyleSheet,
  Image, Text, View,
} from 'react-native';

export default class FlexDemo extends Component {
  render() {
    return (
      <View style={styles.row}>
        <Image
          source={{uri: 'http://p.codekk.com/images/weixin-codekk-160.jpg'}}
          style={styles.image}
        />
        <View style={styles.text}>
          <Text style={styles.title}>
            codekk
          </Text>
          <Text style={styles.subtitle}>
            Focus on Android
          </Text>
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    margin: 40
  },

  image: {
    width: 120,
    height: 120,
    marginRight: 10
  },

  text: {
    flex: 1,
    justifyContent: 'center'
  },

  title: {
    fontSize: 11,
    fontWeight: 'bold'
  },

  subtitle: {
    fontSize: 10
  },
});

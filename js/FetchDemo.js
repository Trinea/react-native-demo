/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet,
  Text, View
} from 'react-native';

var REQUEST_URL = 'https://www.baidu.com';

export default class FetchDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '获取中……',
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.text())
      .then(function(responseData) {
        console.log('responseData is :' + responseData);
        this.setState({
          text: responseData,
          loaded: true,
        });
      }.bind(this))
      .catch((error) => {
        console.warn(error);
      })
      .done();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.text}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

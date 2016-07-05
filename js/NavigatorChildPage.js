/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, {Component} from 'react';
import {
  AppRegistry, StyleSheet,
  Text, View, BackAndroid
} from 'react-native';

var iNavigator;
BackAndroid.addEventListener('hardwareBackPress', function() {
  if(iNavigator == null){
    return false;
  }
  if(iNavigator.getCurrentRoutes().length === 1){
    return false;
  }
  iNavigator.pop();
  return true;
});

export default class NavigatorChildPage extends Component {
  constructor(props) {
    super(props);

    iNavigator = this.props.navigator;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Back to NavigatorPage Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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

module.exports = NavigatorChildPage;

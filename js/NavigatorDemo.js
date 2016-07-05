/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
  AppRegistry, StyleSheet,
  Text, View, Navigator, TouchableOpacity
} from 'react-native';

import NavigatorChildPage from './NavigatorChildPage';

var iNavigator;

export default class NavigatorDemo extends Component {
  configureScenceAndroid() {
    return Navigator.SceneConfigs.FadeAndroid;
  }

  renderSceneAndroid(route, navigator) {
    iNavigator = navigator;
    switch (route.id) {
      case 'Main':
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={ () => iNavigator.push({title:'NavigatorChildPage',id:'NavigatorChildPage'}) }>
              <Text style={styles.welcome}>Click Go To NavigatorChildPage Page</Text>
            </TouchableOpacity>
          </View>
        )
        break;
      case 'NavigatorChildPage':
        return (<NavigatorChildPage navigator={navigator} route={route}/>);
        break;
    }
  }

  render() {
    var renderScene = this.renderSceneAndroid;
    var configureScence = this.configureScenceAndroid;
    return (
      <Navigator
        debugOverlay={false}
        initialRoute={{ title: 'Main', id:'Main'}}
        configureScence={{configureScence}}
        renderScene={renderScene}/>
    );
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

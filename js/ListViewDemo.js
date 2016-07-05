/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  Text, View, ListView
} from 'react-native';

export default class ListViewDemo extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);

    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    this.state.dataSource = this.state.dataSource.cloneWithRows(
      ['A', 'B', 'C', 'D', 'E', 'F', 'G',
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'A', 'B', 'C', 'D', 'E', 'F', 'G',
      'A', 'B', 'C', 'D', 'E', 'F', 'G']);
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Text>{rowData}</Text>}
      />
    );
  }
};

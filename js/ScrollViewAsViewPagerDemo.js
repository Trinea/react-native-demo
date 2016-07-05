/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
   AppRegistry,
   Text, View, ScrollView, TouchableOpacity,
} from 'react-native';

export default class ScrollViewAsViewPagerDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      height: 0,
    };

    (this: any).adjustCardSize = this.adjustCardSize.bind(this);
  }

  onClick(page) {
    this.scrollView.scrollTo({x: this.state.width * (page - 1)});
  }

  adjustCardSize(e: any) {
    this.setState({
      width: e.nativeEvent.layout.width,
      height: e.nativeEvent.layout.height,
    });
  }

  render() {
    var {width, height} = this.state;
    return (
      <View style={styles.flex1}>
        <ScrollView
          ref={scrollView => { this.scrollView = scrollView; }}
          style={styles.flex1}
          horizontal={true}
          pagingEnabled={true}
          scrollsToTop={false}
          scrollEventThrottle={100}
          removeClippedSubviews={true}
          automaticallyAdjustContentInsets={false}
          directionalLockEnabled={true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onLayout={this.adjustCardSize}>
          <View style={[styles.page, {width, height}]}>
            <Text>ScrollPage 1</Text>
          </View>
          <View style={[styles.page, {width, height}]}>
            <Text>ScrollPage 2</Text>
          </View>
          <View style={[styles.page, {width, height}]}>
            <Text>ScrollPage 3</Text>
          </View>
       </ScrollView>
       <View style={styles.footerMenu}>
          <TouchableOpacity onPress={() => this.onClick(1)}>
            <Text>Tab 1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onClick(2)}>
            <Text>Tab 2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.onClick(3)}>
            <Text>Tab 3</Text>
          </TouchableOpacity>
       </View>
     </View>
   );
  }
}

var styles = {
  flex1: {
    flex: 1,
  },
  page: {
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    height: 40,
    paddingHorizontal: 40,
  },
}

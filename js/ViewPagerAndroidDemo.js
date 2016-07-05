/**
 * React Native Demo
 * https://github.com/trinea/react-native-demo
 * @Trinea
 */
import React, { Component } from 'react';
import {
   AppRegistry,
   Text, View, ViewPagerAndroid, TouchableOpacity,
} from 'react-native';

export default class ViewPagerAndroidDemo extends Component {
  constructor(props) {
    super(props);
  }

   onClick(page) {
     this.viewPager.setPage(page - 1);
   }

   render() {
     return (
       <View style={styles.flex1}>
         <ViewPagerAndroid
           ref={viewPager => { this.viewPager = viewPager; }}
           style={styles.flex1}
           initialPage={1}
           pageMargin={0}>
           <View style={styles.page}>
             <Text>Page 1</Text>
           </View>
           <View style={styles.page}>
             <Text>Page 2</Text>
           </View>
           <View style={styles.page}>
             <Text>Page 3</Text>
           </View>
         </ViewPagerAndroid>
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

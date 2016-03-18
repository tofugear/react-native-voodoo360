'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

const IMGS = [
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img01.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img02.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img03.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img04.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img05.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img06.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img07.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img08.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img09.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img10.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img11.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img12.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img13.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img14.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img15.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img16.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img17.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img18.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img19.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img20.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img21.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img22.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img23.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img24.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img25.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img26.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img27.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img28.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img29.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img30.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img31.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img32.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img33.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img34.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img35.jpg",
"https://d38cdkbh6wd7m4.cloudfront.net/360/CFWB5005-B_SLB/Lv2/img36.jpg"
];
const {height, width} = Dimensions.get('window');

import RCTVoodoo360 from 'react-native-voodoo360';

class Main extends Component {
  render() {
    return (
      <View style={{width: width, height: height}}>
        <Text>Hello World!</Text>
        <RCTVoodoo360 sources={IMGS} style={{width: width, height: 500}} />
        <Text>Text below</Text>
      </View>
    );
  }
};

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   images: {
//     flex: 1,
//     // alignItems: 'flex-start',
//     flexDirection: 'row',
//   },
//   view: {
//     width: width,
//     height: height,
//     position: 'absolute'
//   },
//   image:{
//     width: width,
//     height: height
//   },
//   prev:{
//     position: 'absolute', 
//     left: 10, 
//     top: height/2,
//     width: 50,
//     height: 50  
//   },
//   next:{
//     position: 'absolute', 
//     right: 10,
//     top: height/2,
//     width: 50,
//     height: 50
//   },
// });

AppRegistry.registerComponent('example', () => Main);
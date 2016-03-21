'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

import Voodoo360 from './Voodoo360';

const IMGS = [
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img01.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img02.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img03.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img04.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img05.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img06.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img07.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img08.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img09.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img10.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img11.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img12.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img13.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img14.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img15.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img16.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img17.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img18.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img19.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img20.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img21.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img22.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img23.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img24.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img25.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img26.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img27.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img28.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img29.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img30.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img31.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img32.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img33.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img34.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img35.jpg",
"https://omnitech-demo-static360.azureedge.net/360/CFWB5005-B_SLB/Lv2/img36.jpg"
// "/storage/emulated/0/Download/360/01.jpg",
// "/storage/emulated/0/Download/360/02.jpg",
// "/storage/emulated/0/Download/360/03.jpg",
// "/storage/emulated/0/Download/360/04.jpg",
// "/storage/emulated/0/Download/360/05.jpg",
// "/storage/emulated/0/Download/360/06.jpg",
// "/storage/emulated/0/Download/360/07.jpg",
// "/storage/emulated/0/Download/360/08.jpg",
// "/storage/emulated/0/Download/360/09.jpg",
// "/storage/emulated/0/Download/360/10.jpg",
// "/storage/emulated/0/Download/360/11.jpg",
// "/storage/emulated/0/Download/360/12.jpg",
// "/storage/emulated/0/Download/360/13.jpg",
// "/storage/emulated/0/Download/360/14.jpg",
// "/storage/emulated/0/Download/360/15.jpg",
// "/storage/emulated/0/Download/360/16.jpg",
// "/storage/emulated/0/Download/360/17.jpg",
// "/storage/emulated/0/Download/360/18.jpg",
// "/storage/emulated/0/Download/360/19.jpg",
// "/storage/emulated/0/Download/360/20.jpg",
// "/storage/emulated/0/Download/360/21.jpg",
// "/storage/emulated/0/Download/360/22.jpg",
// "/storage/emulated/0/Download/360/23.jpg",
// "/storage/emulated/0/Download/360/24.jpg",
// "/storage/emulated/0/Download/360/25.jpg",
// "/storage/emulated/0/Download/360/26.jpg",
// "/storage/emulated/0/Download/360/27.jpg",
// "/storage/emulated/0/Download/360/28.jpg",
// "/storage/emulated/0/Download/360/29.jpg",
// "/storage/emulated/0/Download/360/30.jpg",
// "/storage/emulated/0/Download/360/31.jpg",
// "/storage/emulated/0/Download/360/32.jpg",
// "/storage/emulated/0/Download/360/33.jpg",
// "/storage/emulated/0/Download/360/34.jpg",
// "/storage/emulated/0/Download/360/35.jpg",
// "/storage/emulated/0/Download/360/36.jpg",
];
const {height, width} = Dimensions.get('window');

import RCTVoodoo360 from 'react-native-voodoo360';

class Main extends Component {
  render() {
    return (
      <View style={{width: width, height: height}}>
        <RCTVoodoo360 sources={IMGS} style={{width: width, height: 500}} />
        {/*<Voodoo360 images={IMGS} />*/}
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
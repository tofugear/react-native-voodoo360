import React, {
  AppRegistry,
  View,
  StyleSheet,
  Text
} from 'react-native'

import { Voodoo360fs } from 'react-native-voodoo360'

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
];


const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	voodoo360: {
		flex: 1
	},
	stopButton: {
		position: 'absolute',
		right: 15,
		top: 15
	}
})

let app = React.createClass({
	getInitialState(){
		return {
			show: true
		}
	},

	handleStopDownload(){
		console.log("handleStopDownload")
		this.setState({show: false})
	},

	render(){
		let voodoo360View
		if (this.state.show){
			voodoo360View = 
				<Voodoo360fs
					style={styles.voodoo360}
					imageURIs={IMGS}
					resizeMode={'CENTER_CROP'}
					downloadText={'Downloading'}
					folderName={'CFWB5005-B_SLB'}
					onImagesLoaded={() => console.log("all loaded")}
					/>
		}
		return (
			<View style={styles.container}>
				{voodoo360View}
				<Text style={styles.stopButton} onPress={this.handleStopDownload}>Stop</Text>
			</View>
		)
	}
})

AppRegistry.registerComponent('voodoo360fs', () => app)

var React = require('react-native');
var TimerMixin = require('react-timer-mixin');

var {
  Dimensions,
  Image,
  PanResponder,
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} = React;

var SCREEN_WIDTH = Dimensions.get('window').width;
var SCREEN_HEIGHT = Dimensions.get('window').height;

// var hitareaStyle = __CONF__.PLATFORM === 'web' ? 'rgba(255,0,0,0.1)' : null;

var styles = StyleSheet.create({
  container: {
    flex: 1
  //   width: '95%',
  //   height: '97.5%',
  //   marginLeft: '2.5%',
  //   marginTop: '2.5%',
  //   backgroundColor: 'white'
  },
  responder: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: '#FFFFFF'
  },
  // mainPhotoImage: {
  //   width: '100%',
  //   height: '100%',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center center',
  //   backgroundSize: 'cover'
  //   // position: 'absolute',
  //   // left: 0,
  //   // marginLeft: -170
  // },
  // mainPhotoReady: {
  //   backgroundColor: 'white'
  // },
  btnPrev: {
    position: 'absolute',
    top: SCREEN_HEIGHT/2,
    left: 10,
    width: 50,
    height: 50
  },
  btnNext: {
    position: 'absolute',
    top: SCREEN_HEIGHT/2,
    right: 10,
    width: 50,
    height: 50
  },
  btnClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 32,
    height: 32,
  },
  btnZoom: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 32,
    height: 32,
  },
  caption: {
    flex: 1,
    // backgroundColor: '#ff0000',
    alignSelf: 'center',
    position: 'absolute',
    width: 50,
    textAlign: 'center',
    bottom: 10,
    left: SCREEN_WIDTH/2,
    marginLeft: -25,
    color: 'black',
    fontSize: 10
  },
  // zoomedContainer: {
  //   position: 'absolute',
  //   top: 0,
  //   left: SCREEN_WIDTH,
  //   width: SCREEN_WIDTH,
  //   height: SCREEN_HEIGHT,
  //   backgroundColor: '#FF0000'
  // },
  // zoomedContainerShow: {
  //   left: 0
  // }
});

var Voodoo360 = React.createClass({
  mixins: [TimerMixin],
  touchX: null,
  k: 1, // distance panned
  elasticTimer: null,
  timer: null,

  getInitialState() {
    return {
      index: 0,
      imagesLoaded: [],
      mode: '360',
      ready: false,
    };
  },

  componentDidMount() {
    // let $container = $(this.refs.container.getDOMNode());
    // console.log('Voodoo360.componentDidMount');
    // let container = this.refs.container;
    // let $zoomed = $(this.refs.zoomed.getDOMNode());

    // $zoomed.panzoom({
    //   contain: 'invert',
    //   maxScale: 1,
    // });

    // if (this.props.zooms) {
    //   let img = new Image();
    //   img.onload = () => {
    //     console.log(img.src);
    //     // let $img = $(img);
    //     let matrixX = -((img.width - container.width)/2);
    //     let matrixY = -((img.height - container.height)/4);

    //     console.log("setMatrix: ", [1,0,0,1,matrixX,matrixY]);
    //     // $zoomed.panzoom("setMatrix", [1,0,0,1,matrixX,matrixY]);
    //   };

    //   img.src = this.props.zooms[0];
    // }

    // this.props.images.forEach((image, index) => {
    //   let img = new Image();
    //   img.onload = () => {
    //     console.log('loading...', index);
    //     let newState = {
    //       imagesLoaded: this.state.imagesLoaded + 1
    //     }

    //     if (index === this.props.images.length - 1) {
    //       newState.ready = true;
    //     }

    //     this.setState(newState);
    //   };
    //   img.src = image;
    // });

    // this.props.images.forEach((image, index) => {
      // console.log('Voodoo360.componentDidMount.'+index, image);
      // let img = <Image source={{uri: image}} onLayout={() => { console.log('loading...', index); }} />;
      // img.onload = () => {
      //   console.log('loading...', index);
      //   let newState = {
      //     imagesLoaded: this.state.imagesLoaded + 1
      //   }

      //   if (index === this.props.images.length - 1) {
      //     newState.ready = true;
      //   }

      //   this.setState(newState);
      // };
      // img.src = image;
    // });
    // this.props.images.forEach((image, index) => {
    //   this.setState({
    //     index: index
    //   });
    // });
    this._preloader();
    // this.setState({
    //   ready: true
    // });
  },

  componentWillMount() {
    this._panResponder = PanResponder.create({
      onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder,
      onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder,
      onResponderTerminationRequest: this._handleResponderTerminationRequest,
      onPanResponderGrant: this._handlePanResponderGrant,
      onPanResponderMove: this._handlePanResponderMove,
      onPanResponderRelease: this._handlePanResponderEnd,
      onPanResponderTerminate: this._handlePanResponderEnd,
      // onStartShouldSetPanResponderCapture: (evt) => true,
      // onMoveShouldSetPanResponderCapture: (evt) => true,
    });
  },

  _preloader() {
    this.timer = this.setTimeout( () => {
      if (this.state.index < this.props.images.length-1) {
        this.setState({
          index: this.state.index+1
        })
        this._preloader();
      } else {
        this.clearTimeout(this.timer);
        this.setState({
          index: 0,
          ready: true
        });
      }
    }, 500);
  },

  // Ask to be the responder:
  _handleStartShouldSetPanResponder(evt, gestureState) {
    return true;
  },

  _handleMoveShouldSetPanResponder(evt, gestureState) {
    return true;
  },

  _handleResponderTerminationRequest(evt, gestureState) {
    return true;
  },

  _handlePanResponderGrant(evt, gestureState) {
    this.clearInterval(this.elasticTimer);
  },

  _handlePanResponderMove(evt, gestureState) {
    let x = gestureState.moveX;
    let dx = Math.abs(gestureState.dx);
    let dy = Math.abs(gestureState.dy);
    let vx = gestureState.vx;
    vx = vx > 0 ? Math.ceil(vx) : Math.floor(vx);
    // console.log('move', x, dx, dy, vx);
    if (/*dx > dy*2 &&*/ dx > this.k) {
      // this.step(this.touchX > x ? 1 : -1);
      // console.log('moving', vx);
      this.step(-1 * vx);
      // this.touchX = x;
    }
  },

  _handlePanResponderEnd(evt, gestureState) {
    // console.log('velocity', gestureState.vx);
    let vx = gestureState.vx;
    let total = Math.abs(Math.ceil(vx*10/2));
    vx = vx > 0 ? Math.ceil(vx) : Math.floor(vx);

    this.clearInterval(this.elasticTimer);
    this.elasticTimer = this.setInterval( () => {
      if (total>0) {
        this.step(-1 * vx);
        total--;
      } else {
        this.clearInterval(this.elasticTimer);
      }
    }, 25);
    // this.step(gestureState.vx)
    // this.touchX = null;
  },

  step(step) {
    let index = this._getNextStep(step);
    this.setState({
      index: index
    });
    // this.refs.voodooImage.setNativeProps({
    //   source: { uri: this.props.images[index]}
    // });
  },

  zoom() {
    let newMode = this.state.mode === 'zoom' ? '360' : 'zoom';
    this.setState({
      mode: newMode
    });
  },

  close() {
    this.props.close();
  },

  animate() {
    let x = event.touches[0].clientX;
    if (Math.abs(x - this.touchX) > this.k) {
      this.step(this.touchX > x ? 1 : -1);
      this.touchX = x;
    }
  },

  _getNextStep(step) {
    let currentStep = this.state.index;
    let total = this.props.images && this.props.images.length || 0;
    let nextStep = (step > 0)
      ? (currentStep < total-1 ? currentStep + step : 0) // increment
      : (currentStep > 0 ? currentStep + step : (total-1) + step) // decrement
    ;
    return nextStep;
  },

  _getNextImage(step) {
    return this.props.images[this._getNextStep(step)];
  },

  // returns a string of multiple background images
  _generateCssBackgroundImageUrls(images) {
    let str = '';
    let activeImage = images[this.state.index];
    str = `url("${activeImage}")`;
    return str;
  },

  _generateCssBackgroundImageProp(images) {
    let value = this._generateCssBackgroundImageUrls(images);
    return value ? { backgroundImage: value } : {};
  },

  // _onImageLoad() {
  //   console.log('_onImageLoad', arguments);
  // },

  _handleImageLoaded(data) {
    if (this.state.ready) return;

    let imagesLoaded = this.state.imagesLoaded
    if (imagesLoaded.indexOf(data.url) === -1) {
      imagesLoaded.push(data.url);
    }
    let state = { imagesLoaded: imagesLoaded };
    if (this.state.imagesLoaded.length >= this.props.images.length) {
      Object.assign(state, {ready: true});
    }
    this.setState(state);
  },

  render() {
    // let voodoo360VisibleStyle = {opacity: (this.state.ready ? 1 : 0)};
    let voodoo360VisibleStyle = { flex: 1, opacity: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT };
    // console.log('voodoo360VisibleStyle:', voodoo360VisibleStyle);
    // let voodoo360ImageStyles = Object.assign({}, voodoo360VisibleStyle, styles.mainPhotoImage, this._generateCssBackgroundImageProp(this.props.images));
    // let voodoo360ImageStyles = Object.assign({}, voodoo360VisibleStyle, styles.mainPhotoImage, this._generateCssBackgroundImageProp());
    let voodoo360ImageStyles = [voodoo360VisibleStyle];
    // let voodoo360Image = this.props.images[this.state.index];
    let caption = `${this.state.index+1} / ${this.props.images.length}`;

    // console.log(this.props.images.length);
    // let start = this.state.index;
    // let end = this.state.index > 20 ? null : this.state.index+16;
    // let images = this.props.images;
    // let prefetchImages = images.map((image, index) => {
    //   return <NetworkImage key={index} image={image} index={index} active={index === this.state.index} onReady={this._handleImageLoaded} />
    // });
    // let numImages = 2;
    // let prefetchImages = []
    // for (var i=0; i<numImages; i++) {
    //   let index = i;
    //   let image = this.props.images[index];
    //   prefetchImages.push(() => {
    //     return <NetworkImage key={index} image={image} index={index} activeIndex={this.state.index} />
    //   });
    // }
    // console.log('Voodoo360.index.'+this.state.index);

    return (
      <View style={styles.container} ref="container">
        {/*!this.state.ready && prefetchImages*/}
        <View style={styles.responder} {...this._panResponder.panHandlers}>
          {/*<Image ref="voodooImage" source={{uri: voodoo360Image}} resizeMode={Image.resizeMode.cover} style={voodoo360ImageStyles} />*/}
          {/*prefetchImages*/}
          <NetworkImage image={this.props.images[this.state.index]} index={this.state.index} active={true} />
          {/*this.state.ready && <NetworkImage image={this._getNextImage(-1)} index={this.state.index} active={false} />*/}
          {/*this.state.ready && <NetworkImage image={this._getNextImage(1)} index={this.state.index} active={false} />*/}
          {/*this.state.ready && <NetworkImage image={this._getNextImage(-2)} index={this.state.index} active={false} />*/}
          {/*this.state.ready && <NetworkImage image={this._getNextImage(2)} index={this.state.index} active={false} />*/}
        </View>
        {this.state.ready
          ? <View>
              <Text style={styles.caption}>{caption}</Text>
            </View>
          : <View>
              {/*<img src="assets/shared/svg-loaders/oval.svg"/>*/}
              <Text className="loading-message">{`Loading ${this.state.imagesLoaded.length} / ${this.props.images.length}`}</Text>
            </View>
        }
      </View>
    );
  }
});

class NetworkImage extends React.Component {

  _loadEventFired(e,eventName) {
    // console.log(eventName, e, this.props.image);
    eventName === 'onLoad' && this.props.onReady && this.props.onReady({index: this.props.index, url: this.props.image});
  }

  render() {
    let imageStyles = { width: SCREEN_WIDTH, height: SCREEN_HEIGHT, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, opacity: this.props.active ? 1 : 0 };
    return (
      <Image source={{uri: this.props.image}} style={imageStyles} resizeMode={Image.resizeMode.cover} />
    );
  };
}

module.exports = Voodoo360;

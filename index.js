
import React from 'react';
import {
  requireNativeComponent,
  PropTypes,
  View
} from 'react-native';

export default class Voodoo360 extends React.Component {
  static propTypes = {
    ...View.propTypes,
    sources: PropTypes.arrayOf(PropTypes.string),
    // source: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this._onChange = this._onChange.bind(this);
    this.state = {
      index: 0
    }
  }

  _onChange(event){
    if (event && event.nativeEvent && event.nativeEvent.event == "indexChange"){
      let index = event.nativeEvent.index
      this.setState({index: index})
      if (this.props.onIndexChange){
        this.props.onIndexChange(index)
      }
    }
  }

  setNativeProps(nativeProps) {
  }

  render() {
    return <RCTVoodoo360 {...this.props} onChange={this._onChange}/>;
  }
}

const RCTVoodoo360 = requireNativeComponent('RCTVoodoo360', Voodoo360);

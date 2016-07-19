
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
  }

  setNativeProps(nativeProps) {
  }

  render() {
    return <RCTVoodoo360 {...this.props} />;
  }
}

const RCTVoodoo360 = requireNativeComponent('RCTVoodoo360', Voodoo360);

# React Native Voodoo360
A 360 degree product image spin viewer for react native on android

## Installation
```sh
npm install react-native-voodoo360 --save
```

### Installation (Android)
```gradle
...
include ':react-native-voodoo360'
project(':react-native-voodoo360').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-voodoo360/android')
```

* In `android/app/build.gradle`

```gradle
...
dependencies {
    ...
    compile project(':react-native-voodoo360')
}
```

* register module (in MainActivity.java)

```java
import com.tofugear.voodoo360.*;  // <--- import

public class MainActivity extends Activity implements DefaultHardwareBackBtnHandler {
  ......
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    mReactRootView = new ReactRootView(this);

    mReactInstanceManager = ReactInstanceManager.builder()
      .setApplication(getApplication())
      .setBundleAssetName("index.android.bundle")
      .setJSMainModuleName("index.android")
      .addPackage(new MainReactPackage())
      .addPackage(new CountryPickerPackage())              // <------ add here
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "ExampleRN", null);

    setContentView(mReactRootView);
  }

  ......
}
```

### Screencasts
See [AndroidCountryPicker](https://github.com/roomorama/AndroidCountryPicker)

## Usage

### Example
```js
var React = require('react-native');
var {
    StyleSheet,
    View,
    Image
} = React;

var CountryPicker = require('react-native-country-picker');
var Button = require('react-native-simple-button');

module.exports = React.createClass({
    getInitialState() {
        return { code: null };
    },

    getSelectedCountry() {
        var _this = this;
        CountryPicker.show(function(country){
            _this.setState({ code: country.code });
        });
    },

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.code}</Text>
                <Button onPress={this.getSelectedCountry.bind(this)}>
                    Launch Country Picker
                </Button>
            </View>
        );
    },
});


var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingVertical:150,
    }
});
```

### thanks
* Thanks to [roomorama](https://github.com/roomorama) for the [AndroidCountryPicker](https://github.com/roomorama/AndroidCountryPicker) Java Fragment code.

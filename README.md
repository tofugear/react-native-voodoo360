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
      .addPackage(new Voodoo360Package())              // <------ add here
      .setUseDeveloperSupport(BuildConfig.DEBUG)
      .setInitialLifecycleState(LifecycleState.RESUMED)
      .build();

    mReactRootView.startReactApplication(mReactInstanceManager, "ExampleRN", null);

    setContentView(mReactRootView);
  }

  ......
}
```
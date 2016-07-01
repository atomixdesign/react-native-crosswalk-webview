# react-native-crosswalk-webview


### Installation

Inside your react-native project run

```sh
$ npm install --save react-native-crosswalk
```


### Add it to your android project
In android/setting.gradle

```sh
...
include ':CrosswalkWebView', ':app'
project(':CrosswalkWebView').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-crosswalk')
```


### In android/build.gradle

```sh
...
allprojects {
    repositories {
        mavenLocal()
        jcenter()
        
        flatDir {             // <------ add this line
            dirs 'libs'       // <------ add this line
        }                     // <------ add this line
    }
}
```

### In android/app/build.gradle

```sh
...
dependencies {
  ...
    compile (name: "xwalk_core_library-17.46.448.10", ext: "aar")    // <--- add this line
    compile project(':CrosswalkWebView')    // <--- add this line
}
```

### Register Module (in MainActivity.java)

```sh
...
import com.atomix.react.crosswalk.webview.CrosswalkWebViewPackage;    // <--- add this line 
 
public class MainActivity extends ReactActivity {
  ......
 
  @Override
  protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
        new MainReactPackage(),
        new CrosswalkWebViewPackage(this)    // <--- add this line 
    );
  }
 
  ......
 
}
```


License
----

MIT




#!/bin/sh 
ver="17.46.448.10"
wget https://download.01.org/crosswalk/releases/crosswalk/android/maven2/org/xwalk/xwalk_core_library/${ver}/xwalk_core_library-${ver}.aar
unzip -j xwalk_core_library-${ver}.aar classes.jar
zip -d classes.jar javax\*
zip -r xwalk_core_library-${ver}.aar classes.jar
rm -f classes.jar
cp xwalk_core_library-${ver}.aar node_modules/react-native-crosswalk-android/libs/ 
cp xwalk_core_library-${ver}.aar android/app/libs
rm -f xwalk_core_library-${ver}.aar

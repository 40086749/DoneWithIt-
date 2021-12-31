/*
ReactNative Tutorial on using some of the core fundamentals/concepts of ReactNative

Using what has been covered already - EXPERIMENT
How much of an app can you build with it so far?

* REMEMBER - All components must be imported View, Text, Image, Touchable etc
*/


import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// View -> UIView (iOS)
export default function App() { //app is a function component
  console.log("App Executed");

  // function created to hold logic handlers for clicking the text.
  const handlePress = () => console.log("Text pressed");

  return ( // returning jsx expression
    <View style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Hello, ReactNative!</Text>
      <View style={styles.left}>
      <TouchableOpacity onPress={() => console.log("Image pressed")}>
      <Image source={{
        width: 200,
        height: 300,
        uri: "https://picsum.photos/200/300",
      }} />
        
      </TouchableOpacity>
        
      </View>
      <View>
        <Text>
          More Text here please
        </Text>
      </View>
      <StatusBar style="auto" />
    </View>
    // view is like a div and contains some style and text.
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: 'white', // named colours, RGB values, or hex values can be used to specify colours
    alignItems: 'center',
    justifyContent: 'center',
  },

  left: {
    position: 'absolute',
    top: 40,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});
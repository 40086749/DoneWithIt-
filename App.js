/*
ReactNative Tutorial on using some of the core fundamentals/concepts of ReactNative

Using what has been covered already - EXPERIMENT
How much of an app can you build with it so far?

* REMEMBER - All components must be imported View, Text, Image, Touchable etc
*/

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, 
  Button, 
  GestureResponderEvent, 
  Image, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View,
   } from 'react-native';

// View -> UIView (iOS)
export default function App() { //app is a function component
  console.log("App Executed");

  // prints the coordinates of X and Y to the console of where the user presses on screen
  const printCoordinates = (x:number, y:number) => {
    console.log("X = " + x + " Y = " + y);
  }

  const coordsEventPressHandler = (evt:GestureResponderEvent) => {
    var locX = evt.nativeEvent.locationX;
    var locY = evt.nativeEvent.locationY;
    printCoordinates(locX, locY);
  }

  // function created to hold logic handlers for clicking the text.
  /*const handlePress = () => console.log();
  printCoordinates();*/


  const pressImage = (e) => console.log("image Pressed", e);
  // the above line of code passes all PressEvents as parameters.
  // the function prints them to the console for us to choose one
  // I THINK e.pressEventFromList will print that named specific PressEvent to the console
  //  how do i get the coordinates from this??
  // e.g. console.log ("text", e.timeStamp) prints to the console the text and a timestamp of now.

  

  return ( // returning jsx expression
    <View style={styles.container}>
      <TouchableOpacity onPress={(coordEvt) => coordsEventPressHandler(coordEvt)}>
        <View style={styles.containerB}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
      </TouchableOpacity>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: 'white', // named colours, RGB values, or hex values can be used to specify colours
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerB: {
    flex: 8,
    backgroundColor: 'grey', // named colours, RGB values, or hex values can be used to specify colours
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

  // Later on in your styles..
  /* backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }, */
});
/*
ReactNative Tutorial on using some of the core fundamentals/concepts of ReactNative

Using what has been covered already - EXPERIMENT
How much of an app can you build with it so far?

* REMEMBER - All components must be imported View, Text, Image, Touchable etc
*/

import React, { useState } from 'react';
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

  // Master array created to house array created when user clicks element
  let masterClickArray = [];

  // prints the coordinates of X and Y to the console of where the user presses on screen
  const printCoordinates = (lx:number, ly:number, px:Number, py:number) => {
    console.log("locationX = " + lx + " locationY = " + ly + " pageX = " + px + " pageY = " + py);
  }

  const coordsEventPressHandler = (evt:GestureResponderEvent) => {
    var locX = evt.nativeEvent.locationX;
    var locY = evt.nativeEvent.locationY;
    var pageX = evt.nativeEvent.pageX;
    var pageY = evt.nativeEvent.pageY;
    printCoordinates(locX, locY, pageX, pageY);
  }


  /*  
  *   below takes in the click event
  *   registers click coordinates
  *   saves coordinates to array
  *   pushes to master array    
  */
  const registerCoordinatesToArray = (evt) => {
    var lx = evt.nativeEvent.locationX;
    var ly = evt.nativeEvent.locationY;
    var px = evt.nativeEvent.pageX;
    var py = evt.nativeEvent.pageY; 
    var coordinatesArray = [lx, ly, px, py]
    masterClickArray.push(coordinatesArray);
  }

  /*
  *   outputs masterClickArray to console
  */
  const printCoordinatesArray = () => {
    console.log( masterClickArray );
  }

  // function created to hold logic handlers for clicking the text.
  /*const handlePress = () => console.log();
  printCoordinates();*/

  /* state = {
    x: 0,
    y: 0,
  }; */

  const printElementDetails = (elHeight:number, elWidth:number, elX:number, elY:number) => {
    console.log("x = " + elX + " y = " + elY + " width = " + elWidth + " height = " + elHeight)
  }

  const handleLayout = ({ nativeEvent: {layout: {x, y, width, height}}}) => {
    console.log ("x = " + x + " y = " + y + " width = " + width + " height = " + height);
  };
 // printing to the console the width and height of the view with onLayout={handleLayout} prop attatched

 const isolateLayoutX = () => {
   var xCoordinate = handleLayout.x;
   console.log(xCoordinate);
 }





 
/*  const layoutPrint = (evt:onLayout) => {
   var viewX = evt.nativeEvent.x;
   var viewY = evt.nativeEvent.y;
   handleLayout(viewX, viewY)
 } */




  const pressImage = (e) => console.log("image Pressed", e);
  // the above line of code passes all PressEvents as parameters.
  // the function prints them to the console for us to choose one
  // I THINK e.pressEventFromList will print that named specific PressEvent to the console
  //  how do i get the coordinates from this??
  // e.g. console.log ("text", e.timeStamp) prints to the console the text and a timestamp of now.


  
  
  /*
  Make a function that takes in X and Y coordinates, and positions
  element at the stated position

  ? Where do i get the coordinates?
  ? HOW do i get the coordinates?
  ? How do i set them as readable values?
  ? How do i pass them in to the function?
  */
  const placeSquareAtObjectLayout = () => {
    const name = "Adam"
    return(
      <View>
        <Text> Hello World, welcome {name} </Text>
      </View>
    );
  }

  const layoutObject = {
      "height": 10,
      "width": 10,
      "x": 300,
      "y": 90,
    }







  return ( // returning jsx expression
    <View style={styles.container}>
      <TouchableOpacity onPress={(coordEvt) => coordsEventPressHandler(coordEvt)}>
        <View style={styles.coords}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.circle} onLayout={({ nativeEvent}) => console.log (nativeEvent.layout)}/>
        <View style={styles.square} onLayout={handleLayout}/>
        <TouchableOpacity>
        <Button title="click me bitch" style={styles.square} onPress={(arrayEvent) => registerCoordinatesToArray(arrayEvent)}></Button>
        </TouchableOpacity>
        <Button title= "show me bitch" onPress={() => printCoordinatesArray()}></Button>
      <StatusBar style="auto" />
    </View>
  );
}
//  onLayout method started. How to fill out??


const styles = StyleSheet.create({
  container: {
    flex: 8,
    backgroundColor: 'white', // named colours, RGB values, or hex values can be used to specify colours
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerB: {
    flex: 1,
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
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 230,
    right: 50,
    elevation: 10,
    borderColor: 'red',
    borderWidth: 5,
  },
  square: {
    height: 90,
    width: 90,
    borderRadius: 0,
    position: 'absolute',
    top: 10,
    right: 50,
    elevation: 10,
    backgroundColor: 'purple',
  },

  // Later on in your styles..
  /* backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }, */
});
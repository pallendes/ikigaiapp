import React, { Component } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Camera from 'react-native-camera'
import { Text } from 'native-base'

const _Camera = ({takePicture}) => {

  let camRef = null;

  return (
    <Camera
      ref={(cam) => {
        camRef = cam;
      }}
      style={styles.preview}
      aspect={Camera.constants.Aspect.fill}>
      <Text style={styles.capture} onPress={() => takePicture(camRef)}>
        [CAPTURE]
      </Text>
    </Camera>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default _Camera

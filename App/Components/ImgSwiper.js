import Swiper from 'react-native-swiper'
import React from 'react'
import { StyleSheet, Image, View } from 'react-native'
import { Thumbnail } from 'native-base'

const styles = StyleSheet.create({
  swiper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    flex: 1
  }
})

const ImgSwiper = (props) => {
  return (
    <Swiper
      height={180}
      style={styles.swiper}>
      <View style={styles.slide1}>
        <Thumbnail
          square
          style={styles.thumbnail}
          size={180}
          source={require('../Images/Photo-not-available.png')} />
      </View>
      <View style={styles.slide1}>
        <Image
          style={styles.thumbnail}
          source={require('../Images/Photo-not-available.png')} />
      </View>
      <Image
        style={styles.thumbnail}
        source={require('../Images/Photo-not-available.png')} />
    </Swiper>
  )
}

export default ImgSwiper

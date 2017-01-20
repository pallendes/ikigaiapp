import Swiper from 'react-native-swiper'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Thumbnail, Text, View } from 'native-base'

const styles = StyleSheet.create({
  swiper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const ImgSwiper = (props) => {

  let swiperImages = null
  let key = 0

  if(props.pictures && props.pictures.length > 0) {
    swiperImages =
      props.pictures.map(picture =>
            <Image
              resizeMode={Image.resizeMode.stretch}
              onPress={console.log(key)}
              style={styles.thumbnail}
              key={key++}
              source={{uri: picture}} />
      )
  } else {
    swiperImages =
        <Image
          resizeMode={Image.resizeMode.stretch}
          style={styles.thumbnail}
          source={require('../Images/Photo-not-available.png')} />
  }

  return (
    <Swiper
      height={180}
      showsButtons={true}
      style={styles.swiper}>
      {swiperImages}
    </Swiper>
  )
}

export default ImgSwiper

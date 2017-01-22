import Swiper from 'react-native-swiper'
import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Thumbnail, Text, View, Icon } from 'native-base'

const styles = StyleSheet.create({
  swiper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF',
  },
  cameraIcon: {
    color: '#FFF',
    fontSize: 60
  }
})

const ImgSwiper = (props) => {

  let swiperImages = null
  let key = 0
  let defaultText = props.defaultText ?
    props.defaultText : 'No images availables'

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
      <View style={styles.thumbnail}>
        <Icon name='ios-camera-outline' style={styles.cameraIcon}/>
        <Text style={styles.text}>{defaultText}</Text>
      </View>
  }

  return (
    <Swiper
      height={180}
      style={styles.swiper}>
      {swiperImages}
    </Swiper>
  )
}

export default ImgSwiper

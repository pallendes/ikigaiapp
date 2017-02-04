import React from 'react'
import { Container, Header, Content, Title, Button, Icon, View } from 'native-base'
import { StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'visible',
    flexWrap: 'wrap',
    margin: 5
  },
  item: {
    width: (Dimensions.get('window').width - 10) / 3,
    height: (Dimensions.get('window').width - 10) / 3
  },
  icon: {
    position: 'absolute',
    top: 5,
    right: 5,
    color: 'grey',
    zIndex: 999
  },
  selected: {
    opacity: 0.5
  },
  iconSelected: {
    color: 'blue',
    opacity: 1
  },
  button: {
    margin: 5
  }
})

const ProductImages = (props) => {
  let selectedPictures = props.pictures.filter(picture => picture.selected).length

  return (
    <Container>
      <Header>
        <Button transparent onPress={() => props.goBack()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Product Images</Title>
      </Header>
      <Content>
        <View style={style.container}>
          {
            props.pictures.map((picture, index) =>
              <View key={'view_' + index} style={style.item}>
                <Icon key={'icon_' + index} name='ios-checkmark-circle' style={[style.icon, picture.selected ? style.iconSelected : {}]} />
                <TouchableHighlight key={'button_' + index} onPress={() => props.selectPicture(index)}>
                  <Image
                    style={[style.item, picture.selected ? style.selected : {}]}
                    key={'image_' + index}
                    resizeMode={Image.resizeMode.stretch}
                    source={{uri: picture.uri}} />
                </TouchableHighlight>
              </View>
              )
          }
        </View>
        <Button block style={style.button} onPress={() => props.deleteSelectedPictures()}>Delete {selectedPictures} images</Button>
      </Content>
    </Container>
  )
}

export default ProductImages

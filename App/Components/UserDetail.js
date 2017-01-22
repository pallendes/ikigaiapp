import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View,
  Container,
  Button,
  Icon,
  Title,
  Header,
  Content } from 'native-base'

const style = StyleSheet.create({
  thumbnailView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    width: 120,
    height: 120,
    borderRadius: 60
  }
})

export default UserDetail = (props) => {

  let userPicture = props.user.pictureUri === ''
    ? require('../Images/Photo-not-available.png') : { uri: props.user.pictureUri }

  return(
    <View>
      <Container>
        <Header>
          <Button transparent onPress={() => props.goBack()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>User Account</Title>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>
      </Container>
      <Content>
        <View style={style.thumbnailView}>
          <TouchableHighlight onPress={() => openModal()}>
            <Image
              style={style.thumbnail}
              source={userPicture}/>
          </TouchableHighlight>
        </View>
      </Content>
    </View>
  )
}

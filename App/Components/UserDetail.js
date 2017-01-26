import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, Image, Dimensions } from 'react-native'
import { View,
  Container,
  Button,
  Icon,
  Title,
  List,
  ListItem,
  Header,
  Text,
  Fab,
  Content } from 'native-base'

var width = Dimensions.get('window').width

const style = StyleSheet.create({
  thumbnailView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10
  },
  thumbnail: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  list: {
    paddingRight: 15
  },
  listTextProperty: {
    fontSize: 14,
    width: width / 2
  },
  listTextDescription: {
    paddingLeft: 10,
    fontSize: 14
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
        <Content>
          <View style={style.thumbnailView}>
            <TouchableHighlight onPress={() => openModal()}>
              <Image
                style={style.thumbnail}
                source={userPicture}/>
            </TouchableHighlight>
          </View>
          <List style={style.list}>
            <ListItem>
              <Text style={style.listTextProperty}>Name</Text>
              <Text style={style.listTextDescription}>{props.user.name} {props.user.lastName}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.listTextProperty}>Email</Text>
              <Text style={style.listTextDescription}>{props.user.email}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.listTextProperty}>Registered Products</Text>
              <Text style={style.listTextDescription}>{props.user.name}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
      <Fab
        containerStyle={{ marginLeft: 10 }}
        style={{ backgroundColor: '#5067FF' }}
        onPress={() => props.showFab()}
        >
        <Icon name="md-create" />
      </Fab>
    </View>
  )
}

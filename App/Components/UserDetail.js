import React from 'react'
import { StyleSheet, Image, Dimensions } from 'react-native'
import { View,
  Container,
  Button,
  Icon,
  Title,
  Header,
  Text,
  Card,
  CardItem,
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
    width: 150,
    height: 150,
    borderRadius: 75
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

const UserDetail = (props) => {
  let userPicture = props.user.pictureUri === ''
    ? require('../Images/Photo-not-available.png') : { uri: props.user.pictureUri }

  return (
    <View>
      <Container>
        <Header>
          <Button transparent onPress={() => props.goBack()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>User Account</Title>
          {/* <Button transparent>
            <Icon name='ios-menu' />
          </Button> */}
        </Header>
        <Content>
          <View style={style.thumbnailView}>
            <Image
              style={style.thumbnail}
              source={userPicture} />
          </View>
          <Card style={{margin: 15, marginTop: 15}}>
            <CardItem header>
              <Text style={style.listTextDescription}>{props.user.name} {props.user.lastName}</Text>
            </CardItem>
            <CardItem>
              <Text style={style.listTextDescription}>{props.user.email}</Text>
            </CardItem>
            <CardItem>
              <Text style={style.listTextDescription}>{props.products.length} products registered</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
      <Fab
        containerStyle={{ marginLeft: 10 }}
        style={{ backgroundColor: '#5067FF' }}
        onPress={() => props.showFab()}
        >
        <Icon name='md-create' />
      </Fab>
    </View>
  )
}

export default UserDetail

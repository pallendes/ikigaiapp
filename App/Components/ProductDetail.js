import React, { PropTypes } from 'react'
import ImgSwiper from './ImgSwiper'
import { StyleSheet, Dimensions } from 'react-native'
import { Grid,
  Text,
  Row,
  Thumbnail,
  InputGroup,
  Input,
  Icon,
  Content,
  Container,
  List,
  ListItem,
  Button,
  Fab,
  View,
  Header,
  Title } from 'native-base'

var width = Dimensions.get('window').width

const style = StyleSheet.create({
  list: {
    marginRight: 15
  },
  text: {
    width: width / 3
  }
})

const ProductDetail = (props) => {
  return (
    <View>
      <Container>
        <Header>
          <Button transparent onPress={() => props.goBack()}>
            <Icon name='ios-arrow-back' />
          </Button>
          <Title>Product Detail</Title>
          <Button transparent>
            <Icon name='ios-menu' />
          </Button>
        </Header>
        <Content>
          <ImgSwiper {...props.product} />
          <List style={style.list}>
            <ListItem>
              <Text style={style.width}>Name</Text>
              <Text note>{props.product.name}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Price (RMB)</Text>
              <Text note>{props.product.RMB}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>CMB</Text>
              <Text note>{props.product.RMB}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>UXB</Text>
              <Text note>{props.product.UXB}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>MOQ</Text>
              <Text note>{props.product.MOQ}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Factory</Text>
              <Text note>{props.product.factory.name}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Category</Text>
              <Text note>{props.product.category.name}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Description</Text>
              <Text note>{props.product.description}</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
      <Fab
        containerStyle={{ marginLeft: 10 }}
        style={{ backgroundColor: '#5067FF' }}
        direction="up"
        active={props.fabActive}
        onPress={() => props.showFab()}
        >
        <Icon name="ios-create-outline" />
        <Button style={{backgroundColor: 'red'}}
          onPress={() => props.confirmDeleteProduct(props.product)}>
          <Icon name="ios-close" />
        </Button>
        <Button style={style.editFab}>
         <Icon name="md-create" />
        </Button>
      </Fab>
    </View>
  )
}

export default ProductDetail

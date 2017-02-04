import React from 'react'
import ImgSwiper from './ImgSwiper'
import { StyleSheet, Dimensions } from 'react-native'
import { Grid,
  Text,
  Col,
  Icon,
  Content,
  Container,
  Button,
  Fab,
  View,
  Card,
  CardItem,
  Header,
  Title } from 'native-base'

var width = Dimensions.get('window').width

const style = StyleSheet.create({
  list: {
    marginRight: 15
  },
  text: {
    width: width / 3
  },
  card: {
    margin: 5
  },
  noteText: {
    color: '#808080',
    fontSize: 12
  },
  cardHeader: {
    paddingBottom: 0
  },
  description: {
    color: '#808080'
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
          {/* <Button transparent>
            <Icon name='ios-menu' />
          </Button> */}
        </Header>
        <Content>
          <ImgSwiper {...props.product} />
          <Card style={style.card}>
            <CardItem header style={style.cardHeader}>
              <Text>{props.product.name}</Text>
            </CardItem>
            <CardItem>
              <Text style={style.description}>{props.product.description === '' ? 'No description available.' : props.product.description }</Text>
            </CardItem>
            <CardItem>
              <Grid>
                <Col>
                  <Text style={style.noteText}>Price</Text>
                  <Text>{props.product.price}</Text>
                </Col>
                <Col>
                  <Text style={style.noteText}>CMB</Text>
                  <Text>{props.product.CBM}</Text>
                </Col>
              </Grid>
            </CardItem>
            <CardItem>
              <Grid>
                <Col>
                  <Text style={style.noteText}>UXB</Text>
                  <Text>{props.product.UXB}</Text>
                </Col>
                <Col>
                  <Text style={style.noteText}>MOQ</Text>
                  <Text>{props.product.MOQ}</Text>
                </Col>
              </Grid>
            </CardItem>
            <CardItem>
              <Grid>
                <Col>
                  <Text style={style.noteText}>Factory</Text>
                  <Text>{props.product.factory.name}</Text>
                </Col>
                <Col>
                  <Text style={style.noteText}>Category</Text>
                  <Text>{props.product.category.name}</Text>
                </Col>
              </Grid>
            </CardItem>
          </Card>
          {/* <List style={style.list}>
            <ListItem>
              <Text style={style.width}>Name</Text>
              <Text>{props.product.name}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Price (RMB)</Text>
              <Text>{props.product.price}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>CMB</Text>
              <Text>{props.product.CMB}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>UXB</Text>
              <Text>{props.product.UXB}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>MOQ</Text>
              <Text>{props.product.MOQ}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Factory</Text>
              <Text>{props.product.factory.name}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Category</Text>
              <Text>{props.product.category.name}</Text>
            </ListItem>
            <ListItem>
              <Text style={style.width}>Description</Text>
              <Text>{props.product.description}</Text>
            </ListItem>
          </List> */}
        </Content>
      </Container>
      <Fab
        containerStyle={{ marginLeft: 10 }}
        style={{ backgroundColor: '#5067FF' }}
        direction='up'
        active={props.fabActive}
        onPress={() => props.showFab()}
        >
        <Icon name='ios-create-outline' />
        <Button style={{backgroundColor: 'red'}}
          onPress={() => props.confirmDeleteProduct(props.product)}>
          <Icon name='ios-close' />
        </Button>
        <Button style={style.editFab} onPress={() => props.editProduct(props.product)}>
          <Icon name='md-create' />
        </Button>
      </Fab>
    </View>
  )
}

export default ProductDetail

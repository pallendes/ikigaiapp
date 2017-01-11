import React, { PropTypes } from 'react'
import ImgSwiper from './ImgSwiper'
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
  Header,
  Title } from 'native-base'

const ProductDetail = (props) => {
  return (
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
        <ImgSwiper />
        <List>
          <ListItem>
            <Text>Name</Text>
            <Text note>{props.product.name}</Text>
          </ListItem>
          <ListItem>
            <Text>Price (RMB)</Text>
            <Text note>{props.product.RMB}</Text>
          </ListItem>
          <ListItem>
            <Text>CMB</Text>
            <Text note>{props.product.RMB}</Text>
          </ListItem>
          <ListItem>
            <Text>UXB</Text>
            <Text note>{props.product.UXB}</Text>
          </ListItem>
          <ListItem>
            <Text>MOQ</Text>
            <Text note>{props.product.MOQ}</Text>
          </ListItem>
          <ListItem>
            <Text>Factory</Text>
            <Text note>{props.product.factory.name}</Text>
          </ListItem>
          <ListItem>
            <Text>Category</Text>
            <Text note>{props.product.category.name}</Text>
          </ListItem>
          <ListItem>
            <Text>Description</Text>
            <Text note>{props.product.description}</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  )
}

export default ProductDetail

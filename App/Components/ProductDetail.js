import React, { PropTypes } from 'react'
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

const ProductDetail = () => (
  <Container>
    <Header>
      <Button transparent>
        <Icon name='ios-arrow-back' />
      </Button>
      <Title>Product Detail</Title>
      <Button transparent>
        <Icon name='ios-menu' />
      </Button>
    </Header>
    <Content>
      <Thumbnail square size={200} source={require('../Images/Photo-not-available.png')} />
      <List>
        <ListItem>
          <Text>Name</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>Price (RMB)</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>CMB</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>UXB</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>MOQ</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>Factory</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>Category</Text>
          <Text note>The Product name</Text>
        </ListItem>
        <ListItem>
          <Text>Description</Text>
          <Text note>The Product name</Text>
        </ListItem>
      </List>
    </Content>
  </Container>
)

export default ProductDetail

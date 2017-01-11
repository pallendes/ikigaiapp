import React, { PropTypes } from 'react'
import { Container,
  Content,
  List,
  ListItem,
  InputGroup,
  Input,
  Icon,
  Text,
  Button,
  Thumbnail,
  Header,
  Picker,
  Item,
  Title } from 'native-base'

const NewProduct = ({goBack, handleNewPicture, pictureUri}) => {

  let picture
    = pictureUri === '' ? require('../Images/Photo-not-available.png') : pictureUri
  console.log(picture)  
  return (
    <Container>
      <Header>
        <Button transparent onPress={() => goBack()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Product Detail</Title>
        <Button transparent onPress={() => handleNewPicture()}>
          <Icon name='ios-menu' />
        </Button>
      </Header>
      <Content>
        <Thumbnail
          size={120}
          source={picture}
          onPress={() => handleNewPicture()}/>
      </Content>
    </Container>
  )
}

export default NewProduct

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
  Title } from 'native-base'

const UserRegistry = ({goBack}) => {
  return (
    <Container>
      <Header>
        <Button transparent onPress={() => goBack()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Product Detail</Title>
        <Button transparent>
          <Icon name='ios-menu' />
        </Button>
      </Header>
      <Content>
        <List>
          <ListItem>
            <Thumbnail size={120} source={require('../Images/Photo-not-available.png')} />
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="First Name" placeholder="John" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="Last Name" placeholder="Doe" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-person" style={{ color: '#0A69FE' }} />
              <Input placeholder="EMAIL" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
              <Input placeholder="PASSWORD" secureTextEntry />
            </InputGroup>
          </ListItem>
          <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
            Sign Up
          </Button>
        </List>
      </Content>
    </Container>
  )
}

export default UserRegistry

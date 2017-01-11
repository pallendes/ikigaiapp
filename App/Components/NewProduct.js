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
import Camera from 'react-native-camera'

const NewProduct = ({goBack}) => {
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
              <Input inlineLabel label="Name" placeholder="John" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="Description" placeholder="Doe" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="Price (RMB)" placeholder="Doe" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="CBM" placeholder="Doe" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="UXB" placeholder="Doe" />
            </InputGroup>
          </ListItem>
          <ListItem>
            <InputGroup>
              <Input inlineLabel label="MOQ" placeholder="Doe" />
            </InputGroup>
          </ListItem>
          <ListItem iconLeft>
              <Text>Factory</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown">
                  <Item label="Male" value="key0" />
                  <Item label="Female" value="key1" />
                  <Item label="Other" value="key2" />
              </Picker>
          </ListItem>
          <ListItem iconLeft>
              <Text>Factory</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown">
                  <Item label="Male" value="key0" />
                  <Item label="Female" value="key1" />
                  <Item label="Other" value="key2" />
              </Picker>
          </ListItem>
          <ListItem iconLeft>
              <Text>Category</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown">
                  <Item label="Male" value="key0" />
                  <Item label="Female" value="key1" />
                  <Item label="Other" value="key2" />
              </Picker>
          </ListItem>
          <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
            Sign Up
          </Button>
        </List>
      </Content>
    </Container>
  )
}

export default NewProduct

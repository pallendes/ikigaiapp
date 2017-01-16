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
  View,
  Title } from 'native-base'
import { TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import PickerSelector from './PickerSelector'

const NewProduct = ({goBack, handleNewPicture, pictureUri, openModal, closeModal, ...props}) => {

  let picture
    = pictureUri === '' ? require('../Images/Photo-not-available.png') : { uri: pictureUri }

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
      <View>
        <Content>
          <List>
            <ListItem>
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableHighlight onPress={() => openModal()}>
                  <Image
                    style={{width: 120, height: 120}}
                    source={picture}/>
                </TouchableHighlight>
              </View>
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
                <Picker.Item label="Male" value="key0" />
                <Picker.Item label="Female" value="key1" />
                <Picker.Item label="Other" value="key2" />
              </Picker>
            </ListItem>
            <ListItem iconLeft>
              <Text>Category</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown">
                <Picker.Item label="Male" value="key0" />
                <Picker.Item label="Female" value="key1" />
                <Picker.Item label="Other" value="key2" />
              </Picker>
            </ListItem>
            <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              Save
            </Button>
          </List>
        </Content>
        <PickerSelector
          handleNewPicture={handleNewPicture}
          openModal={openModal}
          closeModal={closeModal}
          {...props}/>
      </View>
    </Container>
  )
}

export default NewProduct

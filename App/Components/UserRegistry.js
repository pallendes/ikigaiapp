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
import { TouchableHighlight, Image } from 'react-native'
import { View } from 'native-base'
import PickerSelector from './PickerSelector'
import AsyncLoader from './AsyncLoader'

const UserRegistry = ({goBack, handleNewPicture, openModal, closeModal, createUser, setUserProp, ...props}) => {

  let pictureUri = props.pictureUri === ''
    ? require('../Images/Photo-not-available.png') : {uri: props.pictureUri}

  return (
    <Container>
      <Header>
        <Button transparent onPress={() => goBack()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Sing Up</Title>
        <Button transparent>
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
                    style={{width: 120, height: 120, borderRadius: 60}}
                    source={pictureUri}/>
                </TouchableHighlight>
              </View>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="First Name"
                  placeholder="John"
                  onChangeText={text => setUserProp(text, 'name')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="Last Name"
                  placeholder="Doe"
                  onChangeText={text => setUserProp(text, 'lastName')}/>
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
            <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
              onPress={() => createUser()}>
              Sign Up
            </Button>
          </List>
        </Content>
        <PickerSelector
          handleNewPicture={handleNewPicture}
          closeModal={closeModal}
          {...props}/>
        <AsyncLoader modalOpen={props.showLoader} />
      </View>
    </Container>
  )
}

export default UserRegistry

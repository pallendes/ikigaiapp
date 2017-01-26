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
  Grid,
  Col,
  View,
  Row,
  Title } from 'native-base'
import { TouchableHighlight, Image, StyleSheet } from 'react-native'
import PickerSelector from './PickerSelector'
import AsyncLoader from './AsyncLoader'
import { FormInput } from './FormComponents'

const style = StyleSheet.create({
  grid: {
    padding: 15
  },
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60
  },
  text: {
    fontSize: 12,
    color: '#808080'
  },
  buttonRow: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20
  },
  errorIcon: {
    color:'red'
  },
  inputIcon: {
    color: '#0A69FE'
  },
  successIcon: {
    color: '#0A69FE'
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    textAlign: 'right'
  }
})

const UserRegistry = ({goBack, handleNewPicture, openModal, closeModal, createUser, setUserProp, ...props}) => {

  let pictureUri = props.user.pictureUri === ''
    ? require('../Images/Photo-not-available.png') : {uri: props.user.pictureUri}

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
          <Grid style={style.grid}>
            <Row>
              <View style={style.imageView}>
                <TouchableHighlight onPress={() => openModal()}>
                  <Image
                    style={style.image}
                    source={pictureUri}/>
                </TouchableHighlight>
              </View>
            </Row>
            <Row>
              <FormInput
                title='Name'
                valid={props.userValidation.name.valid}
                validationMessage={props.userValidation.name.messages}
                modelField='name'
                placeholder='Enter your name...'
                iconPosition='right'
                value={props.user.name}
                onChangeText={setUserProp}/>
            </Row>
            <Row>
              <FormInput
                title='Last name'
                modelField='lastName'
                placeholder='Enter your last name...'
                iconPosition='right'
                value={props.user.lastName}
                onChangeText={setUserProp}/>
            </Row>
            <Row>
              <View>
                <FormInput
                  title='Email'
                  valid={props.userValidation.email.valid}
                  validationMessage={props.userValidation.email.messages}
                  modelField='email'
                  placeholder='Email'
                  value={props.user.email}
                  icon='ios-at-outline'
                  onChangeText={setUserProp}/>
              </View>
            </Row>
            <Row>
              <FormInput
                title='Password'
                valid={props.userValidation.passwd.valid}
                validationMessage={props.userValidation.passwd.messages}
                modelField='passwd'
                value={props.user.passwd}
                placeholder='Password'
                icon='ios-lock-outline'
                onChangeText={setUserProp}/>
            </Row>
            <Row style={style.buttonRow}>
              <Button
                block
                iconRight
                onPress={() => createUser()}>
                Sign Up
                <Icon name='ios-log-in-outline' />
              </Button>
            </Row>
          </Grid>
        </Content>
        <PickerSelector
          handleNewPicture={handleNewPicture}
          closeModal={closeModal}
          modalOpen={props.modalOpen}
          {...props}/>
        <AsyncLoader modalOpen={props.showLoader} />
      </View>
    </Container>
  )
}

export default UserRegistry

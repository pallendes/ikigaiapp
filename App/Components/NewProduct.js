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

const NewProduct
  = ({goBack, handleNewPicture, pictureUri, openModal, closeModal, modalOpen, setProductProps, saveProduct, ...props}) => {

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
                <Input inlineLabel
                  label="Name"
                  placeholder="John"
                  onChangeText={text => setProductProps({text}, 'name')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="Description"
                  placeholder="Doe"
                  onChangeText={text => setProductProps({text}, 'description')} />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="Price (RMB)"
                  placeholder="$"
                  onChangeText={text => setProductProps({text}, 'price')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="CBM"
                  placeholder="Doe"
                  onChangeText={text => setProductProps({text}, 'CMB')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="UXB"
                  placeholder="Doe"
                  onChangeText={text => setProductProps({text}, 'UXB')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="MOQ"
                  placeholder="Doe"
                  onChangeText={text => setProductProps({text}, 'MOQ')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <Text>Factory</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={props.factories[0]}
                onValueChange={factory => setProductProps({factory}, 'factory')}>
                {
                  props.factories.map(factory =>
                    <Picker.Item label={factory.name}
                      value={factory.id}
                      key={factory.id} />
                  )
                }
              </Picker>
            </ListItem>
            <ListItem>
              <Text>Category</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                selectedValue={props.categories[0]}
                onValueChange={category => setProductProps({category}, 'CMB')}>
                {
                  props.categories.map(category =>
                    <Picker.Item label={category.name}
                      value={category.id}
                      key={category.id} />
                  )
                }
              </Picker>
            </ListItem>
            <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}
              onPress={() => saveProduct()}>
              Save
            </Button>
          </List>
        </Content>
        <PickerSelector
          handleNewPicture={handleNewPicture}
          openModal={openModal}
          closeModal={closeModal}
          modalOpen={modalOpen}/>
      </View>
    </Container>
  )
}

export default NewProduct

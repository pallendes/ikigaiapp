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
  Grid,
  Col,
  Fab,
  View,
  Title } from 'native-base'
import { TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import ImgSwiper from './ImgSwiper'
import PickerSelector from './PickerSelector'
import { StyleSheet, Dimensions } from 'react-native'

var width = Dimensions.get('window').width

const style = StyleSheet.create({
  content: {
    margin: 0
  },
  list: {
    marginRight: 15
  },
  button: {
    margin: 10
  },
  picker: {

  },
  pickerText: {
    width: width / 3,
    height: 30,
    color: '#222222',
    textAlign: 'center'
  }
})

const NewProduct
  = ({goBack,
    handleNewPicture,
    pictureUri,
    openModal,
    closeModal,
    modalOpen,
    setProductProps,
    saveProduct,
    openDrawer,
    ...props}) => {

  let picture
    = pictureUri === '' ? require('../Images/Photo-not-available.png') : { uri: pictureUri }

  return (
    <Container>
      <Header>
        <Button transparent onPress={() => goBack()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Add Product</Title>
        <Button transparent onPress={() => goBack()}>
          <Icon name='ios-menu' />
        </Button>
      </Header>
      <View>
        <Content style={style.content}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImgSwiper defaultText={'Press the \'+\' button to add images...'} {...props.product}/>
            <Button style={{position: 'absolute', right: 10, bottom: 10, borderRadius: 50, width: 35, height: 35}}
              onPress={() => openModal()}>
                <Icon name='ios-add'/>
            </Button>
          </View>
          <List style={style.list}>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="Name"
                  placeholder="The product name..."
                  onChangeText={text => setProductProps({text}, 'name')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="Price (RMB)"
                  keyboardType="numeric"
                  placeholder="$"
                  onChangeText={text => setProductProps({text}, 'price')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="CBM"
                  placeholder="$"
                  keyboardType="numeric"
                  onChangeText={text => setProductProps({text}, 'CMB')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="UXB"
                  placeholder="$"
                  keyboardType="numeric"
                  onChangeText={text => setProductProps({text}, 'UXB')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Input inlineLabel
                  label="MOQ"
                  placeholder="$"
                  keyboardType="numeric"
                  onChangeText={text => setProductProps({text}, 'MOQ')}/>
              </InputGroup>
            </ListItem>
            <ListItem>
              <Text style={style.pickerText}>Factory</Text>
              <Picker
                iosHeader="Select a Factory"
                mode="dialog"
                prompt="Select a Factory..."
                style={style.picker}
                selectedValue={props.product.factory}
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
              <Text style={style.pickerText}>Category</Text>
              <Picker
                iosHeader="Select one"
                mode="dialog"
                prompt="Select a Category..."
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
            <ListItem>
              <InputGroup>
                <Input stackedLabel
                  label="Description"
                  placeholder="Enter the product description here..."
                  onChangeText={text => setProductProps({text}, 'description')}/>
              </InputGroup>
            </ListItem>
          </List>
          <Button block
            style={style.button}
            onPress={() => saveProduct()}>
            Save
          </Button>
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

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
  Row,
  Fab,
  View,
  Title } from 'native-base'
import { TouchableHighlight, TouchableOpacity, Image } from 'react-native'
import ImgSwiper from './ImgSwiper'
import PickerSelector from './PickerSelector'
import { StyleSheet, Dimensions } from 'react-native'
import { FormInput, InlineFormInput } from './FormComponents'

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
  pickerCol: {
    alignSelf: 'center'
  },
  pickerText: {
    // color: '#222222',
    // textAlign: 'center'
    fontSize: 12,
    fontWeight: 'bold',
    color: '#808080',
    paddingBottom: 0,
    paddingLeft: 0
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
    saveChanges,
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
          <Grid style={{paddingLeft: 15, paddingRight: 15}}>
            <Row>
              <FormInput
                title='Name'
                valid={props.productValidation.name.valid}
                validationMessage={props.productValidation.name.messages}
                modelField='name'
                iconPosition='right'
                value={props.product.name}
                placeholder='Product name...'
                hideError
                onChangeText={setProductProps}/>
            </Row>
            <Row>
              <Col style={{paddingRight: 5}}>
                <FormInput
                  title='Price (RMB)'
                  valid={props.productValidation.price.valid}
                  validationMessage={props.productValidation.price.messages}
                  modelField='price'
                  iconPosition='right'
                  value={props.product.price}
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps}/>
              </Col>
              <Col style={{paddingLeft: 5}}>
                <FormInput
                  title='CMB'
                  valid={props.productValidation.CMB.valid}
                  validationMessage={props.productValidation.CMB.messages}
                  modelField='CMB'
                  iconPosition='right'
                  value={props.product.CMB}
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps}/>
              </Col>
            </Row>
            <Row>
              <Col style={{paddingRight: 5}}>
                <FormInput
                  title='UXB'
                  valid={props.productValidation.UXB.valid}
                  validationMessage={props.productValidation.UXB.messages}
                  modelField='UXB'
                  iconPosition='right'
                  value={props.product.UXB}
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps}/>
              </Col>
              <Col style={{paddingLeft: 5}}>
                <FormInput
                  title='MOQ'
                  valid={props.productValidation.MOQ.valid}
                  validationMessage={props.productValidation.MOQ.messages}
                  modelField='MOQ'
                  iconPosition='right'
                  value={props.product.MOQ}
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps}/>
              </Col>
            </Row>
            <Row>
              <Col style={style.pickerCol}>
                <Text note style={style.pickerText}>Factory</Text>
                <Picker
                  iosHeader="Select a Factory"
                  prompt="Select a Factory..."
                  mode="dropdown" 
                  style={style.picker}
                  selectedValue={props.product.factory.id}
                  onValueChange={value => setProductProps(props.factories[value], 'factory')}>
                  {
                    props.factories.map(factory =>
                      <Picker.Item label={factory.name}
                        value={factory.id}
                        key={factory.id} />
                    )
                  }
                </Picker>
              </Col>
              <Col>
                <Text note style={style.pickerText}>Category</Text>
                <Picker
                  iosHeader="Select one"
                  prompt="Select a Category..."
                  mode="dropdown"
                  style={style.picker}
                  selectedValue={props.product.category.id}
                  onValueChange={value => setProductProps(props.categories[value], 'category')}>
                  {
                    props.categories.map(category =>
                      <Picker.Item label={category.name}
                        value={category.id}
                        key={category.id} />
                    )
                  }
                </Picker>
              </Col>
            </Row>
            <Row>
              <FormInput
                title='Description'
                modelField='description'
                iconPosition='right'
                value={props.product.description}
                multiline
                placeholder='Enter a description...'
                hideError
                onChangeText={setProductProps}/>
            </Row>
          </Grid>
          <Button block
            style={style.button}
            onPress={props.isNewProduct ? () => saveProduct() : () => saveChanges()}>
            {props.isNewProduct ? 'Save' : 'Save changes'}
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

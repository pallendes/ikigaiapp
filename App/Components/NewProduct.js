import React from 'react'
import { Container,
  Content,
  Icon,
  Text,
  Button,
  Header,
  Picker,
  Grid,
  Col,
  Row,
  View,
  Title } from 'native-base'
import { StyleSheet } from 'react-native'
import ImgSwiper from './ImgSwiper'
import PickerSelector from './PickerSelector'
import { FormInput } from './FormComponents'

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
    fontSize: 12,
    fontWeight: 'bold',
    color: '#808080',
    paddingBottom: 0,
    paddingLeft: 0
  },
  swiperButtonDelete: {
    backgroundColor: 'red',
    top: 10
  },
  swiperButton: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 50,
    width: 35,
    height: 35
  },
  swiper: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  thumbnail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  }
})

const NewProduct = ({goBack,
    handleNewPicture,
    pictureUri,
    openModal,
    closeModal,
    modalOpen,
    setProductProps,
    saveProduct,
    openDrawer,
    saveChanges,
    editImages,
    ...props}) => {
  let editPicturesButton = null

  if (props.product.pictures.length > 0) {
    editPicturesButton =
      <Button
        style={[style.swiperButton, style.swiperButtonDelete]}
        onPress={() => editImages(props.product)}>
        <Icon name='ios-close' />
      </Button>
  }

  return (
    <Container>
      <Header>
        <Button transparent onPress={() => goBack()}>
          <Icon name='ios-arrow-back' />
        </Button>
        <Title>Add Product</Title>
        {/* <Button transparent onPress={() => goBack()}>
          <Icon name='ios-menu' />
        </Button> */}
      </Header>
      <View>
        <Content style={style.content}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <ImgSwiper defaultText={'Press the \'+\' button to add images...'} {...props.product} />
            <Button style={style.swiperButton}
              onPress={() => openModal()}>
              <Icon name='ios-add' />
            </Button>
            {editPicturesButton}
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
                onChangeText={setProductProps} />
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
                  keyboardType='numeric'
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps} />
              </Col>
              <Col style={{paddingLeft: 5}}>
                <FormInput
                  title='CBM'
                  valid={props.productValidation.CBM.valid}
                  validationMessage={props.productValidation.CBM.messages}
                  modelField='CBM'
                  iconPosition='right'
                  value={props.product.CBM}
                  keyboardType='numeric'
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps} />
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
                  keyboardType='numeric'
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps} />
              </Col>
              <Col style={{paddingLeft: 5}}>
                <FormInput
                  title='MOQ'
                  valid={props.productValidation.MOQ.valid}
                  validationMessage={props.productValidation.MOQ.messages}
                  modelField='MOQ'
                  iconPosition='right'
                  value={props.product.MOQ}
                  keyboardType='numeric'
                  placeholder='0'
                  hideError
                  onChangeText={setProductProps} />
              </Col>
            </Row>
            <Row>
              <Col style={style.pickerCol}>
                <Text note style={style.pickerText}>Factory</Text>
                <Picker
                  iosHeader='Select a Factory'
                  prompt='Select a Factory...'
                  mode='dropdown'
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
                  iosHeader='Select one'
                  prompt='Select a Category...'
                  mode='dropdown'
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
                onChangeText={setProductProps} />
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
          modalOpen={modalOpen} />
      </View>
    </Container>
  )
}

export default NewProduct

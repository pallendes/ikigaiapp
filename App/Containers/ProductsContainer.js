import { connect } from 'react-redux'
import { loadProducts } from '../Actions/ProductActions'
import ProductList from '../Components/ProductList'
import React, { Component } from 'react'
import { showProductDetail } from '../Actions/ProductDetailActions'
import { openDrawer } from '../Actions/DrawerActions'
import navigateTo from '../Actions/SideBarNav'
import { Alert, AlertIOS, ToastAndroid, Platform } from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    View,
    Button,
    Fab,
    Icon } from 'native-base'
import FileSystem from 'react-native-filesystem'
var Mailer = require('NativeModules').RNMail
import FileProvider from 'react-native-file-provider'
import { convertToCsv } from '../Helpers/FileHelpers'

class ProductsContainer extends Component {

  constructor (props) {
    super(props)
    this.state = {
      active: false,
      userProducts: []
    }
  }

  componentWillMount = () => this.props.loadProducts()

  componentWillReceiveProps = (nextProps) => {
    const currentUserProducts = nextProps.products.filter(_product => _product.sessionId === this.props.currentSession.id)
    this.setState({
      userProducts: currentUserProducts
    })
  }

  goToDetail = (product) => {
    this.props.navigateTo('productDetailContainer', 'productsContainer', product)
  }

  openDrawer = () => {
    this.props.openDrawer()
  }

  newProduct = () => {
    this.props.navigateTo('newProductContainer', 'productsContainer', {new: +new Date()})
  }

  confirmCreateAndSendFile = () => {
    const userProducts = this.props.products.filter(_product => _product.sessionId === this.props.currentSession.id)

    if (userProducts.length === 0) {
      if (Platform.OS === 'ios') {
        AlertIOS.alert('Error', 'You don\'t have products to send.')
      } else {
        ToastAndroid.show('You don\'t have products to send.', ToastAndroid.SHORT)
      }
      return
    }

    Alert.alert(
      'Send file',
      'Create and send excel file?',
      [
        {text: 'Yes', onPress: () => this.createAndSendFile()},
        {text: 'No', onPress: () => console.log('no')}
      ]
    )
  }

  createAndSendFile = async () => {
    try {
      let items = []

      this.props.products.forEach(item => {
        const _item = {
          Name: item.name,
          Description: item.description,
          Price: item.price,
          CMB: item.CMB,
          UXB: item.UXB,
          MOQ: item.MOQ,
          Factory: item.factory.name,
          Category: item.category.name
        }
        items.push(_item)
      })

      const csv = convertToCsv(items)

      const dir = 'ikigai/ikigai_products.csv'
      await FileSystem.writeToFile(dir, csv)

      const fileExists = await FileSystem.fileExists(dir)
      const absolutePath = FileSystem.absolutePath(dir)

      if (fileExists) {
        let contentUri = null

        if (FileProvider) {
          contentUri = await FileProvider.getUriForFile('com.ikigai.provider', absolutePath)
          this.sendEmail(contentUri)
        }
      }
    } catch (err) {
      console.error('error ', err)
    }
  }

  sendEmail = (attachment) => {
    Mailer.mail({
      subject: 'Registered products',
      recipients: [this.props.user.email],
      ccRecipients: [this.props.user.email],
      body: `File containing the current ${this.props.products.length} product(s)`,
      isHTML: true,
      attachment: {
        path: attachment,
        type: 'csv'
      }
    }, (error, event) => {
      if (error) {
        if (Platform.OS === 'ios') {
          AlertIOS.alert('Could not send email. if the error persists please send a mail to X')
        } else {
          ToastAndroid.show('Could not send email. if the error persists please send a mail to X', ToastAndroid.SHORT)
        }
      }
    })
  }

  render () {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.openDrawer()}>
            <Icon name='ios-menu' />
          </Button>
          <Title>Ikigai</Title>
          <Button transparent onPress={() => this.confirmCreateAndSendFile()}>
            <Icon name='ios-send' />
          </Button>
        </Header>
        <View>
          <Content>
            <ProductList
              products={this.props.products}
              currentSession={this.props.currentSession}
              goToDetail={this.goToDetail} />
          </Content>
          <Fab
            containerStyle={{ marginLeft: 10 }}
            style={{ backgroundColor: '#5067FF' }}
            onPress={() => this.newProduct()}
            >
            <Icon name='ios-add' />
          </Fab>
        </View>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  navigateTo: (route, homeRoute, passProps) => dispatch(navigateTo(route, homeRoute, passProps)),
  loadProducts: () => dispatch(loadProducts()),
  showProductDetail: () => dispatch(showProductDetail()),
  openDrawer: () => dispatch(openDrawer())
})

const mapStateToProps = state => ({
  products: state.products.productList,
  navigation: state.navigation,
  currentSession: state.session.currentSession,
  user: state.user.currentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)

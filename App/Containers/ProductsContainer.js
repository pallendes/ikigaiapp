import { connect } from 'react-redux'
import { showProducts, loadProducts } from '../Actions/ProductActions'
import ProductList from '../Components/ProductList'
import React, { Component } from 'react'
import { showProductDetail } from '../Actions/ProductDetailActions'
import { openDrawer } from '../Actions/DrawerActions'
import navigateTo from '../Actions/SideBarNav'
import {
    Container,
    Header,
    Title,
    Content,
    List,
    ListItem,
    Thumbnail,
    View,
    Text,
    Button,
    Fab,
    Icon } from 'native-base';

class ProductsContainer extends Component {

  constructor(props) {
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

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.openDrawer()}>
              <Icon name='ios-menu' />
          </Button>
          <Title>Ikigai</Title>
        </Header>
        <View>
          <Content>
            <ProductList
              products={this.props.products}
              currentSession={this.props.currentSession}
              goToDetail={this.goToDetail}/>
          </Content>
          <Fab
            containerStyle={{ marginLeft: 10 }}
            style={{ backgroundColor: '#5067FF' }}
            onPress={() => this.newProduct()}
            >
            <Icon name="ios-add" />
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
   currentSession: state.session.currentSession
 })

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

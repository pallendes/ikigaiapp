import { connect } from 'react-redux'
import { showProducts } from '../Actions/ProductActions'
import ProductList from '../Components/ProductList'
import React, { Component } from 'react'
import { showProductDetail } from '../Actions/ProductDetailActions'
import {
    Container,
    Header,
    Title,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Button,
    Icon } from 'native-base';

class ProductsContainer extends Component {

  componentWillMount = () => this.props.showProducts()

  goToDetail = (productId) => {
    // const { dispatch, navigation } = this.props;
    // dispatch(pushRoute({ key: 'productDetailContainer' }, navigation.key));
  }

  openDrawer = () => {
    this.props.openDrawer()
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
          <Content>
            <ProductList
              products={this.props.products}
              goToDetail={this.goToDetail}/>
          </Content>
      </Container>
    )
  }
}

mapDispatchToProps = ({
  showProducts,
  showProductDetail
})

mapStateToProps = state => ({
   products: state.products.productList,
 })

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

import React, { PropTypes, Component } from 'react'
import { List } from 'native-base'
import Product from './ProductItem'
import { Actions } from 'react-native-router-flux'

class ProductList extends Component {

  goToDetail = (productId) => {
    this.props.goToDetail(productId)
  }

  render() {
    return (
      <List>
        {
          this.props.products.map((product) =>
            <Product
              key={product.id}
              product={product}
              goToDetail={this.goToDetail.bind(this)}
              />
          )
        }
      </List>
    )
  }

}

export default ProductList;

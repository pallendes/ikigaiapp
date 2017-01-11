import React, { Proptypes } from 'react'
import { ListItem, Thumbnail, Text } from 'native-base'

class Product extends React.Component {

  render() {
    return (
      <ListItem onPress={() => this.props.goToDetail({selectedProduct: this.props.product})}>
        <Thumbnail square size={80} source={require('../Images/Photo-not-available.png')}/>
        <Text>{this.props.product.name}</Text>
        <Text note>{this.props.product.description}</Text>
      </ListItem>
    )
  }
}

// const Product = ({ showProductDetail, product }) => (
//     <ListItem onPress={ () => showProductDetail(product.id) }>
//       <Thumbnail square size={80} source={require('../Images/Photo-not-available.png')}/>
//       <Text>{product.name}</Text>
//       <Text note>{product.description}</Text>
//     </ListItem>
// );

// Product.propTypes = {
//     product: PropTypes.object.isRequired
// };

export default Product;

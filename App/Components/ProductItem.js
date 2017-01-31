import React, { Proptypes } from 'react'
import { ListItem, Thumbnail, Text } from 'native-base'

const ProductItem = (props) => {
  console.log(props);

  let pictureUri = props.product.pictures.length > 0 ?
    {uri: props.product.pictures[0]} : require('../Images/Photo-not-available.png')

  return (
    <ListItem onPress={() => props.goToDetail({selectedProduct: props.product})}>
      <Thumbnail square size={80} source={pictureUri}/>
      <Text>{props.product.name}</Text>
      <Text note>
        {props.product.description.substring(0, 100)}
        {props.product.description.length > 0 ? '...' : 'Description not available.'}
      </Text>
      <Text note>Price: {props.product.price}</Text>
    </ListItem>
  )
}

export default ProductItem;

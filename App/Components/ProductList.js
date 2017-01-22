import React, { Component } from 'react'
import { List, Text, View } from 'native-base'
import ProductItem from './ProductItem'
import { StyleSheet } from 'react-native'

//@TODO mover a un archivo comun
const style = StyleSheet.create({
  list: {
    marginRight: 15
  },
  text: {
    padding: 10
  }
})

const ProductList = (props) => {

  let list = null;

  if(props.products.length > 0) {
    list =
      <List style={style.list}>
        {
          props.products.map((product) =>
            <ProductItem
              key={product.id}
              product={product}
              goToDetail={props.goToDetail}
              />
          )
        }
      </List>
  } else {
    list = <Text style={style.text}>Press the '+' button to begin adding products...</Text>
  }

  return (
    <View>
      {list}
    </View>
  )
}

export default ProductList

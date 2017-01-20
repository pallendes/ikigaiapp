import React, { Component } from 'react'
import { List } from 'native-base'
import ProductItem from './ProductItem'
import { StyleSheet } from 'react-native'

//@TODO mover a un archivo comun
const style = StyleSheet.create({
  list: {
    marginRight: 15
  }
})

const ProductList = (props) => {
  return (
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
  )
}

export default ProductList

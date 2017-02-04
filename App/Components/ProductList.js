import React from 'react'
import { List, Text, View } from 'native-base'
import ProductItem from './ProductItem'
import { StyleSheet } from 'react-native'

// @TODO mover a un archivo comun
const style = StyleSheet.create({
  list: {
    marginRight: 15
  },
  text: {
    padding: 10
  }
})

const ProductList = (props) => {
  let list = null
  let productsExists = false

  list =
    <List style={style.list}>
      {
        props.products.map((product) => {
          if (props.currentSession && product.sessionId === props.currentSession.id) {
            productsExists = true
            return <ProductItem
              key={product.id}
              product={product}
              goToDetail={props.goToDetail}
              />
          }
        })
      }
    </List>

  return (
    <View>
      {productsExists ? list : <Text style={style.text}>Press the '+' button to begin adding products...</Text>}
    </View>
  )
}

export default ProductList

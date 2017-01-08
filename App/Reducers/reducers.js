import { showProducts } from './ProductReducer'
import { showProductDetail } from './ProductDetailReducer'
import { toggleDrawer } from './DrawerReducer'
import { combineReducers } from 'redux'
import cardNavigation from './CardStackReducer'

export default combineReducers({
        products: showProducts,
        navigation: cardNavigation,
        drawer: toggleDrawer
    })

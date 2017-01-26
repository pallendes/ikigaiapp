import { showProducts } from './ProductReducer'
import { showProductDetail } from './ProductDetailReducer'
import { toggleDrawer } from './DrawerReducer'
import { combineReducers } from 'redux'
import cardNavigation from './CardStackReducer'
import { cameraReducer } from './CameraReducer'
import { authReducer } from './LoginReducer'
import { userReducer } from './UserReducer'
import { categoryReducer } from './CategoryReducer'
import { factoryReducer } from './FactoryReducer'
import { sessionReducer } from './SessionReducer'

export default combineReducers({
        products: showProducts,
        navigation: cardNavigation,
        drawer: toggleDrawer,
        product: showProductDetail,
        camera: cameraReducer,
        auth: authReducer,
        user: userReducer,
        categories: categoryReducer,
        factories: factoryReducer,
        session: sessionReducer,
    })

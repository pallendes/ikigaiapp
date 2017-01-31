import { actions } from 'react-native-navigation-redux-helpers';
import { closeDrawer } from './DrawerActions';

const {
  replaceAt,
  popRoute,
  pushRoute,
} = actions;

export default navigateTo = (route, homeRoute, passProps = {}) => (dispatch, getState) => {

    const navigation = getState().navigation
    const currentRouteKey = navigation.routes[navigation.routes.length - 1].key

    dispatch(closeDrawer())

    if (currentRouteKey !== homeRoute && route !== homeRoute) {
      dispatch(replaceAt(currentRouteKey, { key: route, index: 1, passProps: passProps }, navigation.key))
    } else if (currentRouteKey !== homeRoute && route === homeRoute) {
      dispatch(popRoute(navigation.key))
    } else if (currentRouteKey === homeRoute && route !== homeRoute) {
      dispatch(pushRoute({ key: route, index: 1, passProps: passProps  }, navigation.key))
    }

}

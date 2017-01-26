import 'react-native'
import React from 'react'
import UserContainer from '../../App/Containers/UserContainer'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <UserContainer />
  )
})

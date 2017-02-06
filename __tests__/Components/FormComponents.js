import React from 'react'
import 'react-native'
import renderer from 'react-native-renderer'
import { FormInputComponent } from '../App/Components/FormInputComponents'

test('Renders component correctly', () => {
  const tree = renderer.create(
    <FormInputComponent
      title='Test'
      modelField='test'
      hideError />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})

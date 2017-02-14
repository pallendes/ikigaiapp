import React from 'react'
import 'react-native'
import 'native-base'
import { FormInputComponent } from '../../App/Components/FormComponents'
import { UserValidators } from '../../App/Models/userModel'
import { validateAll, validate } from '../../App/Models/ValidateModel'
import { ReactNativePropRegistry } from 'react-native'
import renderer from 'react-native-renderer'

var user = {}

beforeEach(() => {
  user = {
    email: 'allendes91@gmail.com',
    name: 'Pablo',
    lastName: 'Allendes',
    passwd: '12345678',
    pictureUri: []
  }
})

test('Renders FormInputComponent for an User with no errors', () => {
  const validModel = validateAll(UserValidators, user).valid
  const userValidation = validate(UserValidators.name, user.name)

  const tree = renderer.create(
    <FormInputComponent
      title='name'
      valid={validModel}
      validationMessage={userValidation.name.messages}
      modelField='name'
      placeholder='Enter your name...'
      iconPosition='right'
      value={user.name}
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
})

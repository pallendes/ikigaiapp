import ValidateModel from 'validate-model'

export default UserModel = {
  email: '',
  name: '',
  lastName: '',
  passwd: '',
  pictureUri: ''
}

export const UserModelValidation = {
  email: {},
  name: {},
  passwd: {}
}

export const validate = ValidateModel.validate
export const validateAll = ValidateModel.validateAll

export const UserValidators = {
  name: {
    title: 'Name',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
      message: '{TITLE} must be filled.'
    }]
  },
  email: {
    title: 'Email',
    validate: [{
      validator: 'isLength',
      arguments: [10, 255],
      message: '{TITLE} is too short'
    },
    {
      validator: 'isEmail',
      message: '{TITLE} must be valid'
    }]
  },
  passwd: {
    title: 'Password',
    validate: [{
      validator: 'isLength',
      arguments: [8, 255],
      message: '{TITLE} is too short'
    }]
  }
}

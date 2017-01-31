export default ProductModel = {
  id: 0,
  name: 'The product name',
  pictures: [],
  description: '',
  price: '1234',
  CBM: '3124',
  UXB: '1233',
  MOQ: '1233',
  factory: {},
  category: {},
  sessionId: ''
}

export const ProductModelValidation = {
  name: {},
  price: {},
  CMB: {},
  UXB: {},
  MOQ: {}
}

export const ProductValidators = {
  name: {
    title: 'Name',
    validate: [{
      validator: 'isLength',
      arguments: [1, 255],
      message: '{TITLE} must be filled.'
    }]
  },
  price: {
    title: 'Price',
    validate: [{
      validator: 'isNumeric',
      message: '{TITLE} must be a number!'
    }]
  },
  CBM: {
    title: 'CBM',
    validate: [{
      validator: 'isNumeric',
      message: '{TITLE} must be a number!'
    }]
  },
  UXB: {
    title: 'UXB',
    validate: [{
      validator: 'isNumeric',
      message: '{TITLE} must be a numeric value'
    }]
  },
  MOQ: {
    title: 'MOQ',
    validate: [{
      validator: 'isNumeric',
      message: '{TITLE} must be a numeric value'
    }]
  }
}

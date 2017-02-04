const ProductModel = {
  id: 0,
  name: '',
  pictures: [],
  description: '',
  price: '0',
  CBM: '0',
  UXB: '0',
  MOQ: '0',
  factory: {},
  category: {},
  sessionId: ''
}

export default ProductModel

export const ProductModelValidation = {
  name: {},
  price: {},
  CBM: {},
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

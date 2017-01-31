import React, { PropTypes, Component } from 'react'
import {
  InputGroup,
  Input,
  Icon,
  Button,
  Text,
  View} from 'native-base'
import { StyleSheet, Alert } from 'react-native'
import customTheme from '../Theme/custom'

const style = StyleSheet.create({
  errorIcon: {
    color:'red'
  },
  inputIcon: {
    color: '#0A69FE'
  },
  input: {
    paddingLeft: 0
  },
  successIcon: {
    color: '#00C497'
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#808080',
    paddingBottom: 0,
    paddingLeft: 0
  },
  errorText: {
    fontSize: 12,
    color: 'red',
    textAlign: 'right'
  }
})

export class FormInput extends Component {

  static propTypes = {
    iconPosition: PropTypes.string,
    validationMessage: PropTypes.array,
    valid: PropTypes.bool,
    placeholder: PropTypes.string,
    onChangeText: PropTypes.func,
    modelField: PropTypes.string.isRequired,
    inlineLabel: PropTypes.string
  }

  constructor(props) {
    super(props)
    this.state = {
      touched: false
    }
  }

  showErrorDialog = (message) => {
    Alert.alert(
      'Error',
      message,
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]
    )
  }

  render() {

    let validationError = null
    let successIcon = null
    let iconRight = this.props.iconPosition === 'right'
    let displayedIcon = null
    let valid = false
    let isDefinedDefaultIcon = this.props.icon !== undefined

    if(this.props.validationMessage) {
      validationError = this.props.validationMessage.length > 0 ? this.props.validationMessage[0] : this.props.validationMessage
    }

    if (this.props.icon !== undefined) {
      successIcon = this.props.icon
    } else {
      successIcon = 'ios-checkmark-circle-outline'
    }

    //if this.props.valid is not specified the model will not be validated
    valid = this.props.valid === undefined ? true : this.props.valid

    displayedIcon = valid ?
      (successIcon !== undefined ? <Icon name={successIcon} style={this.state.touched ? style.successIcon : style.inputIcon } /> : null )
      : <Button transparent onPress={() => this.showErrorDialog(validationError)}><Icon name={'ios-close-circle-outline'} style={style.errorIcon} /></Button>

    return (
      <View theme={customTheme}>
        {this.props.title !== undefined ? <Text note style={style.text}>{this.props.title}</Text> : null}
        <InputGroup
          iconRight={iconRight}
          error={!valid}
          success={this.state.touched && valid}>
          {(this.state.touched || isDefinedDefaultIcon) && displayedIcon}
          <Input
            placeholder={this.props.placeholder ? this.props.placeholder : ''}
            value={this.props.value}
            multiline={this.props.multiline !== undefined}
            secureTextEntry={this.props.secureTextEntry !== undefined}
            style={style.input}
            onChangeText={(text) => {
              this.props.onChangeText({text}.text, this.props.modelField);
              this.setState({touched: true})
              }
            }/>
        </InputGroup>
        { this.props.hideError !== undefined ? null : <Text note style={style.errorText}>{validationError}</Text> }
      </View>
    )
  }
}

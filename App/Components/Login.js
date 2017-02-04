import React from 'react'
import { Container,
   Content,
   List,
   ListItem,
   InputGroup,
   Icon,
   Text,
   View,
   Button,
   Spinner,
   Input } from 'native-base'
import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
  list: {
    paddingRight: 45,
    paddingLeft: 30
  },
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: Dimensions.get('window').height
  }
})

const Login = ({login, register, ...props}) => {
  let loginButton = (
    <Button
      onPress={() => login('', '')}
      block
      style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
              Login
            </Button>)

  if (props.auth.isProcessing) {
    loginButton = (<View style={{alignItems: 'center'}}><Spinner color='blue' /></View>)
  }

  if (!props.auth.rehydratated) {
    return (
      <Container>
        <Content>
          <View style={style.loader}>
            <Spinner color='blue' />
            <Text>Loading...</Text>
          </View>
        </Content>
      </Container>
    )
  } else {
    return (
      <Container>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <Content>
            <Text style={{fontSize: 52, textAlign: 'center', padding: 15, color: '#0A69FE'}}>Ikigai</Text>
            <List style={style.list}>
              <ListItem>
                <InputGroup>
                  <Icon name='ios-person' style={{ color: '#0A69FE' }} />
                  <Input placeholder='Email'
                    keyboardType='email-address'
                    onChangeText={(text) => props.handleChangeText({text}.text, 'userEmail')} />
                </InputGroup>
              </ListItem>
              <ListItem>
                <InputGroup>
                  <Icon name='ios-unlock' style={{ color: '#0A69FE' }} />
                  <Input placeholder='Password'
                    secureTextEntry
                    onChangeText={(text) => props.handleChangeText({text}.text, 'passwd')} />
                </InputGroup>
              </ListItem>
            </List>
            {loginButton}
            <Text onPress={() => register()} style={{alignSelf: 'center'}}>New here?</Text>
          </Content>
        </View>
      </Container>
    )
  }
}

export default Login
